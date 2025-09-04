import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us on</h2>
      <div className="join join-vertical w-full">
        <a
          href="https://facebook.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-base-100 justify-start join-item"
          title="Visit us on Facebook"
        >
          <FaFacebook className="mr-2" /> Facebook
        </a>
        <a
          href="https://twitter.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-base-100 justify-start join-item"
          title="Visit us on Twitter"
        >
          <FaTwitter className="mr-2" /> Twitter
        </a>
        <a
          href="https://instagram.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-base-100 justify-start join-item"
          title="Visit us on Instagram"
        >
          <FaInstagram className="mr-2" /> Instagram
        </a>
      </div>
    </div>
  );
};

export default FindUs;
