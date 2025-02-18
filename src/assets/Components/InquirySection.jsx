import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import Input from './ui/Input';
import { BorderBeam } from './MagicUI/borderbeam';

const InquirySection = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className='flex min-h-[100vh] items-center justify-evenly p-4 bg-white bg-[radial-gradient(ellipse_90%_90%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] '>
      <div
        className=" bg-center bg-no-repeat h-96 w-2/5 rounded-lg bg-cover"
        style={{ backgroundImage: 'url("https://images.pexels.com/photos/3183169/pexels-photo-3183169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")' }}
      >
       
      </div>

      <div id="Enquiry Now " className="flex flex-col">
        <div className="relative self-center  shadow-xl  shadow-zinc-200 hover:shadow-zinc-300  rounded-md border-[1px] border-slate-200  min-h-96 min-w-80  bg-slate-50 p-4 font-semibold">
          <h2 className="text-slate-700 text-center font-bold text-2xl ">
            Enquiry Now
          </h2>

          <Input placeholder={"Name"} onChange={(e) => setName(e.target.value)} />
          <Input placeholder={"Email"} onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder={"Message"} onChange={(e) => setMessage(e.target.value)} />


          <div className="flex justify-center w-full pt-8">


            <button type="submit"
              className={`align-middle w-full min-h-8 duration-300 select-none font-serif font-thin text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-md bg-zinc-950  text-white hover:text-gray-100 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] border-[1px] border-gray-500 hover:border-gray-900 text-nowrap	 mx-2 `}
            > Submit
            </button>
          </div>
          <BorderBeam duration={5} size={200} />
        </div>
      </div>
    </div>
  );
};

export default InquirySection;
