import React from "react";

const Action = () => {
  return (
    <section className="px-6 xl:px-[6.25rem] xl:pr-10 my-10 flex gap-6">
      <div className="flex-1 flex flex-col items-center xl:items-start justify-center gap-[26px]">
        <h4 className="font-medium text-center xl:text-left text-[30px]">
          Let's make things happen
        </h4>
        <p className="text-[18px] text-center xl:text-left">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <button className="px-8 py-5 bg-darkColor text-white rounded-[14px] border-2 hover:bg-transparent hover:border-darkColor hover:text-darkColor transition-all duration-200">
          Get your free proposal
        </button>
      </div>

      <div className="flex-1 hidden xl:flex items-center justify-center ml-[8rem]">
        <img src={`/action/cta.png`} alt="cta" />
      </div>
    </section>
  );
};

export default Action;
