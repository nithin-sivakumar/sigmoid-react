import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const CaseStudies = () => {
  const content = [
    {
      id: 1,
      content:
        "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    },
    {
      id: 2,
      content:
        "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    },
    {
      id: 3,
      content:
        "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    },
  ];

  return (
    <section
      id="case-studies"
      className="px-6 xl:px-14 xl:pr-10 pt-20 xl:py-10"
    >
      <div className="flex flex-col items-center xl:flex-row gap-5 xl:gap-[40px]">
        <span className="font-medium text-[40px] bg-primary rounded-[7px] px-2 xl:px-7 w-fit text-center xl:text-left">
          Case Studies
        </span>
        <span className="text-[18px] text-center xl:text-left max-w-[36rem]">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </span>
      </div>

      <div className="my-[5rem]">
        <div className="bg-darkColor flex-1 p-4 xl:px-[3.75rem] xl:py-[4.375rem] rounded-[45px] flex flex-col xl:flex-row text-white">
          {content.map((item) => (
            <div
              key={item.id}
              className={`text-[18px] flex-1 px-4 xl:px-[32px] ${
                item.id !== 3 &&
                "border-b-[1px] border-b-white xl:border-r-white xl:border-r-2 xl:border-b-0"
              } flex flex-col items-start justify-between py-6 xl:py-4`}
            >
              <p>{item.content}</p>
              <p className="mt-10 text-primary flex items-center justify-center gap-2 cursor-pointer px-2 transition-all duration-100 group">
                <span>Learn more</span>
                <FaArrowRight className="-rotate-45 transition-all duration-100 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
