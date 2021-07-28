import React from "react";
import { Link } from "react-router-dom";
import SocialMediaIcons from "../../Icons/SocialMediaIcons";
const Footer = () => {
  return (
    <footer className="min-h-small bg-transparent mt-1">
      <div className="border-t-2 border-green mb-1 border-opacity-50" />
      <div className="flex items-center justify-between">
        <Link to="/">
          <p className="text-red text-lg text-opacity-60 pl-3 pl-1">
            &copy; 2021LivingVert
          </p>
        </Link>
        <div className="pr-2 text-lg flex items-center mb-2">
          <Link to="/shop">
            <p className="text-olivegreen text-md pr-6 font-medium">Shop</p>
          </Link>
          <Link to="/blog">
            <p className="text-olivegreen text-md font-medium pr-6">Blog</p>
          </Link>
          <Link to="/about">
            <p className="text-olivegreen text-md font-medium pr-6">About</p>
          </Link>
        </div>
        <div className="pr-4">
          <SocialMediaIcons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
