import React from "react";

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
    <section className="w-full px-16 xl:px-14 xl:pr-10 flex items-center justify-between my-[8rem] flex-wrap gap-6 xl:gap-0">
      {logoImages.map((item) => (
        <img
          className="w-24 xl:w-36 grayscale hover:grayscale-0 hover:scale-125 transition-all duration-200 cursor-pointer"
          key={item.id}
          src={item.source}
          alt="image"
        />
      ))}
    </section>
  );
};

export default Logos;
