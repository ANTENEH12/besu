import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="bg-black">
      <Head>
        <title>Besufekad Real Estate</title>
        <meta name="discription" content="generatetd by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Navbar/>
      <Main />
      <About />
      
      <Projects />
      
      <Contact />
    </div>
  );
}
