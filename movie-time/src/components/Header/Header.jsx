import React, { useState } from "react";
import Logo from "../../assets/images/movix-logo.svg";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const openSearch = () => {
    setShowSearch(true);
  };
  const openMobileMenu = () => {};
  const searchQueryHandler = () => {};
  return (
    <>
      <header className="h-[60px] bg-black flex flex-col z-10 justify-center fixed top-0 left-0 w-screen">
        <nav className="flex justify-between items-center lg:px-28 md:px-20 py-2 px-4 ">
          <div className="imgContainer">
            <img
              src={Logo}
              className="h-12 cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>

          <ul className="flex gap-8 items-center text-[17px]  ">
            <li className="cursor-pointer hidden sm:block hover:text-pink-500 transition-all ease-in-out duration-500">
              Movies
            </li>
            <li className="cursor-pointer hidden sm:block hover:text-pink-500 transition-all ease-in-out duration-500">
              Tv Shows
            </li>
            <li className="cursor-pointer hover:text-pink-500 transition-all ease-in-out duration-500">
              <HiOutlineSearch onClick={openSearch} className="text-lg" />
            </li>
            <li
              className="block sm:hidden cursor-pointer"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {console.log(mobileMenu)}
              {mobileMenu ? (
                <VscChromeClose />
              ) : (
                <SlMenu onClick={openMobileMenu} />
              )}
            </li>
          </ul>
        </nav>
      </header>
      <>
        {showSearch && (
          <div className="searchBar h-[60px] bg-white text-black absolute top-[60px] z-50 w-screen px-2 flex justify-center flex-col">
            <div className="searchInput flex justify-between items-center lg:px-28 md:px-20 py-2 px-4">
              <input
                type="text"
                placeholder="Search for a movie or tv show...."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
                className="h-[40px] w-[100%] border-none outline-none text-lg"
              />
              <VscChromeClose className="text-xl cursor-pointer" onClick={() => setShowSearch(false)} />
            </div>
          </div>
        )}
      </>
    </>
  );
};

export default Header;
