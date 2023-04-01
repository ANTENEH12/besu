import Image from "next/image";
import React from "react";
import UImage from "../public/Besufikad Images/UImage.jpeg";
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const Amazon = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className=' col-span-4 md:col-span-1 shadow-xl shadow-blue-600 rounded-xl  py-4 absolute top-0 left-0 w-full h-[50vh] bg- z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='contain'
          src={UImage}
          alt='/'
        />
        </div>
        </div>
     

      
  
  );
};

export default Amazon;
