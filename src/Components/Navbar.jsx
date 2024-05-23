import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <div className="flex justify-between sm:justify-around sm:gap-48 items-center w-full h-20 bg-black fixed px-8 text-white z-10">
      <div>
        <h1 className="font-signature text-5xl">Jerry</h1>
      </div>
      <div className="flex items-center">
        <ul className="hidden md:flex items-center gap-10">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="cursor-pointer capitalize hover:scale-110 font-medium text-gray-500 duration-300"
            >
              <Link to={link} smooth duration={500} >{link}</Link>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setMenu(!menu)}
          className="md:hidden cursor-pointer text-gray-500 scale-105 duration-300 z-20"
        >
          {menu ? <FaTimes size={35} /> : <FaBars size={35} />}
        </div>
      </div>

      {menu && (
        <ul 
          className="flex flex-col gap-12 justify-center items-center w-full h-screen absolute top-0 left-0 bg-gradient-to-t from-black via-black to-gray-800 z-10">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize hover:scale-110 font-medium text-gray-500 duration-300 text-4xl"
              
            >
              <Link
              onClick={() => setMenu(!menu)}
              to={link} smooth duration={500} >{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
