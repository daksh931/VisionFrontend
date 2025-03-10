"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const EmpoweringSection = () => {
  return (

    <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-16 bg-white">
{/* shadow of left image svg with css property on hover shadow color changes  */}
<svg className="absolute invisible">
  <filter id="colored-shadow">
    <feDropShadow dx="15" dy="15" stdDeviation="13" floodColor="Grey" floodOpacity="0.5"/>
  </filter>
  <filter id="colored-shadow-hover">
    <feDropShadow dx="10" dy="10" stdDeviation="13" floodColor="blue" floodOpacity="0.5"/>
  </filter>
</svg>

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
          // className="rounded-lg  drop-shadow-lg hover:drop-shadow-2xl mix-blend-multiply"
          // style={{ filter: "url(#colored-shadow)" }} 
          className="transition-all duration-500" 
          style={{ filter: "url(#colored-shadow)", transition: "filter 0.5s ease-in-out" }} 
          onMouseEnter={(e) => e.target.style.filter = "url(#colored-shadow-hover)"}
          onMouseLeave={(e) => e.target.style.filter = "url(#colored-shadow)"}
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
        <div>

        <button  className="bg-zinc-800 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-black transition duration-300 shadow-black/40 hover:shadow-black/40 shadow-md hover:shadow-lg focus:outline-none ">
          <Link to={"/courses"}>  Explore Now  </Link>
        </button>
        </div>
      </motion.div>
    </section>
  );
};

export default EmpoweringSection;
