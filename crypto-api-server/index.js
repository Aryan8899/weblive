require("dotenv").config();

const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// CORS configuration
app.use(cors({
  origin: 'https://webthreeworld.com',
  credentials: true,
}));

// Additional CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://webthreeworld.com');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

console.log("Environment:", process.env.NODE_ENV);
console.log("CMC_API_KEY:", process.env.CMC_API_KEY ? "Set" : "Not set");

// Helper function for CoinMarketCap API requests
async function fetchFromCMC(endpoint, params = {}) {
  console.log(`Fetching from CMC: ${endpoint}`);
  try {
    const response = await axios.get(`https://pro-api.coinmarketcap.com/v1${endpoint}`, {
      headers: {
        "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY,
      },
      params: {
        ...params,
        convert: "USD",
      },
    });
    console.log(`CMC API response status: ${response.status}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from CoinMarketCap API (${endpoint}):`, error.message);
    if (error.response) {
      console.error('Error response:', error.response.data);
    }
    throw error;
  }
}

app.get("/api/cryptocurrencies", async (req, res) => {
  console.log("Cryptocurrencies API called");
  try {
    const data = await fetchFromCMC("/cryptocurrency/listings/latest", { start: 1, limit: 100 });
    data.data.forEach((crypto) => {
      crypto.logo = `https://s2.coinmarketcap.com/static/img/coins/64x64/${crypto.id}.png`;
    });
    res.json(data);
  } catch (error) {
    console.error("Error in /api/cryptocurrencies:", error);
    res.status(500).json({ error: "Failed to fetch data", details: error.message });
  }
});

app.get("/api/trending", async (req, res) => {
  console.log("Trending API called");
  try {
    const data = await fetchFromCMC("/cryptocurrency/listings/latest", { start: 1, limit: 100 });
    const trendingData = data.data
      .sort((a, b) => b.quote.USD.percent_change_24h - a.quote.USD.percent_change_24h)
      .slice(0, 10);
    trendingData.forEach((crypto) => {
      crypto.logo = `https://s2.coinmarketcap.com/static/img/coins/64x64/${crypto.id}.png`;
    });
    res.json(trendingData);
  } catch (error) {
    console.error("Error in /api/trending:", error);
    res.status(500).json({ error: "Failed to fetch trending data", details: error.message });
  }
});

app.get("/api/top-gainers", async (req, res) => {
  console.log("Top Gainers API called");
  try {
    const data = await fetchFromCMC("/cryptocurrency/listings/latest", { start: 1, limit: 3, sort: "percent_change_24h", sort_dir: "desc" });
    const topGainers = data.data.map((crypto) => ({
      id: crypto.id,
      name: crypto.name,
      symbol: crypto.symbol,
      logo: `https://s2.coinmarketcap.com/static/img/coins/64x64/${crypto.id}.png`,
      changePercent24Hr: crypto.quote.USD.percent_change_24h,
    }));
    res.json(topGainers);
  } catch (error) {
    console.error("Error in /api/top-gainers:", error);
    res.status(500).json({ error: "Failed to fetch top gainers", details: error.message });
  }
});

app.get("/api/top-losers", async (req, res) => {
  console.log("Top Losers API called");
  try {
    const data = await fetchFromCMC("/cryptocurrency/listings/latest", { start: 1, limit: 3, sort: "percent_change_24h", sort_dir: "asc" });
    const topLosers = data.data.map((crypto) => ({
      id: crypto.id,
      name: crypto.name,
      symbol: crypto.symbol,
      logo: `https://s2.coinmarketcap.com/static/img/coins/64x64/${crypto.id}.png`,
      changePercent24Hr: crypto.quote.USD.percent_change_24h,
    }));
    res.json(topLosers);
  } catch (error) {
    console.error("Error in /api/top-losers:", error);
    res.status(500).json({ error: "Failed to fetch top losers", details: error.message });
  }
});

app.get("/api/cryptocurrencies/:id", async (req, res) => {
  console.log("Specific Cryptocurrency API called");
  const cryptoId = req.params.id;
  try {
    const data = await fetchFromCMC("/cryptocurrency/listings/latest", { start: 1, limit: 100 });
    const crypto = data.data.find((c) => c.id == cryptoId);
    if (crypto) {
      crypto.logo = `https://s2.coinmarketcap.com/static/img/coins/64x64/${cryptoId}.png`;
      res.json(crypto);
    } else {
      res.status(404).json({ error: "Cryptocurrency not found" });
    }
  } catch (error) {
    console.error("Error in /api/cryptocurrencies/:id:", error);
    res.status(500).json({ error: "Failed to fetch cryptocurrency details", details: error.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Internal Server Error', details: err.message });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});