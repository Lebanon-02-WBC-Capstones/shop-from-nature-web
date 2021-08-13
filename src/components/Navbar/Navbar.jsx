import React from "react";
import { Link } from "react-router-dom";
import MainLogo from "../../Icons/MainLogo";
import CardIcon from "../../Icons/CardIcon";

const Navbar = (props) => {
  return (
    <nav className="flex items-center justify-between bg-mainbg">
      <Link to="/">
        <div className="flex items-center">
          <MainLogo />
          <span className="flex">
            <h1 className="text-3xl text-red font-regular">Living</h1>
            <h1 className="text-3xl text-grey font-medium">Vert</h1>
          </span>
        </div>
      </Link>
      <div className="flex items-center">
        <Link to="/">
          <p className="text-xl mr-6 text-red font-regular">
            {props.t("Home")}
          </p>
        </Link>
        <Link to="/shop">
          <p className="text-xl mr-6 text-red font-regular">
            {props.t("Shop")}
          </p>
        </Link>
        <Link to="/blog">
          <p className="text-xl mr-6 text-red font-regular">
            {props.t("Blog")}
          </p>
        </Link>
        <Link to={"/about"}>
          <p className="text-xl mr-6 text-red font-regular">
            {props.t("About Us")}
          </p>
        </Link>
        <Link to="/card">
          <CardIcon className="mr-8" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
