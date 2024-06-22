import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bitcon from "./bitcoin.svg"
import ethereum from "./ethereum-cryptocurrency.svg"
import tether from "./tether-cryptocurrency.svg"
import bnb from "./binance-coin-bnb.svg"
import solana from "./solana-sol.svg"
import usdc from "./usd-coin-usdc.svg"
import xrp from "./xrp-cryptocurrency.svg"
import doge from "./dogecoin-cryptocurrency.svg"

function News() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-2">News</h1>
          <p className="text-gray-500">Insights about breakthrough's in crypto industry!</p>
        </div>
        <div className="relative">
          <button
            className="border border-gray-300 rounded px-4 py-2 text-gray-700"
            onClick={toggleDropdown}
          >
            All Coins
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-3 py-2 border-b border-gray-300 text-gray-700 focus:outline-none"
                />
                <div className="py-1">
                  <Link to="/" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <img src={bitcon} alt="Bitcoin" className="w-5 h-5 mr-2" />
                    Bitcoin
                  </Link>
                  <Link to="/" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <img src={ethereum} alt="Ethereum" className="w-5 h-5 mr-2" />
                    Ethereum
                  </Link>
                  <Link to="/" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <img src={tether} alt="Tether" className="w-5 h-5 mr-2" />
                    Tether USDT
                  </Link>
                  <Link to="/" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <img src={bnb} alt="BNB" className="w-5 h-5 mr-2" />
                    BNB
                  </Link>
                  <Link to="/" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <img src={solana} alt="Solana" className="w-5 h-5 mr-2" />
                    Solana
                  </Link>
                  <Link to="/" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <img src={usdc} alt="USDC" className="w-5 h-5 mr-2" />
                    USDC
                  </Link>
                  <Link to="/" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <img src={xrp} alt="XRP" className="w-5 h-5 mr-2" />
                    XRP
                  </Link>
                  <Link to="/" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <img src={doge} alt="Dogecoin" className="w-5 h-5 mr-2" />
                    Dogecoin
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
}

export default News;
