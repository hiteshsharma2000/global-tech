import React from 'react';
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <section
      className="w-full bg-cover bg-center"
      style={{ backgroundImage: "url(https://image2url.com/images/1759132943806-00f93527-244a-4ba3-9a47-68b299e4555b.png)" }}
    >
      <div className="bg-black/80 w-full h-full px-4 sm:px-8 md:px-[10%] py-8 md:py-16">
        {/* Logo + Description */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-0 text-center md:text-left">
          <img
            className="w-2/5 md:w-1/5"
            src="https://image2url.com/images/1759133585219-b88959c9-29cf-4d35-82ce-d082010cf41d.png"
            alt="logo"
          />
          <p className="text-white text-[0.9rem] md:w-2/3">
            Discover timeless designs, modern comfort, and premium quality – crafted to transform every corner of your space.
          </p>
        </div>

        <br />
        {/* Multi-column links */}
        <div className="flex flex-wrap justify-between gap-6 text-white text-sm mt-6">
          <div className="flex flex-col gap-1 min-w-[120px]">
            <h2 className="font-semibold">Top Product</h2>
            <p>Sofa</p>
            <p>Recliners</p>
            <p>Chair</p>
            <p>Beds</p>
          </div>
          <div className="flex flex-col gap-1 min-w-[120px]">
            <h2 className="font-semibold">Shop By Room</h2>
            <p>Living Room</p>
            <p>Bed Room</p>
            <p>Dining Room</p>
            <p>Office Room</p>
          </div>
          <div className="flex flex-col gap-1 min-w-[120px]">
            <h2 className="font-semibold">Need Help</h2>
            <p>Track Your Order</p>
            <p>Feedback</p>
            <p>Return Process</p>
          </div>
          <div className="flex flex-col gap-1 min-w-[120px]">
            <h2 className="font-semibold">Company</h2>
            <p>About US</p>
            <p>Contact Us</p>
            <p>FAQs</p>
          </div>
          <div className="flex flex-col gap-1 min-w-[150px]">
            <h2 className="font-semibold">Contact Us</h2>
            <p>Nargis Dutt Rd, Pali Hill, Mumbai, Maharashtra 400050</p>
            <p>support@askmefurnitures.com</p>
          </div>
        </div>

        {/* Spacer */}
        <div className="my-6 md:my-12"></div>

        {/* Subscribe + Social */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-0">
          {/* Subscribe */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4 w-full md:w-2/5">
            <h2 className="text-white font-semibold text-lg">Subscribe</h2>
            <div className="flex items-center bg-white justify-between rounded-full px-2 py-1 shadow-md w-full max-w-md">
              <input
                type="text"
                placeholder="Search Here"
                className="flex-1 bg-white outline-none px-2 text-sm"
              />
              <button className="text-white bg-[#60392b] p-2 rounded-full text-sm">Subscribe</button>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center md:justify-end gap-4 text-white font-bold text-xl w-full md:w-1/5">
            <span className="hidden md:inline">Follow</span>
            <FaFacebook />
            <FaTwitter />
            <FaTelegram />
            <FaInstagram />
          </div>
        </div>

        <br />
        <hr className="border-gray-400" />
        <br />

        {/* Bottom Links */}
        <div className="flex flex-col md:flex-row text-white justify-between gap-4 md:gap-0 text-sm flex-wrap">
          <p>© 2021 All Rights Reserved</p>
          <div className="flex flex-wrap justify-start md:justify-end gap-3 md:gap-6">
            <p>Privacy Policy</p>
            <p>Terms of use</p>
            <p>Sales and Refunds</p>
            <p>Legal</p>
            <p>Site Map</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
