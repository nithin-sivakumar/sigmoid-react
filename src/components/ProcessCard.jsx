import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

const ProcessCard = ({ index, title, content }) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div
      onClick={() => setIsHidden(!isHidden)}
      className={`w-full border-2 border-gray-300 hover:border-black rounded-[45px] flex-col items-center justify-center py-6 xl:py-[2.5rem] px-4 xl:px-[3.75rem] hover:scale-[101%] transition-all duration-200 hover:cursor-pointer shadow-black shadow-md ${
        !isHidden && "bg-primary"
      }`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-center gap-2 xl:gap-6">
          <span className="font-medium text-[24px] xl:text-[60px]">
            {index}
          </span>
          <p className="font-medium text-[13.5px] xl:text-[30px]">{title}</p>
        </div>
        {isHidden ? (
          <FaPlus className="xl:text-[10px] size-4 xl:size-14 xl:rounded-full xl:border-black xl:border-[1px] xl:p-3" />
        ) : (
          <FaMinus className="xl:text-[10px] size-4 xl:size-14 xl:rounded-full xl:border-black xl:border-[1px] xl:p-3" />
        )}
      </div>
      <div
        className={`py-6 mt-6 border-t-2 border-black ${
          isHidden ? "hidden" : "flex"
        }`}
      >
        {content}
      </div>
    </div>
  );
};

export default ProcessCard;
