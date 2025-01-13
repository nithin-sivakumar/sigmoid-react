import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { motion } from "motion/react";

const MemberCard = ({ member }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: member.delay, duration: 1 },
      }}
      className="flex-1 border-2 border-gray-400 hover:border-black hover:scale-[102%] flex flex-col items-center justify-center rounded-[45px] shadow-black shadow-md min-h-[20rem] xl:max-h-[20rem] p-5 relative"
    >
      <div className="flex-1 flex w-full items-end justify-start gap-4 border-b border-black pb-6">
        <div>
          <img src={member.img} alt={member.name} />
        </div>
        <div>
          <p className="text-[20px] font-bold">{member.name}</p>
          <p className="text-[14px] xl:text-[18px]">{member.designation}</p>
        </div>
      </div>
      <div className="flex-1 py-4 my-4 text-[18px]">{member.caption}</div>
      <div
        onClick={() => window.open(member.linkedIn, "_blank")}
        className="absolute bottom-5 xl:top-5 right-5 cursor-pointer"
      >
        <img src={"/linkedin.png"} alt={member.name} />
      </div>
    </motion.div>
  );
};

export default MemberCard;
