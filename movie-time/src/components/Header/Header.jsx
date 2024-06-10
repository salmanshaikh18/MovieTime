import React from "react";
import Logo from "../../assets/images/movix-logo.svg";
import { HiOutlineSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
  const openSearch = () => {};
  return (
    <header className="h-[60px] bg-black flex flex-col justify-center">
      <nav className="flex justify-between items-center px-28 py-2">
        <div className="imgContainer">
          <img src={Logo} className="h-12 cursor-pointer" onClick={() => navigate("/")} />
        </div>

        <ul className="flex gap-8 items-center text-[17px] ">
          <li className="cursor-pointer hover:text-pink-500 transition-all ease-in-out duration-500">Movies</li>
          <li className="cursor-pointer hover:text-pink-500 transition-all ease-in-out duration-500">Tv Shows</li>
          <li className="cursor-pointer hover:text-pink-500 transition-all ease-in-out duration-500">
            <HiOutlineSearch onClick={openSearch} className="text-lg" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
