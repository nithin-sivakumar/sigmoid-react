import React from "react";
import { motion } from "motion/react";

const Logos = () => {
  const logoImages = [
    { id: 1, source: "/logos/amazon.png" },
    { id: 2, source: "/logos/dribble.png" },
    { id: 3, source: "/logos/hubspot.png" },
    { id: 4, source: "/logos/notion.png" },
    { id: 5, source: "/logos/netflix.png" },
    { id: 6, source: "/logos/zoom.png" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.4, duration: 1 } }}
      className="w-full px-16 xl:px-14 xl:pr-10 flex items-center justify-between my-[8rem] flex-wrap gap-6 xl:gap-0"
    >
      {logoImages.map((item) => (
        <motion.img
          whileHover={{
            scale: 0.9,
            transition: { duration: 0.01, ease: "anticipate" },
          }}
          className="w-24 xl:w-36 grayscale hover:grayscale-0 hover:scale-125 transition-all duration-200 cursor-pointer"
          key={item.id}
          src={item.source}
          alt="image"
        />
      ))}
    </motion.section>
  );
};

export default Logos;
