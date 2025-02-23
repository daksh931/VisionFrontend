"use client";
import { motion } from "framer-motion";


const EmpoweringSection = () => {
  return (

    <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-16 bg-white">

{/* <svg className="absolute invisible">
  <filter id="colored-shadow">
    <feDropShadow dx="15" dy="15" stdDeviation="13" floodColor="Grey" floodOpacity="0.5"/>
  </filter>
  <filter id="colored-shadow-hover">
    <feDropShadow dx="10" dy="10" stdDeviation="13" floodColor="blue" floodOpacity="0.5"/>
  </filter>
</svg> */}
<svg className="absolute invisible">
  <filter id="colored-shadow" filterUnits="userSpaceOnUse">
    <feDropShadow 
      dx="15" 
      dy="15" 
      stdDeviation="13" 
      flood-color="grey" 
      flood-opacity="0.5">
      <animate 
        attributeName="dx" 
        values="15;10" 
        dur="2s" 
        begin="mouseover" 
        fill="freeze"/>
      <animate 
        attributeName="dy" 
        values="15;10" 
        dur="2s" 
        begin="mouseover" 
        fill="freeze"/>
      <animate 
        attributeName="flood-color" 
        values="grey;blue" 
        dur="2s" 
        begin="mouseover" 
        fill="freeze"/>
    </feDropShadow>
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
          // style={{ filter: "url(#colored-shadow)", transition: "filter 0.5s ease-in-out" }} 
          // onMouseEnter={(e) => {e.target.style.filter = "url(#colored-shadow-hover)" , e.target.style.transition= "2s ease-in-out"}}
          // onMouseLeave={(e) => {e.target.style.filter = "url(#colored-shadow)",e.target.style.transition= "2s ease-in-out"}}
          className="transition-all duration-[2000ms]" 
          style={{
            filter: "url(#colored-shadow)",
            transition: "filter 2s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.setProperty("--shadow-color", "blue");
          }}
          onMouseLeave={(e) => {
            e.target.style.setProperty("--shadow-color", "grey");
          }}
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
