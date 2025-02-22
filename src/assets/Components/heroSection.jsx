"use client";
import { motion } from "framer-motion";


const EmpoweringSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-16 bg-white">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <img
          src="/hero.png"
          alt="Empowering Students"
          className="rounded-lg shadow-lg mix-blend-multiply"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex flex-col items-center text-center mt-10 md:mt-0"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
          Empowering Students for a Brighter Future...
        </h2>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-600 transition duration-300">
          Explore Now
        </button>
      </motion.div>
    </section>
  );
};

export default EmpoweringSection;
