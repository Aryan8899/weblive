import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
  BookOpenIcon,
  AcademicCapIcon,
  ChartBarIcon,
  VideoCameraIcon,
  NewspaperIcon,
} from "@heroicons/react/20/solid";
import PetrolPumpIcon from "./black-petrol.webp";
import Web3world from "./Web3 World.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import News from "../news/news";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import USDImage from "./usd.png"; // Add the path to the currency images
import EURImage from "./eur.png";
import GBPImage from "./gbp.png";
import BTCImage from "./btc.png";
import ETHImage from "./eth.png";
import BITSImage from "./btc.png";
import SATSImage from "./sats.png";
import AUDImage from "./aud.png";
import BRLImage from "./brl.png";
import CADImage from "./cad.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const [isCurrencyModalOpen, setCurrencyModalOpen] = useState(false);

  const openCurrencyModal = () => setCurrencyModalOpen(true);
  const closeCurrencyModal = () => setCurrencyModalOpen(false);

  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouseEnter = (dropdown) => {
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <div className="App">
      <style>{`
          html, body {
            overflow: auto;
            height: 100%;
          }
        `}</style>
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        {/* Top section with market stats */}
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-xs text-gray-500">
          <div className="flex space-x-4">
            <span className="font-bold text-xs">
              Crypto: <span className="text-blue-600 text-xs">2.4M+</span>
            </span>
            <span className="font-bold text-xs">
              Exchanges: <span className="text-blue-600 text-xs">770</span>
            </span>
            <span className="font-bold text-xs">
              Market Cap: <span className="text-blue-600 text-xs">$2.56T</span>
              <span className="text-red-600 text-xs">🔻1.47%</span>
            </span>
            <span className="font-bold text-xs">
              24h Vol: <span className="text-blue-600 text-xs">$91.03B</span>
              <span className="text-red-600 text-xs">🔻12.50%</span>
            </span>
            <span className="font-bold text-xs">
              Dominance:{" "}
              <span className="text-blue-600 text-xs">
                BTC: 52.4% ETH: 18.2%
              </span>
            </span>
          </div>
          <div className="flex items-center space-x-8">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 text-sm font-bold text-black">
                  English
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                show={openDropdown === "language"}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-black font-bold"
                              : "text-black font-bold",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          English
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-black font-bold"
                              : "text-black font-bold",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Spanish
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-black font-bold"
                              : "text-black font-bold",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          French
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <button
              className="text-black font-bold hover:text-gray-900 text-sm"
              onClick={openCurrencyModal}
            >
              USD🔽
            </button>
            {/* <div className="line bg-gray-400 w-1 h-6"></div>{" "} */}
            {/* Vertical line */}
            <Menu as="div" className="relative inline-block text-left">
              {/*<div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 text-sm font-bold text-black">
                  Get listed
                </Menu.Button>
                    </div> */}
              <Transition
                as={Fragment}
                show={openDropdown === "getlisted"}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100 text-black" : "text-black",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Cryptocurrency
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100 text-black" : "text-black ",
                            "block px-4 py-2 text-sm "
                          )}
                        >
                          Exchange
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100 text-black" : "text-black",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Page Update
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-gray-200"></div>
        {/* Bottom section with navigation links */}
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-16">
            <div className="flex items-center space-x-2 -mx-4 font-semibold size-5">
              {/* Group logo and title together */}
              <Link to="/">
                <img
                  src={Web3world}
                  alt="Web3world"
                  className="h-20 w-20 cursor-pointer ml-5"
                />
              </Link>
              <Link to="/"></Link>
            </div>
            <div className="flex space-x-8">
              <Menu as="div" className="relative inline-block text-left w-104">
                <div
                  className="my-2 inline-flex w-full justify-center gap-x-1 text-md font-bold text-black cursor-pointer"
                  onMouseEnter={() => handleMouseEnter("cryptocurrencies")}
                >
                  Cryptocurrencies
                </div>
                {openDropdown === "cryptocurrencies" && (
                  <Transition
                    as={Fragment}
                    show={true}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      className="absolute left-0 z-10 mt-2 w-96 origin-top-left bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      onMouseEnter={() => handleMouseEnter("cryptocurrencies")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <h1 className="text-center font-bold">Coming Soon..</h1>
                      <div className="py-2 px-4">
                        <div className="flex space-x-8">
                          <div className="flex-1 space-y-2">
                            <h3 className="font-bold text-gray-600">
                              Cryptocurrencies
                            </h3>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-black"
                                      : "text-black",
                                    "block px-2 py-1 text-sm"
                                  )}
                                >
                                  <span className="flex items-center">
                                    <span>📊</span>
                                    <span className="ml-1">Ranking</span>
                                  </span>
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-black"
                                      : "text-black",
                                    "block px-2 py-1 text-sm"
                                  )}
                                >
                                  <span className="flex items-center">
                                    <span>🔍</span>
                                    <span className="ml-1">Categories</span>
                                  </span>
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-black"
                                      : "text-black",
                                    "block px-2 py-1 text-sm"
                                  )}
                                >
                                  <span className="flex items-center">
                                    <span>🌐</span>
                                    <span className="ml-1">Global Charts</span>
                                  </span>
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-black"
                                      : "text-black",
                                    "block px-2 py-1 text-sm"
                                  )}
                                >
                                  <span className="flex items-center">
                                    <span>📅</span>
                                    <span className="ml-1">
                                      Historical Snapshots
                                    </span>
                                  </span>
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-black"
                                      : "text-black",
                                    "block px-2 py-1 text-sm"
                                  )}
                                >
                                  <span className="flex items-center">
                                    <span>📈</span>
                                    <span className="ml-1">Bitcoin ETFs</span>
                                  </span>
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                          <div className="bg-gray-300 w-px mx-2"></div>{" "}
                          {/* Vertical line */}
                          <div className="flex-1 space-y-2">
                            <h3 className="font-bold text-gray-600">
                              Leaderboards
                            </h3>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-black"
                                      : "text-black",
                                    "block px-2 py-1 text-sm"
                                  )}
                                >
                                  <span className="flex items-center">
                                    <span>🔥</span>
                                    <span className="ml-1">Trending</span>
                                  </span>
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-black"
                                      : "text-black",
                                    "block px-2 py-1 text-sm"
                                  )}
                                >
                                  <span className="flex items-center">
                                    <span>🆕</span>
                                    <span className="ml-1">Trading Volume</span>
                                  </span>
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-black"
                                      : "text-black",
                                    "block px-2 py-1 text-sm"
                                  )}
                                >
                                  <span className="flex items-center">
                                    <span>🆕</span>
                                    <span className="ml-1">Recently Added</span>
                                  </span>
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-black"
                                      : "text-black",
                                    "block px-2 py-1 text-sm"
                                  )}
                                >
                                  <span className="flex items-center">
                                    <span>📉</span>
                                    <span className="ml-1">
                                      Gainers & Losers
                                    </span>
                                  </span>
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-black"
                                      : "text-black",
                                    "block px-2 py-1 text-sm"
                                  )}
                                >
                                  <span className="flex items-center">
                                    <span>👀</span>
                                    <span className="ml-1">Most Visited</span>
                                  </span>
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                        </div>
                        <div className="border-t border-gray-300 mt-4"></div>{" "}
                        {/* Horizontal line */}
                        <div className="flex space-x-8 mt-4">
                          <div className="flex-1 space-y-2">
                            <h3 className="font-bold text-gray-600">NFT</h3>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-black"
                                      : "text-black",
                                    "block px-2 py-1 text-sm"
                                  )}
                                >
                                  <span className="flex items-center">
                                    <span>🎨</span>
                                    <span className="ml-1">
                                      ALL NFT Market Cap
                                    </span>
                                  </span>
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-black"
                                      : "text-black",
                                    "block px-2 py-1 text-sm"
                                  )}
                                >
                                  <span className="flex items-center">
                                    <span>🗓️</span>
                                    <span className="ml-1">
                                      Top Collections
                                    </span>
                                  </span>
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-black"
                                      : "text-black",
                                    "block px-2 py-1 text-sm"
                                  )}
                                >
                                  <span className="flex items-center">
                                    <span>🗓️</span>
                                    <span className="ml-1">
                                      Top Marketplaces
                                    </span>
                                  </span>
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                          <div className="bg-gray-300 w-px mx-2"></div>{" "}
                          {/* Vertical line */}
                          <div className="flex-1 space-y-2">
                            <h3 className="font-bold text-gray-600">
                              All Chain Network
                            </h3>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-black"
                                      : "text-black",
                                    "block px-2 py-1 text-sm"
                                  )}
                                >
                                  <span className="flex items-center">
                                    <span>🔗</span>
                                    <span className="ml-1">
                                      All Chains Market Cap
                                    </span>
                                  </span>
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-black"
                                      : "text-black",
                                    "block px-2 py-1 text-sm"
                                  )}
                                >
                                  <span className="flex items-center">
                                    <span>📊</span>
                                    <span className="ml-1">Top Chains</span>
                                  </span>
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-black"
                                      : "text-black",
                                    "block px-2 py-1 text-sm"
                                  )}
                                >
                                  <span className="flex items-center">
                                    <span>🔥</span>
                                    <span className="ml-1">Recently Added</span>
                                  </span>
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                        </div>
                      </div>
                    </Menu.Items>
                  </Transition>
                )}
              </Menu>
              <Menu as="div" className="relative inline-block text-left">
                <div
                  className="my-2 inline-flex w-full justify-center gap-x-1 text-md font-bold text-black cursor-pointer"
                  onMouseEnter={() => handleMouseEnter("exchanges")}
                >
                  Exchanges
                </div>
                {openDropdown === "exchanges" && (
                  <Transition
                    as={Fragment}
                    show={true}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      className="absolute left-0 z-10 mt-2 w-80 origin-top-left bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      onMouseEnter={() => handleMouseEnter("exchanges")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <h1 className="text-center font-bold">Coming Soon..</h1>
                      <div className="py-2 px-4">
                        <div className="space-y-2">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-black"
                                    : "text-black",
                                  "block px-2 py-1 text-sm"
                                )}
                              >
                                <span className="flex items-center">
                                  <span>🏦</span>
                                  <span className="ml-1">Spot</span>
                                </span>
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-black"
                                    : "text-black",
                                  "block px-2 py-1 text-sm"
                                )}
                              >
                                <span className="flex items-center">
                                  <span>📊</span>
                                  <span className="ml-1">Open Interest</span>
                                </span>
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-black"
                                    : "text-black",
                                  "block px-2 py-1 text-sm"
                                )}
                              >
                                <span className="flex items-center">
                                  <span>📅</span>
                                  <span className="ml-1">Future Volume</span>
                                </span>
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </div>
                    </Menu.Items>
                  </Transition>
                )}
              </Menu>
              <Menu as="div" className="relative inline-block text-left">
                <div
                  className="my-2 inline-flex w-full justify-center gap-x-1 text-md font-bold text-black cursor-pointer"
                  onMouseEnter={() => handleMouseEnter("community")}
                >
                  Community
                </div>
                {openDropdown === "community" && (
                  <Transition
                    as={Fragment}
                    show={true}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      className="absolute left-0 z-10 mt-2 w-80 origin-top-left bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      onMouseEnter={() => handleMouseEnter("community")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="py-2 px-4">
                        <div className="space-y-2">
                          <h3 className="font-bold text-gray-600">Social</h3>
                          <Menu.Item>
                            
                            {({ active }) => (
                              <a
                                href="https://x.com/web3world783761"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                              >
                                <FontAwesomeIcon icon={faXTwitter} size="2x"   className="ml-1"/>
                                <span
                                  style={{
                                    marginLeft: "17px",
                                    lineHeight: "2.25",
                                  }}
                                >
                                  X.com
                                </span>
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="space-y-1 mt-2">
                          <a
                            href="https://discord.com/invite/tPmChwnYs9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                          >
                            <FontAwesomeIcon icon={faDiscord} size="2x" />
                            <span
                              style={{ marginLeft: "10px", lineHeight: "2.25" }}
                            >
                              Discord
                            </span>
                          </a>

                          <a
                            href="https://t.me/web3worldmarketplace"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                          >
                            <FontAwesomeIcon icon={faTelegram} size="2x"   className="ml-1"/>
                            <span
                              style={{ marginLeft: "17px", lineHeight: "1.x" }}
                            >
                              Telegram
                            </span>
                          </a>
                          <li className="flex items-center cursor-pointer">
                            <a
                              href="https://www.linkedin.com/company/web-3-world/?viewAsMember=true"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center"
                            >
                              <FontAwesomeIcon icon={faLinkedin} size="2x"  className="ml-1"/>
                              <span
                                style={{
                                  marginLeft: "20px",
                                  lineHeight: "2.25",
                                }}
                              >
                                LinkedIn
                              </span>
                            </a>
                          </li>
                        </div>
                      </div>
                    </Menu.Items>
                  </Transition>
                )}
              </Menu>
              <Menu as="div" className="relative inline-block text-left">
                <div
                  className="my-2 inline-flex w-full justify-center gap-x-1 text-md font-bold text-black cursor-pointer"
                  onMouseEnter={() => handleMouseEnter("products")}
                >
                  Events
                </div>
                {openDropdown === "products" && (
                  <Transition
                    as={Fragment}
                    show={true}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      className="absolute left-0 z-10 mt-2 w-80 origin-top-left bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      onMouseEnter={() => handleMouseEnter("products")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="py-2 px-4">
                        <div className="space-y-2">
                          <h1 className="text-center font-bold">Coming Soon..</h1>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-black"
                                    : "text-black",
                                  "block px-2 py-1 text-sm"
                                )}
                              >
                                📢Future Events
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </div>
                    </Menu.Items>
                  </Transition>
                )}
              </Menu>
              <Link
                to="/news"
                className="my-2 inline-flex w-full justify-center gap-x-1 text-md font-bold text-black cursor-pointer"
              >
                News
              </Link>
            </div>
          </div>
          {/* Search input on the right */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="p-2 border border-gray-300 rounded bg-gray-100 text-gray-700 pl-10"
              />
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-600 p-2 rounded-md">
                
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Currency Modal */}
      {/*{isCurrencyModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={closeCurrencyModal}
          ></div>
          <div className="relative bg-white rounded-lg shadow-lg p-4 z-50 w-11/12 max-w-3xl mx-auto overflow-y-auto">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full">
              <ChevronDownIcon className="w-8 h-8 text-white bg-black p-1 rounded-full" />
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Select Currency</h2>
              <button
                onClick={closeCurrencyModal}
                className="text-gray-500 hover:text-gray-900"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Search"
                className="p-2 border border-gray-300 rounded w-full"
              />
            </div>
            <div className="mt-2">
              <h3 className="font-bold">Popular currencies</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-1 mt-2">
                <button className="w-90 h-20 flex flex-col items-center justify-center bg-gray-200 border border-gray-200 rounded shadow-sm">
                  <img src={USDImage} alt="USD" className="w-6 h-6 mb-2" />
                  <span className="text-xs font-medium">
                    United States Dollar
                  </span>
                  <span className="text-xs">USD - $</span>
                </button>
                <button className="w-90 h-20 flex flex-col items-center justify-center bg-gray-200 border border-gray-200 rounded shadow-sm">
                  <img src={EURImage} alt="EUR" className="w-6 h-6 mb-2" />
                  <span className="text-xs font-medium">Euro</span>
                  <span className="text-xs">EUR - €</span>
                </button>
                <button className="w-90 h-20 flex flex-col items-center justify-center bg-gray-200 border border-gray-200 rounded shadow-sm">
                  <img src={GBPImage} alt="GBP" className="w-6 h-6 mb-2" />
                  <span className="text-xs font-medium">Pound Sterling</span>
                  <span className="text-xs">GBP - £</span>
                </button>
                <button className="w-90 h-20 flex flex-col items-center justify-center bg-gray-200 border border-gray-200 rounded shadow-sm">
                  <img src={BTCImage} alt="BTC" className="w-6 h-6 mb-2" />
                  <span className="text-xs font-medium">Bitcoin</span>
                  <span className="text-xs">BTC</span>
                </button>
                <button className="w-90 h-20 flex flex-col items-center justify-center bg-gray-200 border border-gray-200 rounded shadow-sm">
                  <img src={ETHImage} alt="ETH" className="w-6 h-6 mb-2" />
                  <span className="text-xs font-medium">Ethereum</span>
                  <span className="text-xs">ETH</span>
                </button>
              </div>
              <h3 className="font-bold mt-4">Fiat currencies</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-1 mt-2">
                <button className="w-90 h-20 flex flex-col items-center justify-center bg-gray-200 border border-gray-200 rounded shadow-sm">
                  <img src={AUDImage} alt="AUD" className="w-6 h-6 mb-2" />
                  <span className="text-xs font-medium">Australian Dollar</span>
                  <span className="text-xs">AUD - $</span>
                </button>
                <button className="w-90 h-20 flex flex-col items-center justify-center bg-gray-200 border border-gray-200 rounded shadow-sm">
                  <img src={BRLImage} alt="BRL" className="w-6 h-6 mb-2" />
                  <span className="text-xs font-medium">Brazilian Real</span>
                  <span className="text-xs">BRL - R$</span>
                </button>
                <button className="w-90 h-20 flex flex-col items-center justify-center bg-gray-200 border border-gray-200 rounded shadow-sm">
                  <img src={CADImage} alt="CAD" className="w-6 h-6 mb-2" />
                  <span className="text-xs font-medium">Canadian Dollar</span>
                  <span className="text-xs">CAD - $</span>
                </button>
              </div>
              <h3 className="font-bold mt-4">Bitcoin Units</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-1 mt-2">
                <button className="w-90 h-20 flex flex-col items-center justify-center bg-gray-200 border border-gray-200 rounded shadow-sm">
                  <img src={BITSImage} alt="BITS" className="w-6 h-6 mb-2" />
                  <span className="text-xs font-medium">Bits</span>
                  <span className="text-xs">BITS</span>
                </button>
                <button className="w-90 h-20 flex flex-col items-center justify-center bg-gray-200 border border-gray-200 rounded shadow-sm">
                  <img src={SATSImage} alt="SATS" className="w-6 h-6 mb-2" />
                  <span className="text-xs font-medium">Satoshi</span>
                  <span className="text-xs">SATS</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}
