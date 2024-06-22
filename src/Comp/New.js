import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Switch } from "@headlessui/react";
import { FaInfoCircle } from "react-icons/fa";
import axios from "axios";
import "../index.css";
import gauge from "./gauge.png";
import trade from "./Binance Cover.png";
import kuku from "./Kucoin Cover.png";
import bybit from "./ByBit Cover.png";
import { Tweet } from "react-tweet";

const constantData = {
  infoText: `When the value is closer to 0, the market is in Extreme Fear, and investors have over-sold irrationally.\n\nWhen the value is closer to 100, the market is in Extreme Greed, indicating a likely market correction.\n\nCoinMarketCap uses the price and trading data of the most popular crypto coins, together with our unique user behaviour data to present a more accurate crypto market sentiment.`,
};

function New() {
  const [enabled, setEnabled] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
  const [trendingData, setTrendingData] = useState([]);
  const [tweets, setTweets] = useState([]);
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);
  const [showAdvertisement, setShowAdvertisement] = useState(true);

  useEffect(() => {
    const fetchTrendingData = async () => {
      try {
        const response = await axios.get(
          "https://webthreeworld-qf2nswbna-ad99india.vercel.app/api/trending"
        );
        setTrendingData(response.data.slice(0, 3));
      } catch (error) {
        console.error("Error fetching trending data:", error);
      }
    };

    const fetchTweets = async () => {
      try {
        const response = await axios.get("https://webthreeworld/tweets");
        setTweets(response.data.data);
      } catch (error) {
        console.error("Error fetching tweets:", error);
      }
    };

    const fetchGainersAndLosers = async () => {
      try {
        const gainersResponse = await axios.get(
          "https://webthreeworld-qf2nswbna-ad99india.vercel.app/api/top-gainers"
        );
        const losersResponse = await axios.get(
          "https://webthreeworld-qf2nswbna-ad99india.vercel.app/api/top-losers"
        );

        console.log("Gainers:", gainersResponse.data);
        console.log("Losers:", losersResponse.data);

        setGainers(gainersResponse.data);
        setLosers(losersResponse.data);
      } catch (error) {
        console.error("Error fetching gainers/losers data:", error);
      }
    };

    fetchTrendingData();
    fetchTweets();
    fetchGainersAndLosers();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: enabled,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const renderSlide = (slide) => {
    if (slide.title === "Trending") {
      return (
        <div className="p-4 border border-gray-300 rounded-lg shadow-lg bg-white h-50 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4 h-15">
              <h3 className="font-bold text-lg">🔥 {slide.title}</h3>
              <button className="text-blue-600 hover:underline">More</button>
            </div>
            <ul>
              {slide.items.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center mb-2 mt-4"
                >
                  <span className="flex items-center">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-7 h-7 mr-2 mt-1"
                    />
                    {index + 1}. {item.name} ({item.symbol})
                  </span>
                  <span
                    className={`${
                      item.quote.USD.percent_change_24h > 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {item.quote.USD.percent_change_24h.toFixed(2)}%
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    } else if (slide.title === "Tweet") {
      return (
        <div
          className="p-5 -my-20 -border border-gray-500 rounded-lg shadow-lg bg-white flex flex-col justify-center mx-auto max-w-full py-1"
          style={{ height: "250px" }}
        >
          <div className="flex justify-center items-center h-max -mt-8 transform translate-y-8 -my-40">
            <Tweet id={slide.content} />
          </div>
        </div>
      );
    } else if (slide.title === "Top Gainers") {
      return (
        <div className="p-4 border border-gray-300 rounded-lg shadow-lg bg-white h-50 flex flex-col justify-between">
          <div>
            <h4 className="font-bold text-lg mb-3 mt-2">Top Gainers</h4>
            <ul>
              {gainers.map((crypto, index) => (
                <li
                  key={crypto.id}
                  className="flex justify-between items-center mb-4 text-lg"
                >
                  <span className="flex items-center text-lg">
                    <img
                      src={crypto.logo}
                      alt={crypto.name}
                      className="w-6 h-6 mr-2 text-lg"
                    />
                    {index + 1}. {crypto.name} ({crypto.symbol})
                  </span>
                  <span className="text-green-600 text-lg">
                    {parseFloat(crypto.changePercent24Hr).toFixed(2)}%
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    } else if (slide.title === "Top Losers") {
      return (
        <div className="p-4 border border-gray-300 rounded-lg shadow-lg bg-white h-full flex flex-col justify-between">
          <div>
            <h4 className="font-bold text-lg mb-3 mt-2">Top Losers</h4>
            <ul>
              {losers.map((crypto, index) => (
                <li
                  key={crypto.id}
                  className="flex justify-between items-center mb-4 text-lg"
                >
                  <span className="flex items-center text-lg">
                    <img
                      src={crypto.logo}
                      alt={crypto.name}
                      className="w-6 h-6 mr-2 text-lg"
                    />
                    {index + 1}. {crypto.name} ({crypto.symbol})
                  </span>
                  <span className="text-red-600 text-lg">
                    {parseFloat(crypto.changePercent24Hr).toFixed(2)}%
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    } else if (slide.title === "Advertisement") {
      return (
        <div>
          <div className="text-center">
            <a
              href="https://accounts.binance.com/en/register?ref=928388057&gad_source=1&gclid=Cj0KCQjwvb-zBhCmARIsAAfUI2sG1TgNkq3B7o1n_2rvUF0PfPXJ5SPnxXGnN3eZcGT6Y8nXeHo-fuEaAp77EALw_wcB"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="mt-3 relative cursor-pointer border-gray-300 rounded-lg shadow-lg bg-white h-full flex flex-col justify-center mx-auto"
                src={trade}
                alt="Advertisement"
              />
            </a>
          </div>
        </div>
      );
    } else if (slide.title === "Kucoin") {
      return (
        <div>
          <div className="text-center">
            <a
              href="https://www.kucoin.com/ucenter/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="mt-3 relative cursor-pointer border-gray-300 rounded-lg shadow-lg bg-white h-full flex flex-col justify-center mx-auto"
                src={kuku}
                alt="Advertisement"
              />
            </a>
          </div>
        </div>
      );
    } else if (slide.title === "ByBit") {
      return (
        <div>
          <div className="text-center">
            <a
              href="https://www.bybit.com/en/register"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="mt-3 relative cursor-pointer border-gray-300 rounded-lg shadow-lg bg-white h-full flex flex-col justify-center mx-auto"
                src={bybit}
                alt="Advertisement"
              />
            </a>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="App">
      <header className="bg-white border-b border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">
              Top Cryptocurrency Price & Market Cap
            </h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 font-bold">Highlights</span>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                  enabled ? "bg-blue-600" : "bg-gray-200"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className="sr-only">Enable carousel</span>
                <span
                  className={`${
                    enabled ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform bg-white rounded-full transition`}
                />
              </Switch>
            </div>
          </div>
        </div>
      </header>
      {enabled && (
        <div className="container mx-auto px-4 py-8 flex flex-wrap -mx-2">
          <div className="w-full md:w-1/3 px-2 mb-4">
            <Slider {...settings}>
              {[
                {
                  title: "Trending",
                  items: trendingData,
                },
                {
                  title: "Top Gainers",
                },
                {
                  title: "Top Losers",
                },
              ].map((slide, index) => (
                <div key={index} className="h-full">
                  {renderSlide(slide)}
                </div>
              ))}
            </Slider>
          </div>

          <div className="w-full md:w-1/3 px-2 mb-4 py-6">
            <Slider {...settings}>
              {[
                {
                  title: "Tweet",
                  content: "1801872262980649193",
                },
                {
                  title: "Tweet",
                  content: "1801872262980649193",
                },
                {
                  title: "Tweet",
                  content: "1801872262980649193",
                },
              ].map((slide, index) => (
                <div key={index} className="h-full">
                  {renderSlide(slide)}
                </div>
              ))}
            </Slider>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4 h-full">
            <Slider {...settings}>
              {[
                {
                  title: "Advertisement",
                },
                {
                  title: "Kucoin",
                },
                {
                  title: "ByBit",
                },
              ].map((slide, index) => (
                <div key={index} className="h-full">
                  {renderSlide(slide)}
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
}

export default New;
