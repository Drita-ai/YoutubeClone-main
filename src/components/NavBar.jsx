import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";

const NavBar = () => {
  return (
    <div className="navbar">
      <GiHamburgerMenu />

      <img className="yt-logo" src="../src/assets/yt.png" alt="" />
      <div className="search-container">
        <input className="searchBar" placeholder="Search..." />
        <button className="searchButton">
          <FiSearch size={20} />
        </button>
      </div>
      <button className="signInButton">SignIn</button>
    </div>
  );
};

export default NavBar;
