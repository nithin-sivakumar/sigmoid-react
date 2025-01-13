import React from "react";
import Card from "./Card";

const Services = () => {
  const cards = [
    {
      id: 1,
      t1: "Search engine",
      t2: "optimization",
      img: "/services/1.svg",
      bg: "bg-white",
      text: "bg-primary",
    },
    {
      id: 2,
      t1: "Pay-per-click",
      t2: "advertising",
      img: "/services/2.svg",
      bg: "bg-primary",
      text: "bg-white",
    },
    {
      id: 3,
      t1: "Social Media",
      t2: "Marketing",
      img: "/services/3.svg",
      bg: "bg-darkColor",
      text: "bg-white",
    },
    {
      id: 4,
      t1: "Email",
      t2: "Marketing",
      img: "/services/4.svg",
      bg: "bg-white",
      text: "bg-primary",
    },
    {
      id: 5,
      t1: "Content",
      t2: "Creation",
      img: "/services/5.svg",
      bg: "bg-primary",
      text: "bg-white",
    },
    {
      id: 6,
      t1: "Analytics and",
      t2: "Tracking",
      img: "/services/6.svg",
      bg: "bg-darkColor",
      text: "bg-primary",
    },
  ];

  return (
    <section id="services" className="px-6 xl:px-14 xl:pr-10 py-10">
      <div className="flex flex-col xl:flex-row items-center justify-center xl:items-center xl:justify-start gap-5 xl:gap-[40px]">
        <span className="font-medium text-[40px] bg-primary rounded-[7px] px-2 xl:px-7 w-fit">
          Services
        </span>
        <span className="text-[18px] max-w-[36rem] text-center">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </span>
      </div>

      <div className="flex flex-wrap gap-10 py-10">
        {cards.map((item) => (
          <Card
            key={item.id}
            t1={item.t1}
            t2={item.t2}
            img={item.img}
            bg={item.bg}
            text={item.text}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
