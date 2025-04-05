import React from "react";
import { HamburgerMenu, UserIcon } from "../constants/constant";
import Logo from "../assets/Logo.webp";

const Head = () => {
  return (
    <div>
      <div className="bg-cover">
        <img src={HamburgerMenu} alt="HamburgerMenu"></img>
        <img src={Logo} alt="Logo" />
      </div>
      <div>
        <input type="text" />
        <button>Search</button>
      </div>
      <div>
        <img src={UserIcon} alt="user" />
      </div>
    </div>
  );
};

export default Head;
