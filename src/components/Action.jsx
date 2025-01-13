import React from "react";
import { motion } from "motion/react";

const Action = () => {
  return (
    <section className="px-6 xl:px-[6.25rem] xl:pr-10 my-10 flex gap-6">
      <div className="flex-1 flex flex-col items-center xl:items-start justify-center gap-[26px]">
        <motion.h4
          initial={{ opacity: 0, x: -10 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.2, duration: 0.6 },
          }}
          className="font-medium text-center xl:text-left text-[30px]"
        >
          Let's make things happen
        </motion.h4>
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.4, duration: 0.6 },
          }}
          className="text-[18px] text-center xl:text-left"
        >
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.6, duration: 0.6 },
          }}
          className="px-8 py-5 bg-darkColor text-white rounded-[14px] border-2 hover:bg-transparent hover:border-darkColor hover:text-darkColor transition-all duration-200"
        >
          Get your free proposal
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.5, duration: 0.6 },
        }}
        className="flex-1 hidden xl:flex items-center justify-center ml-[8rem]"
      >
        <img src={`/action/cta.png`} alt="cta" />
      </motion.div>
    </section>
  );
};

export default Action;
