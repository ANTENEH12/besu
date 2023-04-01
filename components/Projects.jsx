import Image from "next/image";
import Link from "next/link";
import ProjectItem from './ProjectItem';
import React from "react";
import OImage from "/public/Besufikad Images/OImage.jpeg";
import BImage from "/public/Besufikad Images/BImage.jpeg";
import ABImage from "/public/Besufikad Images/ABImage.jpeg";
import CImage from "/public/Besufikad Images/CImage.jpeg";

const Projects = () => {
  return (
    <div id="project" className="w-full bg-black text-white">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-4xl tracking-widest uppercase text-blue-600">
          projucts
        </p>
        <h1 className="py-4 text-4xl  capitalize">our projects</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="our new city"
            backgroundImg={OImage}
            projectUrl="/HomeOne"
          />
          <ProjectItem
            title="one of our best build"
            backgroundImg={BImage}
            projectUrl="/HomeTwo"
          />
          <ProjectItem
            title="Our future city"
            backgroundImg={ABImage}
            projectUrl="/HomeThree"
          />
          <ProjectItem
            title="our three bedroom home"
            backgroundImg={CImage}
            projectUrl="/HomeFour"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
