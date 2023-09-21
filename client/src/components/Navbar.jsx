import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";
import { useState } from "react";

const links = [
  { title: "Market", url: "/market" },
  { title: "Exchange", url: "/exchange" },
  { title: "Tutorials", url: "/tutorials" },
  { title: "Wallets", url: "/wallets" },
];

const linkItems = links.map((link, index) => {
  return (
    <li className="mx-4 cursor-pointer" key={index}>
      <a href={link.url}>{link.title}</a>
    </li>
  );
});

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {linkItems}
        <li className="mx-4 cursor-pointer bg-[#2952e3] py-2 px-7 rounded-full justify-between items-center hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
