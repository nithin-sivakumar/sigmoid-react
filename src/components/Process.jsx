import React from "react";
import ProcessCard from "./ProcessCard";

const Process = () => {
  const cards = [
    {
      id: 1,
      index: "01",
      title: "Consultation",
      content:
        "We begin by understanding your business goals, challenges, and target audience. This helps us tailor our services to align with your specific needs and set the foundation for a successful collaboration.",
    },
    {
      id: 2,
      index: "02",
      title: "Research and Strategy Development",
      content:
        "Our team conducts in-depth research on your industry, competitors, and market trends. Using these insights, we develop a bespoke strategy designed to achieve your business objectives efficiently.",
    },
    {
      id: 3,
      index: "03",
      title: "Implementation",
      content:
        "With a clear strategy in place, we implement the necessary actions across relevant platforms. Our focus is on seamless execution, ensuring that every step is aligned with your business goals.",
    },
    {
      id: 4,
      index: "04",
      title: "Monitoring and Optimization",
      content:
        "We continuously track the performance of our strategies, analyzing key metrics to identify areas of improvement. Our goal is to optimize results and ensure sustained success over time.",
    },
    {
      id: 5,
      index: "05",
      title: "Reporting and Communication",
      content:
        "Regular reporting keeps you informed about the progress and impact of our efforts. We believe in transparent communication, ensuring you are always up-to-date and involved in the process.",
    },
    {
      id: 6,
      index: "06",
      title: "Continual Improvement",
      content:
        "We are committed to continuous improvement, using data-driven insights to refine our strategies. This approach ensures that your business stays ahead in an ever-evolving market landscape.",
    },
  ];

  return (
    <section id="process" className="px-6 xl:px-14 xl:pr-10 pt-10 xl:py-10">
      <div className="flex flex-col items-center xl:justify-start justify-center xl:flex-row gap-8 xl:gap-[40px]">
        <span className="font-medium text-[40px] bg-primary rounded-[7px] px-2 xl:px-7 w-fit text-center xl:text-left">
          Our Working Process
        </span>
        <span className="text-[18px] max-w-[20rem] text-center xl:text-left">
          Step-by-Step Guide to Achieving Your Business Goals
        </span>
      </div>

      <div className="my-[5rem] flex flex-col items-center justify-center gap-[1.875rem]">
        {cards.map((item) => (
          <ProcessCard
            key={item.id}
            index={item.index}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </section>
  );
};

export default Process;
