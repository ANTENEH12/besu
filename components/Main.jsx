import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail, AiFillInstagram } from "react-icons/ai";
import {  BsFacebook } from "react-icons/bs";
import AImage from "/public/Besufikad Images/ AImage.jpeg";

const Main = () => {
  return (
    <motion.div id="home" className="w-full h-screen text-center bg-black">
      <div className="max-w-[1240px] h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <div>
            <Image
              className="rounded-full shadow shadow-blue-600 hover:scale-105 ease-in duration-300"
              src={AImage}
              alt=""
              width="985"
              height="85"
            />
          </div>
          <p className="capitalize font-signature text-3xl tracking-widest py-4 text-white">
            Building quality homes and peaceful living environment is our
            priority!!{" "}
          </p>
          <p className="py-4 text-white font-signature text-3xl  max-w-[70%] m-auto">
            For more detail imformatin about us please visite our facebook
            and/or other social medias listed below.
          </p>

          <div className="flex p-4 items-center justify-between">
            <a href="">
              <div className="rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn className="text-blue-900" />
              </div>
            </a>
            <a href="">
              <div className="rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiFillInstagram className="text-blue-900" />
              </div>
            </a>

            <a href="http://google.com">
              <div className="rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiOutlineMail className="text-blue-900" />
              </div>
            </a>
            <a href="https://www.facebook.com/besufikadrealestat?mibextid=LQQJ4d">
              <div className="rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <BsFacebook className="text-blue-900" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Main;
