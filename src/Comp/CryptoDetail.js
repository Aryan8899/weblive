import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CryptoDetail = () => {
  const { id } = useParams();
  const [cryptoDetail, setCryptoDetail] = useState(null);
  const [error, setError] = useState(null); // Add state to handle errors

  useEffect(() => {
    const fetchCryptoDetail = async () => {
      try {
        const response = await axios.get(
          `https://weblive-1.onrender.com/api/cryptocurrencies/${id}`
        );
        setCryptoDetail(response.data);
      } catch (error) {
        console.error("Error fetching crypto detail:", error);
        setError(error.response ? error.response.data : "An error occurred"); // Set the error state
      }
    };

    fetchCryptoDetail();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>; // Display the error message
  }

  if (!cryptoDetail) {
    return <div>Loading...</div>;
  }

  const USD = cryptoDetail.quote ? cryptoDetail.quote.USD : null;
  if (!USD) {
    return <div>Data for this cryptocurrency is not available.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {cryptoDetail.name} ({cryptoDetail.symbol})
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Cryptocurrency details and information.
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Price</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                ${USD.price.toFixed(2)}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Market Cap</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                ${USD.market_cap.toLocaleString()}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Volume (24h)
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                ${USD.volume_24h.toLocaleString()}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Circulating Supply
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {cryptoDetail.circulating_supply.toLocaleString()}{" "}
                {cryptoDetail.symbol}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Last 7 Days</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <img
                  src={cryptoDetail.logo}
                  alt="Historical data"
                  className="h-16 w-auto"
                />
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default CryptoDetail;
