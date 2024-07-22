import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
//import { Link } from "react-scroll";
import { createBrowserRouter, Link } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "",
      nam: "Home",
    },
    {
      id: 2,
      link: "About",
      nam: "About",
    },
    {
      id: 3,
      link: "Portfolio",
      nam: "Portfolio",
    },
    {
      id: 4,
      link: "Experience",
      nam: "Experience",
    },
    {
      id: 5,
      link: "Contact",
      nam: "Contact",
    },
  ];

  const slash = "/";

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Adi 3.17</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, nam }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={slash + link}>{nam}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link, nam }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                // smooth
                // duration={500}
              >
                {nam}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
