
import "./MovingDivs.css"; // Import the CSS file
import React from "react";
import { BorderBeam } from "./MagicUI/borderbeam";
const testimonials = [
  { id: 1, name: "Interview Preparation",  text: "I've never seen anything like this before. It's amazing. I love it."},
  { id: 2, name: "Banking Exams",  text: "I don't know what to say. I'm speechless. This is amazing." },
  { id: 3, name: "Competitive Exams",  text: "I'm at a loss for words. This is amazing. I love it." },
  { id: 4, name: " Cyber Security",  text: "This is fantastic! I can't believe how smooth the animation is." },
];



const ScrollingTestimonials = () => {

  return (
    <div className="moving-container">
      <div className="moving-track p-3 bg-slate-900 py-9 ">
        {[...testimonials, ...testimonials,...testimonials,...testimonials].map((item, index) => (
          <div className="relative bg-slate-800 text-slate-200 hover:text-[21px] min-w-64 text-center hover:font-sans border-[1px] border-slate-500 hover:text-white hover:cursor-pointer p-3 py-6 rounded-md text-xl" key={index}>{item.name}
          <BorderBeam  delay={index * 2} reverse={index % 2 === 0} colorFrom = "#217b85" duration={6}
  colorTo = "#ffffff" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingTestimonials;
