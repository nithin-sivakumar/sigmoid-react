import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  const links = [
    { id: 1, content: "Services", href: "#services" },
    { id: 2, content: "Case Studies", href: "#case-studies" },
    { id: 3, content: "Process", href: "#process" },
    { id: 4, content: "Team", href: "#team" },
    { id: 5, content: "Contact", href: "#contact" },
  ];

  return (
    <nav
      id="top"
      className="sticky w-full p-6 xl:px-14 xl:py-10 flex items-center justify-between bg-borderColor/90 z-50"
    >
      <div className="flex items-center justify-center cursor-pointer group gap-4">
        <img
          className="group-hover:rotate-[180deg] transition-all duration-200"
          src="/nav/logo.png"
          alt="Sigmoid"
        />
        <span className="text-3xl font-semibold">Sigmoid</span>
      </div>

      <div className="hidden xl:flex items-center justify-center gap-[40px]">
        <ul className="flex items-center justify-center gap-[40px]">
          {links.map((link) => (
            <a
              href={link.href}
              key={link.id}
              className="cursor-pointer hover:bg-primary hover:border-b-[1px] hover:border-black px-2 py-1 transition-all duration-200"
            >
              {link.content}
            </a>
          ))}
        </ul>
        <button className="hover:bg-primary transition-all duration-200 px-4 py-2 border-2 border-blackColor rounded-[14px]">
          Request a quote
        </button>
      </div>
      <div
        onClick={() => setIsOpenNav(true)}
        className="flex xl:hidden text-[40px] cursor-pointer"
      >
        <IoIosMenu />
      </div>

      {isOpenNav && (
        <div className="absolute w-full h-screen bg-white opacity-90 top-0 right-0 transition-all duration-200">
          <div
            onClick={() => setIsOpenNav(false)}
            className="cursor-pointer absolute top-10 right-10 text-[50px]"
          >
            <IoClose />
          </div>
          <div className="w-full h-full flex flex-col items-center justify-center">
            {links.map((link) => (
              <a
                href={link.href}
                key={link.id}
                className="cursor-pointer hover:bg-primary hover:border-b-[1px] hover:border-black px-2 py-1 transition-all duration-200 text-[50px] gap-2"
              >
                {link.content}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
