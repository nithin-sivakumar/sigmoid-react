import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Card = ({ t1, t2, img, bg, text }) => {
  return (
    <div
      className={`min-w-[38rem] flex-1 h-[20rem] ${bg} flex items-center justify-between gap-[6rem] border-2 border-black shadow-md shadow-black rounded-[45px] p-10 hover:scale-105 transition-all duration-200`}
    >
      <div className="flex-1 h-full flex flex-col items-start justify-between">
        <div
          className={`flex flex-col items-start justify-center gap-1 rounded-[7px] text-[30px]`}
        >
          <span className={`rounded-md px-2 ${text}`}>{t1}</span>
          <span className={`rounded-md px-2 ${text}`}>{t2}</span>
        </div>

        <button
          className={`${
            bg === "bg-darkColor" ? "text-white" : "text-black"
          } flex items-center justify-center gap-4`}
        >
          <FaArrowRight
            className={`z-10 size-8 -rotate-45 p-1 rounded-full ${
              bg === "bg-darkColor"
                ? "bg-white text-darkColor"
                : "bg-darkColor text-primary"
            }`}
          />
          <span>Learn more</span>
        </button>
      </div>

      <div className="flex-1 flex">
        <img className="flex-1" src={img} alt={t1} />
      </div>
    </div>
  );
};

export default Card;
