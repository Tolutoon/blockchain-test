import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { title: "Market", url: "/market" },
  { title: "Exchange", url: "/exchange" },
  { title: "Tutorials", url: "/tutorials" },
  { title: "Wallets", url: "/wallets" },
];

const linkItems = links.map((link, index) => {
  return (
    <li className="mx-4 transition cursor-pointer hover:text-[#2952e3]" key={index}>
      <Link to={link.url}>{link.title}</Link>
    </li>
  );
});

const toggleLinkItems = links.map((link, index) => {
  return (
    <li className="text-xl w-full my-2 flex items-end" key={index}>
      <a href={link.url}>{link.title}</a>
    </li>
  );
});

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {linkItems}
        <li className="mx-4 transition cursor-pointer bg-[#2952e3] py-2 px-7 rounded-full justify-between items-center hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden max-md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
     <ul
     className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-[40vh] shadow-2xl md:hidden list-none
     flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
            <AiOutlineClose
              fontSize={32}
              className="cursor-pointer text-white"
              onClick={() => setToggleMenu(false)}
            />{" "}
            {toggleLinkItems}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
