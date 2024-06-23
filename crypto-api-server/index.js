require("dotenv").config();

const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;

// const corsOptions = {
//   origin: "https://webthreeworld.com",
//   methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
//   allowedHeaders: [
//     "Content-Type",
//     "Authorization",
//     "X-CSRF-Token",
//     "X-Requested-With",
//     "Accept",
//     "Accept-Version",
//     "Content-Length",
//     "Content-MD5",
//     "Date",
//     "X-Api-Version",
//   ],
//   credentials: true,
// };

app.use(cors());
console.log("Index JS Running");
// Middleware to log and check for API key
// app.use((req, res, next) => {
//   console.log("Usg API Key:", process.env.CMC_API_KEY);
//   if (!process.env.CMC_API_KEY) {
//     return res.status(500).json({ error: "API key is missing" });
//   }
//   next();
// });

app.get("/api/cryptocurrencies", async (req, res) => {
  try {
    console.log("Requesting latest cryptocurrencies data");
    const response = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY,
        },
        params: {
          start: 1,
          limit: 100,
          convert: "USD",
        },
      }
    );

    response.data.data.forEach((crypto) => {
      crypto.logo = `https://s2.coinmarketcap.com/static/img/coins/64x64/${crypto.id}.png`;
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data from CoinMarketCap API:", error.message);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.get("/api/trending", async (req, res) => {
  try {
    console.log("Requesting trending cryptocurrencies data");
    const response = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY,
        },
        params: {
          start: 1,
          limit: 100,
          convert: "USD",
        },
      }
    );

    const trendingData = response.data.data.sort(
      (a, b) => b.quote.USD.percent_change_24h - a.quote.USD.percent_change_24h
    );

    trendingData.forEach((crypto) => {
      crypto.logo = `https://s2.coinmarketcap.com/static/img/coins/64x64/${crypto.id}.png`;
    });

    const topTrending = trendingData.slice(0, 10);

    res.json(topTrending);
  } catch (error) {
    console.error(
      "Error fetching trending data from CoinMarketCap API:",
      error.message
    );
    res.status(500).json({ error: "Failed to fetch trending data" });
  }
});

app.get("/api/top-gainers", async (req, res) => {
  try {
    console.log("Requesting top gainers data");
    const response = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY,
        },
        params: {
          start: 1,
          limit: 3,
          convert: "USD",
          sort: "percent_change_24h",
          sort_dir: "desc",
        },
      }
    );

    const topGainers = response.data.data.map((crypto) => ({
      id: crypto.id,
      name: crypto.name,
      symbol: crypto.symbol,
      logo: `https://s2.coinmarketcap.com/static/img/coins/64x64/${crypto.id}.png`,
      changePercent24Hr: crypto.quote.USD.percent_change_24h,
    }));

    res.json(topGainers);
  } catch (error) {
    console.error("Error fetching top gainers:", error.message);
    res.status(500).json({ error: "Failed to fetch top gainers" });
  }
});

app.get("/api/top-losers", async (req, res) => {
  try {
    console.log("Requesting top losers data");
    const response = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY,
        },
        params: {
          start: 1,
          limit: 3,
          convert: "USD",
          sort: "percent_change_24h",
          sort_dir: "asc",
        },
      }
    );

    const topLosers = response.data.data.map((crypto) => ({
      id: crypto.id,
      name: crypto.name,
      symbol: crypto.symbol,
      logo: `https://s2.coinmarketcap.com/static/img/coins/64x64/${crypto.id}.png`,
      changePercent24Hr: crypto.quote.USD.percent_change_24h,
    }));

    res.json(topLosers);
  } catch (error) {
    console.error("Error fetching top losers:", error.message);
    res.status(500).json({ error: "Failed to fetch top losers" });
  }
});

app.get("/api/cryptocurrencies/:id", async (req, res) => {
  const cryptoId = req.params.id;
  try {
    console.log("Requesting data for cryptocurrency ID:", cryptoId);
    const response = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY,
        },
        params: {
          start: 1,
          limit: 100,
          convert: "USD",
        },
      }
    );

    const crypto = response.data.data.find((c) => c.id == cryptoId);

    if (crypto) {
      crypto.logo = `https://s2.coinmarketcap.com/static/img/coins/64x64/${cryptoId}.png`;
      res.json(crypto);
    } else {
      res.status(404).json({ error: "Cryptocurrency not found" });
    }
  } catch (error) {
    console.error("Error fetching cryptocurrency details:", error.message);
    res.status(500).json({ error: "Failed to fetch cryptocurrency details" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
