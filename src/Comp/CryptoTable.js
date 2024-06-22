import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import icon1 from "./gr1.png";
import icon2 from "./gr2.png";
import icon3 from "./gr3.png";
import lol from "./lol.png";
import nft from "./nft.png";
import gaming from "./gaming.png";
import ai from "./ai.png";
import blockchain from "./blockchain.png";
import metaverse from "./metaverse.png";

const generateRandomHistoricalData = () => {
  const data = [];
  let baseValue = 100;
  for (let i = 1; i <= 7; i++) {
    const change = Math.floor(Math.random() * 40 - 20); // Random change between -20 and 20
    baseValue += change;
    data.push({ name: `Day ${i}`, value: baseValue });
  }
  return data;
};

const images = [icon1, icon2, icon3];

const filterOptions = {
  category: ["Platform", "Store Of Value", "Atomic Swaps", "Centralized Exchange (CEX) Token", "Collectibles & NFTs", "Decentralized Exchange (DEX) Token"],
  algorithm: ["SHA-256", "Scrypt", "Ethash", "X11"],
  platform: ["Ethereum", "Binance Smart Chain", "Solana", "Polygon"],
  industry: ["Finance", "Gaming", "Art", "Technology"]
};

const FilterDropdown = ({ options, onSelect }) => {
  return (
    <div className="absolute z-10 bg-white border rounded-md shadow-lg mt-2 w-64">
      <input
        type="text"
        placeholder="Search"
        className="p-2 border-b w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="p-2">
        <h3 className="text-xs font-bold text-gray-500 mb-2">
          Popular Categories
        </h3>
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => onSelect(option)}
            className="cursor-pointer hover:bg-gray-100 p-2 rounded-md"
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

const CryptoTable = () => {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);
  const [rowsToShow, setRowsToShow] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRows, setTotalRows] = useState(100); // Initialize totalRows to 100
  const [activeButton, setActiveButton] = useState("Cryptocurrencies");
  const [showFilters, setShowFilters] = useState(false); // State to manage filter visibility
  const [activeFilter, setActiveFilter] = useState(null); // State to manage active filter
  const [filters, setFilters] = useState({
    category: null,
    algorithm: null,
    platform: null,
    industry: null,
  });

  const navigate = useNavigate(); // Initialize navigate

  const fetchData = async (page = 1) => {
    try {
      const response = await axios.get(
        `https://webthreeworld-qf2nswbna-ad99india.vercel.app/api/cryptocurrencies?page=${page}&limit=${rowsToShow}`
      );
      setCryptocurrencies(
        response.data.data.map((crypto, index) => ({
          ...crypto,
          historicalData: generateRandomHistoricalData(),
          image: images[index % images.length],
        }))
      );
      if (response.data.total) {
        setTotalRows(response.data.total);
      } else {
        console.error("Total rows not found in response:", response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, rowsToShow]);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleRowClick = (id) => {
    navigate(`/detail/${id}`); // Navigate to detail page with the crypto id
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRowsToShowChange = (event) => {
    const newRowsToShow = Number(event.target.value);
    setRowsToShow(newRowsToShow);
    setCurrentPage(1); // Reset to first page whenever rowsToShow changes
  };

  const totalPages = Math.ceil(totalRows / rowsToShow);

  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
    setActiveFilter(null); // Close the filter dropdown
    fetchData(1); // Reset to first page when filter changes
  };

  const toggleFilter = (filterName) => {
    setActiveFilter(activeFilter === filterName ? null : filterName);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center py-4">
        <div className="flex space-x-2">
          <button
            className={`px-3 py-2 rounded-full text-xs font-bold ${
              activeButton === "Cryptocurrencies"
                ? "bg-gray-100 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => handleButtonClick("Cryptocurrencies")}
          >
            <span className="inline-block mr-1">⚙️</span>
            Cryptocurrencies
          </button>
          <button
            className={`px-3 py-2 rounded-full text-xs font-bold ${
              activeButton === "NFTs"
                ? "bg-gray-100 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => handleButtonClick("NFTs")}
          >
            <span className="inline-block mr-1">🌐</span>
            NFTs
          </button>
          <button
            className={`px-3 py-2 rounded-full text-xs font-bold ${
              activeButton === "Categories"
                ? "bg-gray-100 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => handleButtonClick("Categories")}
          >
            <span className="inline-block mr-1">☰</span>
            Categories
          </button>
        </div>
        <div className="flex items-center space-x-4 ml-4">
          <div className="border-l border-gray-300 h-6"></div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <img className="h-6" src={lol} alt="Memes icon" />
              <button
                className={`text-gray-500 text-sm px-2 py-2 rounded-full font-bold ${
                  activeButton === "Memes" ? "bg-gray-100 text-blue-500" : ""
                }`}
                onClick={() => handleButtonClick("Memes")}
              >
                Memes
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <img className="h-6" src={nft} alt="NFT icon" />
              <button
                className={`text-gray-500 text-sm px-2 py-2 rounded-full font-bold ${
                  activeButton === "NFT" ? "bg-gray-100 text-blue-500" : ""
                }`}
                onClick={() => handleButtonClick("NFT")}
              >
                NFT
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <img className="h-6" src={gaming} alt="Gaming icon" />
              <button
                className={`text-gray-500 text-sm px-2 py-2 rounded-full font-bold ${
                  activeButton === "Gaming" ? "bg-gray-100 text-blue-500" : ""
                }`}
                onClick={() => handleButtonClick("Gaming")}
              >
                Gaming
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <img className="h-6" src={ai} alt="AI icon" />
              <button
                className={`text-gray-500 text-sm px-2 py-2 rounded-full font-bold ${
                  activeButton === "AI" ? "bg-gray-100 text-blue-500" : ""
                }`}
                onClick={() => handleButtonClick("AI")}
              >
                AI
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <img className="h-6" src={blockchain} alt="Blockchain icon" />
              <button
                className={`text-gray-500 text-sm px-2 py-2 rounded-full font-bold ${
                  activeButton === "Blockchain" ? "bg-gray-100 text-blue-500" : ""
                }`}
                onClick={() => handleButtonClick("Blockchain")}
              >
                Blockchain
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <img className="h-6" src={metaverse} alt="Metaverse icon" />
              <button
                className={`text-gray-500 text-sm px-2 py-2 rounded-full font-bold ${
                  activeButton === "Metaverse" ? "bg-gray-100 text-blue-500" : ""
                }`}
                onClick={() => handleButtonClick("Metaverse")}
              >
                Metaverse
              </button>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 items-center">
          <span className="text-gray-500 text-sm">Show rows</span>
          <select
            value={rowsToShow}
            onChange={handleRowsToShowChange}
            className="text-gray-500 text-sm border rounded-full px-3 py-2"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <button
            className="text-gray-500 text-sm px-4 py-2 rounded-full border border-gray-300 bg-white shadow-sm hover:bg-gray-100 focus:outline-none"
            onClick={() => setShowFilters(!showFilters)} // Toggle filter visibility
          >
            Filters
          </button>
          <button className="text-gray-500 text-sm px-4 py-2 rounded-full border border-gray-300 bg-white shadow-sm hover:bg-gray-100 focus:outline-none">
            Customize
          </button>
        </div>
      </div>
      {showFilters && ( // Conditionally render the filters
        <div className="flex space-x-4 py-4 relative">
          <div className="relative">
            <button
              onClick={() => toggleFilter("category")}
              className="bg-gray-100 text-gray-500 text-sm px-4 py-2 rounded-full"
            >
              Category
            </button>
            {activeFilter === "category" && (
              <FilterDropdown
                options={filterOptions.category}
                onSelect={(option) => handleFilterChange("category", option)}
              />
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => toggleFilter("algorithm")}
              className="bg-gray-100 text-gray-500 text-sm px-4 py-2 rounded-full"
            >
              Algorithm
            </button>
            {activeFilter === "algorithm" && (
              <FilterDropdown
                options={filterOptions.algorithm}
                onSelect={(option) => handleFilterChange("algorithm", option)}
              />
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => toggleFilter("platform")}
              className="bg-gray-100 text-gray-500 text-sm px-4 py-2 rounded-full"
            >
              Platform
            </button>
            {activeFilter === "platform" && (
              <FilterDropdown
                options={filterOptions.platform}
                onSelect={(option) => handleFilterChange("platform", option)}
              />
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => toggleFilter("industry")}
              className="bg-gray-100 text-gray-500 text-sm px-4 py-2 rounded-full"
            >
              Industry
            </button>
            {activeFilter === "industry" && (
              <FilterDropdown
                options={filterOptions.industry}
                onSelect={(option) => handleFilterChange("industry", option)}
              />
            )}
          </div>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                #
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                1h %
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                24h %
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                7d %
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Market Cap
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Volume(24h)
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Circulating Supply
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Last 7 Days
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {cryptocurrencies
              .slice((currentPage - 1) * rowsToShow, currentPage * rowsToShow)
              .map((crypto) => (
                <tr
                  key={crypto.id}
                  className="cursor-pointer hover:bg-gray-50"
                  onClick={() => handleRowClick(crypto.id)}
                >
                  <td className="px-4 py-2 whitespace-nowrap text-sm">
                    {crypto.cmc_rank}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm font-medium flex items-center">
                    <img
                      src={crypto.logo}
                      alt={crypto.name}
                      className="w-6 h-6 mr-2"
                    />
                    {crypto.name} ({crypto.symbol})
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm font-medium">
                    ${crypto.quote.USD.price.toFixed(2)}
                  </td>
                  <td
                    className={`px-4 py-2 whitespace-nowrap text-sm font-medium ${
                      crypto.quote.USD.percent_change_1h < 0
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {crypto.quote.USD.percent_change_1h.toFixed(2)}%
                  </td>
                  <td
                    className={`px-4 py-2 whitespace-nowrap text-sm font-medium ${
                      crypto.quote.USD.percent_change_24h < 0
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {crypto.quote.USD.percent_change_24h.toFixed(2)}%
                  </td>
                  <td
                    className={`px-4 py-2 whitespace-nowrap text-sm font-medium ${
                      crypto.quote.USD.percent_change_7d < 0
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {crypto.quote.USD.percent_change_7d.toFixed(2)}%
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm font-medium">
                    ${crypto.quote.USD.market_cap.toLocaleString()}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm font-medium">
                    ${crypto.quote.USD.volume_24h.toLocaleString()}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm font-medium">
                    {crypto.circulating_supply.toLocaleString()} {crypto.symbol}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm">
                    <img
                      src={crypto.image}
                      alt="Historical data"
                      className="h-16 w-auto"
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-center py-4">
        <div className="flex justify-between items-center w-full">
          <span className="text-gray-500 text-sm font-bold">
            Showing {(currentPage - 1) * rowsToShow + 1} -{" "}
            {Math.min(currentPage * rowsToShow, totalRows)} out of {totalRows}
          </span>
          {rowsToShow < totalRows && (
            <div className="flex items-center">
              <button
                onClick={() => handlePageClick(currentPage - 1)}
                disabled={currentPage === 1}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageClick(index + 1)}
                  aria-current={currentPage === index + 1 ? "page" : undefined}
                  className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                    currentPage === index + 1
                      ? "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageClick(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          )}
          <div className="flex items-center">
            <span className="text-gray-500 text-sm">Show rows</span>
            <select
              value={rowsToShow}
              onChange={handleRowsToShowChange}
              className="text-gray-500 text-sm border rounded-full px-3 py-2 ml-2"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>
        </div>
        <div className="w-full h-px bg-gray-200 mt-4"></div> {/* This is the gray line */}
      </div>
    </div>
  );
};

export default CryptoTable;
