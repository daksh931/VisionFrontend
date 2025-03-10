import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="py-16 bg-slate-100 min-h-[100vh] ">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:justify-center lg:gap-12">


          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full flex flex-col items-center text-center md:5/12 lg:w-5/12"
          // className="md:5/12 lg:w-5/12"
          >



            <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
              Get in touch
            </h1>
            <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
              Fill in the form to start a conversation
            </p>
            {/*icons start */}
            <div className="flex items-center mt-8 text-gray-600">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div className="ml-4 text-md tracking-wide font-semibold w-40">
                Gulab Bagh, Ramesh Nagar, Ludhiana, Punjab 141007
              </div>
            </div>

            <div className="flex items-center mt-4 text-gray-600">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div className="ml-4 text-md tracking-wide font-semibold w-40">
                +91 995588722
              </div>
            </div>

            <div className="flex items-center mt-2 text-gray-600">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div className="ml-4 text-md tracking-wide font-semibold w-40">
                visionclasses@gmail.com
              </div>
            </div>





















          </motion.div>


          {/* </motion.div> */}

          {/* form - right side */}
    

<motion.div
  initial={{ opacity: 0, x: 100 }} // Fixed "intial" typo and "Opacity" casing
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <div className="p-6 flex flex-col justify-center">
    <div className="flex flex-col">
      <label htmlFor="name" className="hidden">
        Full Name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Full Name"
        className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-zinc-500 focus:outline-none"
      />
    </div>

    <div className="flex flex-col mt-2">
      <label htmlFor="email" className="hidden">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-zinc-500 focus:outline-none"
      />
    </div>

    <div className="flex flex-col mt-2">
      <label htmlFor="tel" className="hidden">
        Number
      </label>
      <input
        type="tel"
        name="tel"
        id="tel"
        placeholder="Telephone Number"
        className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-zinc-500 focus:outline-none"
      />
    </div>

    <button
      type="submit"
      className="bg-zinc-800 w-32 text-white px-6 py-3 rounded-lg text-lg font-medium mt-3 self-center hover:bg-zinc-900 transition duration-300 shadow-black/40 hover:shadow-black/40 shadow-md hover:shadow-lg focus:outline-none"
    >
      Submit
    </button>
  </div>
</motion.div>;
        
          {/* <motion.div
            intial={{ Opacity: 0, x: 100 }}
            whileInView={{ Opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}>

            <div className="p-6 flex flex-col justify-center">
              <div className="flex flex-col">
                <label htmlFor="name" className="hidden">
                  Full Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-zinc-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="email" className="hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-zinc-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="tel" className="hidden">
                  Number
                </label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Telephone Number"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-zinc-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                // className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                className="bg-zinc-800 w-32 text-white px-6 py-3 rounded-lg text-lg font-medium mt-3 self-center hover:bg-zinc-900 transition duration-300 shadow-black/40 hover:shadow-black/40 shadow-md hover:shadow-lg focus:outline-none"
              >
                Submit
              </button>
            </div>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
{/* <div className="relative flex items-top justify-center min-h-[100vh] bg-slate-100 sm:items-center sm:pt-0">
<div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
  <div className="mt-8  ">
    <div
      // className="grid grid-cols-1 md:grid-cols-2
      className="flex lg:items-center lg:gap-12">


      {/* get in touch -left side  */}
{/* <motion.div 
        intial={{Opacity:0,x:-100}}
        whileInView={{Opacity:1,x:0}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      > */}

//       <motion.div
//         intial={{ Opacity: 0, x: -100 }}
//         whileInView={{ Opacity: 1, x: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         viewport={{ once: true }}
//         className="p-6 mr-2 bg-gray-50 shadow-xl shadow-zinc-400 hover:shadow-zinc-500 sm:rounded-lg">


//        
//       </motion.div>

//     </div>
//   </div>
// </div>
// </div> */}