import Image from "next/image";
import AImage from "/public/Besufikad Images/ AImage.jpeg";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail,
   AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn, } from "react-icons/fa";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (Window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl ease-in-out duration-300 shadow-blue-600 z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between bg-blue-600 items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            className="shadow shadow-blue-600 rounded-full"
            src={AImage}
            alt=""
            width="180"
            height="10"
          />
        </Link>

        <div className="text-white border-blue-600">
          <ul className="hidden md:flex cursor-pointer text-white">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:scale-105 ease-in duration-300">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:scale-105 ease-in duration-300">About</li>
            </Link>

            <Link href="/#project">
              <li className="ml-10 text-sm uppercase hover:scale-105 ease-in duration-300">
                Poroject
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:scale-105 ease-in duration-300">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[45%] h-screen bg-blue-600 p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 w-[75%] sm:w-[45%] h-screen bg-[#ecf0f3]  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  className="shadow shadow-blue-600 rounded-full"
                  src={AImage}
                  alt=""
                  width="280"
                  height="20"
                />
              </Link>

              <div
                onClick={handleNav}
                className="rounded-full shadow-lg p-3 cursor-pointer"
              >
                <AiOutlineClose className="text-red-600" />
              </div>
            </div>
            <div className="border-b-blue-900 text-white my-4">
              <p className="w-[85%] md:w-[90%] font-signature text-2xl p-4 capitalize">
                lets build some beautyfull homes together.
              </p>
            </div>
          </div>
          <div className="p-4 mr-3">
            <ul className="text-black ">
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="ml-10 text-sm p-4  hover:scale-105  uppercase text-white"
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(false)}
                  className="ml-10 text-sm p-4  hover:scale-105   uppercase text-white"
                >
                  about
                </li>
              </Link>
              <Link href="/#project">
                <li
                  onClick={() => setNav(false)}
                  className="ml-10 text-sm p-4 hover:scale-105 uppercase text-white"
                >
                  Poroject
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setNav(false)}
                  className="ml-10 text-sm p-4 hover:scale-105  uppercase text-white"
                >
                  contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="text-white capitalize font-signature text-3xl tracking-widest">
                please, visit our social medias
              </p>
              <div className="flex p-4 items-center justify-between">
                <a href="">
                  <div className="rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-105 ease-in duration-500">
                    <FaLinkedinIn className="text-blue-900" />
                  </div>
                </a>
                <a href="">
                  <div className="rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-105 ease-in duration-500">
                    <AiFillInstagram className="text-blue-900" />
                  </div>
                </a>

                <a href="http://google.com">
                  <div className="rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-105 ease-in duration-500">
                    <AiOutlineMail className="text-blue-900" />
                  </div>
                </a>
                <a href="https://www.facebook.com/besufikadrealestat?mibextid=LQQJ4d">
                <div className="rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-105 ease-in duration-500">
                  <AiFillFacebook className="text-blue-900" />
                </div>
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
