import React from 'react'
import Image from 'next/image';
import VImage from '../public/Besufikad Images/VImage.jpeg'
import Link from 'next/link';
import {RiRadioButtonFill} from 'react-icons/ri'

function HomeThree() {
  return (
    <div className="w-full">
         <div className="w-screen h-[50vh] relative">
        <div className=" col-span-4 md:col-span-1 shadow-xl shadow-red-600 rounded-xl  py-4 absolute top-0 left-0 w-full h-[50vh] bg- z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="contain"
          src={VImage}
          alt="/"
        />
         </div>
      </div>
      /* <div className="max-w-[1240px] text-white mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2 className="p-2 uppercase text-center text-blue-600 font-bold">
            Project Overview
          </h2>
          <p>
           
          </p>
          <a
            href="https://github.com/ANTENEH12"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8  bg-blue-500 rounded-full">
              Code
            </button>
          </a>
          <a
            href=" "
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4  bg-blue-500 rounded-full ">
              Demo
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-blue-600 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Css
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Google API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Zillow API
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <button className="cursor-pointer px-8 py-2 mt-1 mr-8 bg-blue-500 rounded-full">
            Back
          </button>
        </Link>
      </div>
    </div> */
  );
};
export default HomeThree