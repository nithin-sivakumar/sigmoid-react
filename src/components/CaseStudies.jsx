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
    <section id="case-studies" className="px-14 pr-10 py-10">
      <div className="flex gap-[40px]">
        <span className="font-medium text-[40px] bg-primary rounded-[7px] px-7">
          Case Studies
        </span>
        <span className="text-[18px] max-w-[36rem]">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </span>
      </div>

      <div className="my-[5rem]">
        <div className="bg-darkColor flex-1 px-[3.75rem] py-[4.375rem] rounded-[45px] flex text-white">
          {content.map((item) => (
            <div
              key={item.id}
              className={`text-[18px] flex-1 px-[32px] ${
                item.id !== 3 && "border-r-white border-r-2"
              } flex flex-col items-start justify-between py-4`}
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
