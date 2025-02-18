import React from 'react';
import { Box, Card, CardContent, Typography, IconButton, Collapse } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { useState } from 'react';
import { MagicCard } from '../../../components/ui/magic-card';
import { motion } from "framer-motion";
import { GridPattern } from '../../../components/ui/grid-pattern';
import { cn } from '../../../lib/utils';
// import "./WeOffer.css"
const courses = [
  {
    category: 'School Education',
    details: [
      { title: 'Classes 5-8', description: 'Building strong foundations in Mathematics, Science, and Language with interactive learning methods.' },
      { title: 'Classes 9-10', description: 'Focused preparation for board exams with rigorous practice sessions and conceptual clarity.' },
      { title: 'Classes 11-12', description: 'Specialized coaching in Science (Physics, Chemistry, Biology, Mathematics) and Commerce streams for board exams and competitive exams.' },
    ],
  },
  {
    category: 'Engineering (B.Tech)',
    details: [
      { title: 'Classes 5-8', description: 'Building strong foundations in Mathematics, Science, and Language with interactive learning methods.' },
      { title: 'Classes 9-10', description: 'Focused preparation for board exams with rigorous practice sessions and conceptual clarity.' },
      { title: 'Classes 11-12', description: 'Specialized coaching in Science (Physics, Chemistry, Biology, Mathematics) and Commerce streams for board exams and competitive exams.' },
    ],
  },
  {
    category: 'Government Jobs Preparation',
    details: [
      { title: 'Banking Exams', description: 'Coaching for IBPS, SBI PO/Clerk, RBI exams with a focus on Quantitative Aptitude, Reasoning, English, and General Awareness.' },
      { title: 'Civil Services', description: 'Preparation for UPSC, State PSC exams with specialized modules in General Studies, CSAT, and optional subjects.' },
      { title: 'Railway Exams', description: 'Coaching for RRB NTPC, RRB Group D, and other railway exams with focused training on relevant subjects.' },
      { title: 'SSC Exams', description: 'Training for SSC CGL, SSC CHSL, and other exams with comprehensive coverage of syllabus and extensive practice sessions.' },
    ],
  },
];

const WeOffer = () => {
  const [expanded, setExpanded] = useState(null);

  const handleExpandClick = (index) => {
    setExpanded(expanded === index ? null : index);
  };
  const headText = "Empowering Students for a Brighter Future ...".split(" ");
  return (


    
   
      <div className='pb-12 bg-white bg-[radial-gradient(ellipse_70%_90%_at_50%_-10%,rgba(120,119,198,0.3),rgba(255,255,255,0))] '>

      <Box className="flex flex-wrap mx-18 justify-center gap-6 p-6 sm:mx-40 sm:pt-40 ">
        <Box>
          {/* <Typography variant='h2' className='sm:pt-32'>
            Vision Classes 
         </Typography> */}
          <div className='mt-0 text-center '>

            <div className="App">
              {headText.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: i / 3
                  }}
                  key={i}
                >
                  <span className="font-semibold  text-zinc-700 text-[6vh] sm:text-[4.5vw]  hover:text-slate-600 hover:cursor-pointer" > {el} {" "}</span>
                </motion.span>
              ))}
            </div>

          </div>
        </Box>

        </Box>

        <hr className="mx-3 border-0 h-[2px] w-full bg-gradient-to-r from-transparent via-slate-500 to-transparent" />


        {/* courses section  */}
        <div className='flex flex-col justify-center sm:flex-col w-full sm:px-52 sm:-space-y-32'>

          {courses.map((course, index) => (
            <div
              key={index}
              className={`flex justify-center ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                } mt-12`}
            >
              <div
                className={`shadow-xl rounded-full shadow-zinc-200 hover:shadow-zinc-300
      ${index % 2 === 0 ? "border-b-2 border-r-[1px]" : "border-t-2 border-l-[1px] "} border-slate-400  
      h-60 w-60 sm:h-60 sm:w-60 md:h-96 md:w-96 bg-zinc-50 p-4 font-semibold overflow-hidden 
      flex items-center justify-center`}
              >
                <h2 className="text-slate-700 text-center font-bold text-3xl">
                  {course.category}
                </h2>
              </div>
            </div>
          ))}

        </div>


      
{/* 
      <div className={"flex h-[500px] w-60 flex-col gap-4 lg:h-[250px] "}>
        <MagicCard
          className="h-52 cursor-pointer w-full flex-col items-center justify-center whitespace-nowrap text-4xl "

        >
          <div className=' bg-black'>
            Magic </div>
        </MagicCard>

      </div> */}
    </div>
  );
};

export default WeOffer;
