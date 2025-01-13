import React from "react";
import MemberCard from "./MemberCard";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Nithin Sivakumar",
      designation: "CEO and Founder",
      img: "/team/1.png",
      caption:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy with development",
      linkedIn: "",
    },
    {
      id: 2,
      name: "Shanmukha Moka",
      designation: "Director of Operations",
      img: "/team/2.png",
      caption:
        "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
      linkedIn: "",
    },
    {
      id: 3,
      name: "Poornachandra M",
      designation: "Senior SEO Specialist",
      img: "/team/3.png",
      caption:
        "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
      linkedIn: "",
    },
  ];

  return (
    <section id="team" className="px-6 xl:px-14 xl:pr-10 xl:py-10">
      <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-start gap-8 xl:gap-[40px]">
        <span className="font-medium text-[40px] bg-primary rounded-[7px] px-2 xl:px-7 text-center xl:text-left">
          Team
        </span>
        <span className="text-[18px] max-w-[20rem] xl:max-w-[28rem] text-center xl:text-left">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </span>
      </div>

      <div className="my-10 w-full flex flex-col xl:flex-row items-center justify-center gap-8 xl:gap-4">
        {teamMembers.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
};

export default Team;
