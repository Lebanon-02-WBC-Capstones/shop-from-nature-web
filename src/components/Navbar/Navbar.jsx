import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainLogo from "../../Icons/MainLogo";
import CardIcon from "../../Icons/CardIcon";
import { useAuth } from "../../AuthProvider/AuthContext";
import SignInModal from "../SignInModal/SignInModal";
const Navbar = () => {
  const { logout, currentUser } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const handleSignIn = () => {
    setShowModal(true);
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <nav className="flex items-center justify-between bg-mainbg z-0">
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
          <p className="text-xl mr-6 text-red font-regular">Home</p>
        </Link>
        <Link to="/shop">
          <p className="text-xl mr-6 text-red font-regular">Shop</p>
        </Link>
        <Link to="/blog">
          <p className="text-xl mr-6 text-red font-regular">Blog</p>
        </Link>
        <Link to={"/about"}>
          <p className="text-xl mr-6 text-red font-regular">About Us</p>
        </Link>
        <Link to="/card">
          <CardIcon className="mr-6" />
        </Link>
        <button
          className="bg-green px-2 py-1 text-xl mr-6 text-white rounded-sm font-regular "
          onClick={currentUser ? handleLogout : handleSignIn}
        >
          {currentUser ? "Logout" : "Login"}
        </button>
        <SignInModal showModal={showModal} setShowModal={setShowModal} />
      </div>
    </nav>
  );
};

export default Navbar;
