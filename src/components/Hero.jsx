import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="mt-[2rem] px-6 xl:pl-14 xl:pr-6 flex items-center justify-center gap-4">
      <div className="flex-1 flex flex-col xl:items-start items-center justify-center gap-[35px]">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 1.2,
            },
          }}
          className="font-medium text-[36px] xl:text-[60px] max-w-[32rem] xl:text-left text-center"
        >
          Navigating the digital landscape for success
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 2.6,
              duration: 1.2,
            },
          }}
          className="font-normal text-[20px] xl:text-left text-center"
        >
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: -10 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 2.8,
              duration: 1.2,
            },
          }}
          className="px-8 py-5 bg-darkColor text-white rounded-[14px] border-2 hover:bg-transparent hover:border-darkColor hover:text-darkColor transition-all duration-200"
        >
          Book a consultation
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 2.8,
            duration: 1.2,
          },
        }}
        className="flex-1 xl:flex hidden"
      >
        <img className="flex-1" src="/Illustration.png" alt="banner" />
      </motion.div>
    </section>
  );
};

export default Hero;
