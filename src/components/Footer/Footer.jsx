import React from "react";
import { Link } from "react-router-dom";
import SocialMediaIcons from "../../Icons/SocialMediaIcons";
const Footer = (props) => {
  return (
    <footer className="h-24 bg-mainbg">
      <div className="border-t-2 border-green border-opacity-50" />
      <div className="flex items-center justify-between h-full mx-12">
        <Link to="/">
          <p className="text-red text-lg text-opacity-60 pl-3">
            &copy; 2021LivingVert
          </p>
        </Link>
        <div className="pr-2 text-lg flex items-center">
          <Link to="/shop">
            <p className="text-olivegreen text-md pr-6 font-medium">
              {props.t("Shop")}
            </p>
          </Link>
          <Link to="/blog">
            <p className="text-olivegreen text-md font-medium pr-6">
              {props.t("Blog")}
            </p>
          </Link>
          <Link to="/about">
            <p className="text-olivegreen text-md font-medium pr-6">
              {props.t("About")}
            </p>
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
