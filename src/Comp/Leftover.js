import React from 'react';
import pic1 from "./left2.png"

const SubscribeSection = () => {
  return (
    <div className="bg-yellow-50 dark:bg-gray-800 py-12 px-4 sm:px-7 lg:px-8 ">
      <div className="max-w-7xl mx-auto lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          Keep up with Web3. Anytime, anywhere.
          </h2>
          <p className="mt-3 max-w-3xl text-lg text-gray-700 dark:text-gray-300">
          Stay informed with the latest crypto news, research insights, reward programs, event updates, coin listings, and more from Web3 World. Keep your finger on the pulse of the crypto world!
          </p>
          
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <img
            className="mx-auto h-64 w-auto flex justify-end"
            src={pic1}
            alt="Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
