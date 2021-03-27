import React from "react";
import "../css/Navbar.css";
import logo from "../images/logo.png";
import SearchIcon from "@material-ui/icons/Search";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__contents">
        {/* logo */}
        <img alt="" src={logo} className="navbar__logo" />
        {/* search bar */}
        <div className="navbar__search">
          <input
            type="text"
            placeholder="Search Services"
            className="navbar__searchBar"
          />
          <button className="navbar__searchBtn">Search</button>
        </div>
        {/* navbar buttons */}
        {/* final button */}
      </div>
    </div>
  );
};

export default Navbar;
