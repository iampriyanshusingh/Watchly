import React from "react";
import { HamburgerMenu, UserIcon } from "../constants/constant";
import Logo from "../assets/Logo.webp";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg items-center">
      <div className="flex col-span-1 cursor-pointer">
        <img
          src={HamburgerMenu}
          alt="HamburgerMenu"
          className="h-8 cursor-pointer"
          onClick={toggleMenuHandler}
        />
        <img src={Logo} alt="Logo" className="h-8 rounded-lg ml-4" />
        <p className="text-xl font-bold ml-2">WATCHLY</p>
      </div>
      <div className="col-span-10 flex items-center justify-center pr-[10rem]">
        <input
          type="text"
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
        />
        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">
          Search
        </button>
      </div>
      <div>
        <img src={UserIcon} alt="user" className="h-8 col-span-1 pl-3" />
      </div>
    </div>
  );
};

export default Head;
