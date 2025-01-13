import React from "react";

const Navbar = () => {
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
      className="sticky w-full px-14 py-10 flex items-center justify-between bg-borderColor/90 z-50"
    >
      <div className="flex items-center justify-center cursor-pointer group gap-4">
        <img
          className="group-hover:rotate-[180deg] transition-all duration-200"
          src="/nav/logo.png"
          alt="Sigmoid"
        />
        <span className="text-3xl font-semibold">Sigmoid</span>
      </div>

      <div className="flex items-center justify-center gap-[40px]">
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
    </nav>
  );
};

export default Navbar;
