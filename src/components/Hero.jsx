import React from "react";

const Hero = () => {
  return (
    <section className="mt-[2rem] px-6 xl:pl-14 xl:pr-6 flex items-center justify-center gap-4">
      <div className="flex-1 flex flex-col xl:items-start items-center justify-center gap-[35px]">
        <h2 className="font-medium text-[36px] xl:text-[60px] max-w-[32rem] xl:text-left text-center">
          Navigating the digital landscape for success
        </h2>
        <p className="font-normal text-[20px] xl:text-left text-center">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <button className="px-8 py-5 bg-darkColor text-white rounded-[14px] border-2 hover:bg-transparent hover:border-darkColor hover:text-darkColor transition-all duration-200">
          Book a consultation
        </button>
      </div>

      <div className="flex-1 xl:flex hidden">
        <img className="flex-1" src="/Illustration.png" alt="banner" />
      </div>
    </section>
  );
};

export default Hero;
