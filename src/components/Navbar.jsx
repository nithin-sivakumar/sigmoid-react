import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  const links = [
    { id: 1, content: "Services", href: "#services", delay: 0.3 },
    { id: 2, content: "Case Studies", href: "#case-studies", delay: 0.6 },
    { id: 3, content: "Process", href: "#process", delay: 0.9 },
    { id: 4, content: "Team", href: "#team", delay: 1.2 },
    { id: 5, content: "Contact", href: "#contact", delay: 1.5 },
  ];

  // Handle click on the link and close the navbar
  const handleLinkClick = () => {
    setIsOpenNav(false);
  };

  return (
    <nav
      id="top"
      className="sticky w-full p-6 xl:px-14 xl:py-10 flex items-center justify-between bg-borderColor/90 z-50"
    >
      <div className="flex items-center justify-center cursor-pointer group gap-4">
        <motion.img
          animate={{
            opacity: 1,
            rotateY: 360,
            rotateX: 360,
            rotateZ: 360,
            transition: {
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className=""
          src="/nav/logo.png"
          alt="Sigmoid"
        />
        <motion.span
          initial={{ opacity: 0, x: 20 }}
          animate={{
            opacity: 1,
            x: 10,
            transition: {
              duration: 1,
              delay: 0.1,
              ease: "easeInOut",
            },
          }}
          className="text-3xl font-semibold"
        >
          Sigmoid
        </motion.span>
      </div>

      <div className="hidden xl:flex items-center justify-center gap-[40px]">
        <ul className="flex items-center justify-center gap-[40px]">
          {links.map((link) => (
            <motion.li
              key={link.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  delay: link.delay,
                  ease: "easeInOut",
                },
              }}
            >
              <motion.a
                href={link.href}
                onClick={handleLinkClick}
                className="cursor-pointer hover:bg-primary hover:border-b-[1px] hover:border-black px-2 py-1 transition-all duration-200"
              >
                {link.content}
              </motion.a>
            </motion.li>
          ))}
        </ul>
        <motion.button
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 2.2,
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
          className="hover:bg-primary transition-all duration-200 px-4 py-2 border-2 border-blackColor rounded-[14px]"
        >
          Request a quote
        </motion.button>
      </div>

      {/* Mobile Menu Icon */}
      <div
        onClick={() => setIsOpenNav(true)}
        className="flex xl:hidden text-[40px] cursor-pointer"
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{
            rotate: isOpenNav ? 180 : 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
        >
          <IoIosMenu />
        </motion.div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpenNav && (
        <motion.div
          className="absolute w-full h-screen bg-white opacity-90 top-0 right-0 transition-all duration-200"
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          exit={{
            opacity: 0,
            x: 100,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <div
            onClick={() => setIsOpenNav(false)}
            className="cursor-pointer absolute top-10 right-10 text-[50px]"
          >
            <motion.div
              animate={{
                rotate: isOpenNav ? 180 : 0,
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
            >
              <IoClose />
            </motion.div>
          </div>
          <div className="w-full h-full flex flex-col items-center justify-center">
            {links.map((link) => (
              <motion.a
                href={link.href}
                key={link.id}
                onClick={handleLinkClick}
                className="cursor-pointer hover:bg-primary hover:border-b-[1px] hover:border-black px-2 py-1 transition-all duration-200 text-[50px] gap-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    delay: link.delay,
                    ease: "easeInOut",
                  },
                }}
              >
                {link.content}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
