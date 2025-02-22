"use client";
import { motion } from "framer-motion";

const goals = [
  { id: 1, name: "IIT-JEE", logo: "🎯" },
  { id: 2, name: "NEET", logo: "🩺" },
  { id: 3, name: "UPSC", logo: "📜" },
  { id: 4, name: "CAT", logo: "📈" },
  { id: 5, name: "GATE", logo: "⚙️" },
  { id: 6, name: "SSC", logo: "🏆" },
  { id: 7, name: "Bank Exams", logo: "💰" },
  { id: 8, name: "Railway Exams", logo: "🚆" },
];

const PopularGoals = () => {
  return (
    <section className="py-16 bg-gray-100">
       <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Popular Goals
        </h2>
        <p className="text-gray-600 mt-2">
         The services that we are providing you
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-16">
        {goals.map((goal) => (
          <motion.div
            key={goal.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center justify-center
                      border border-black/10 rounded-lg p-20 
                      hover:shadow-lg hover:border-blue-200 hover:scale-105 
                      transition-all duration-300"
          >
            <span className="text-5xl">{goal.logo}</span>
            <h3 className="mt-4 text-xl font-semibold text-gray-700">{goal.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PopularGoals;
