import React from "react";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 20, opacity: 0.5 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { delay: 0.2, duration: 1 },
      }}
      className="px-6 xl:px-14 xl:pr-10 w-full min-h-[28rem] xl:h-[30rem]"
    >
      <div className="w-full h-full bg-darkColor rounded-[45px] py-10 xl:rounded-t-[45px] xl:rounded-b-none flex flex-col items-center justify-center gap-16 px-6 xl:px-24 text-white">
        <div className="flex flex-col xl:flex-row items-center justify-between w-full gap-4">
          <div className="flex-1 flex flex-col gap-4">
            <div>
              <span className="bg-primary px-2 rounded-[7px] text-black text-[20px]">
                Contact us:
              </span>
            </div>
            <div className="flex flex-col items-start justify-center gap-2 text-[18px]">
              <p>Email: info@sigmoid.com</p>
              <p>Phone: 123-456-7890</p>
              <div>
                <p>Address: 1234 Main St</p>
                <p>Some City, Some State 123456</p>
              </div>
            </div>
          </div>
          <div className="flex-1 h-32">
            <div className="bg-[#383a4ab2] py-20 px-4 hidden xl:flex gap-4 items-center justify-between h-full rounded-[14px] shadow-md shadow-darkColor border-2 border-white">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="bg-transparent px-4 py-2 border-white border-2 rounded-[14px] flex-1"
              />
              <button className="px-2 py-2 bg-primary hover:bg-transparent border-2 hover:border-primary hover:text-primary text-black rounded-[14px] transition-all duration-200">
                Subscribe to news
              </button>
            </div>
          </div>
        </div>
        <div className="border-white border-t-2 w-full">
          <div className="mt-10 flex items-center justify-start gap-[40px]">
            <p>Developed by Nithin Sivakumar</p>
            <p className="underline underline-offset-8">Privacy Policy</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
