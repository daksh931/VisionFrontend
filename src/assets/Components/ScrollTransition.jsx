import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const testimonials = [
  { id: 1, name: "Interview Preparation",  text: "I've never seen anything like this before. It's amazing. I love it."},
  { id: 2, name: "Banking Exams",  text: "I don't know what to say. I'm speechless. This is amazing." },
  { id: 3, name: "Competitive Exams",  text: "I'm at a loss for words. This is amazing. I love it." },
  { id: 4, name: " Cyber Security",  text: "This is fantastic! I can't believe how smooth the animation is." },
];

export default function ScrollingTestimonials() {
  const controls = useAnimation();

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        ease: "linear",
        duration: 10,
        repeat: Infinity,
      },
    });
  };

  return (
    <div className="overflow-hidden relative w-full bg-teal-200/90 py-6">
      {/* Fade Effect on Left & Right */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent"></div>
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent"></div>

      {/* Scrolling Cards */}
      <motion.div 
        className="flex space-x-6 "
        animate={controls}
        onHoverStart={() => controls.stop()} 
        onHoverEnd={() => startAnimation()} 
      >
        {testimonials.concat(testimonials).map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg p-4 rounded-xl min-w-[300px] cursor-pointer transition-transform"
            whileHover={{ scale: 1.1 }} // Scale up on hover
          >
            <div className="flex items-center space-x-3">
              <div>
                <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
              </div>
            </div>
            <p className="mt-2 text-gray-700">{testimonial.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
