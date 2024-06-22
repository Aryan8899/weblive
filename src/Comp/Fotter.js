import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import playstore from "./playstore.png";
import appstore from "./appstore.png";
// import X from "./X.png";
import Discord from "./discord.png";
import Telegram from "./telegram.jpg";
import Instagram from "./instagram.png";
import LinkedIn from "./linkein.png";
import Web3world from "./Web3 World.png"

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="flex items-center space-x-2 -mx-4 font-medium size-5">
            {/* Group logo and title together */}
            <img
              src={Web3world}
              alt="Web3world"
              className="h-40 w-40 cursor-pointer ml-5"
            />
            
          </div>
          <div className="flex flex-col md:flex-row md:space-x-20 space-y-30 md:space-y-0">
            <div>
              <h3 className="text-sm font-semibold uppercase mb-2 mr-60 ">COMPANY</h3>
              <ul className="text-gray-500 space-y-1">
                <li className="cursor-pointer">About us</li>
                <li className="cursor-pointer">Terms of use</li>
                <li className="cursor-pointer">Privacy Policy</li>
                
                <li className="cursor-pointer">Cookie policy</li>
                
                <li className="cursor-pointer">Disclaimer</li>
                
                <li className="flex items-center cursor-pointer">
                  Careers{" "}
                  {/* <span className="ml-2 bg-blue-600 text-white px-2 py-1 rounded-full cursor-pointer">
                    We're hiring!
                  </span> */}
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase mb-2 mr-60">SUPPORT</h3>
              <ul className="text-gray-500 space-y-1">

                <li className="cursor-pointer">Contact Support</li>
                <li className="cursor-pointer">FAQ</li>
                
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase mb-2">Join Our Community</h3>
              <ul className="text-gray-500 space-y-1">
                <li className="flex items-center cursor-pointer">
                  <a href="https://x.com/web3world783761" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <FontAwesomeIcon icon={faXTwitter} size="2x" className="ml-1"/><span style={{ marginLeft: '17px', lineHeight: '2.25'}}>X.com</span>
                  </a>
                </li>
                <li className="flex items-center cursor-pointer">
                  <a href="https://discord.com/invite/tPmChwnYs9" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <FontAwesomeIcon icon={faDiscord} size="2x" /><span style={{ marginLeft: '10px', lineHeight: '2.25' }}>Discord</span>
                  </a>
                </li>
                <li className="flex items-center cursor-pointer">
                  <a href="https://t.me/web3worldmarketplace" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <FontAwesomeIcon icon={faTelegram} size="2x" className="ml-1"/><span style={{ marginLeft: '17px', lineHeight: '2.25' }}>Telegram</span>
                  </a>
                </li>
                <li className="flex items-center cursor-pointer">
                  <a href="https://www.linkedin.com/company/web-3-world/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <FontAwesomeIcon icon={faLinkedin } size="2x" className="ml-1"/><span style={{ marginLeft: '20px', lineHeight: '2.25' }}>LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative left-5 mt-8 ml-60">
          <p className="text-gray-500 text-md mb-4 md:mb-0 ml-60">
            &copy; 2024 webthreeworld. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
