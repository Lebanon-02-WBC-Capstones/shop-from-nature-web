import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainLogo from "../../Icons/MainLogo";
import CardIcon from "../../Icons/CardIcon";
import Corner from "../../images/Corner";
import { useAuth } from "../../AuthProvider/AuthContext";
import SignInModal from "../SignInModal/SignInModal";
import { LanguageContext } from "../../App";

const Navbar = () => {
  const { t } = React.useContext(LanguageContext);
  const { logout, currentUser } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const handleSignIn = () => {
    setShowModal(true);
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <nav className="flex items-center justify-between bg-mainbg">
      <Corner />
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
          <p className="text-xl mr-6 text-red font-regular">{t("Home")}</p>
        </Link>
        <Link to="/shop">
          <p className="text-xl mr-6 text-red font-regular">{t("Shop")}</p>
        </Link>
        <Link to="/blog">
          <p className="text-xl mr-6 text-red font-regular">{t("Blog")}</p>
        </Link>
        <Link to={"/about"}>
          <p className="text-xl mr-6 text-red font-regular">{t("About Us")}</p>
        </Link>
        <Link to="/card">
          <CardIcon className="mr-20" />
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
