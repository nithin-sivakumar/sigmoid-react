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
    <section id="team" className="px-14 pr-10 py-10">
      <div className="flex gap-[40px]">
        <span className="font-medium text-[40px] bg-primary rounded-[7px] px-7">
          Team
        </span>
        <span className="text-[18px] max-w-[28rem]">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </span>
      </div>

      <div className="my-10 w-full flex items-center justify-center gap-4">
        {teamMembers.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
};

export default Team;
