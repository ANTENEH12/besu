import Image from "next/image";
import React from "react";
import AImage from "/public/Besufikad Images/ AImage.jpeg";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-4 flex items-center py-16 bg-black text-white"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-4xl tracking-widest text-blue-600">
            about us
          </p>

          <div>
            <Image
              className="rounded-full shadow shadow-blue-600 hover:scale-105 ease-in duration-300"
              src={AImage}
              alt=""
              width="585"
              height="85"
            />
          </div>
          <h1 className="uppercase font-extrabold py-4">WHAT WE DO</h1>
          <p className="py-2 text-white">
          Besufekad real eatate was established in 2013 G.C. and has since
            delivered 16 residential, 5 commercial, and 8 mixed use mid to
            large-scale projects, with additional 10 projects under development
            at various sites in Addis Ababa. Within this 10 years of experience,
            Noah has constructed and is constructing a total of 29 projects.
            Noah Real Estate is a highly esteemed, trustworthy, and capable
            company. We have a strong financial foundation along with
            state-of-the-art design innovation.
          </p>
         
           
            <p className="py-2 text-white">
              Our bold vision has spiked the interest of many while making us
              one of the leading brand in the real state sector.We strives to
              contribute significantly to the real estate sector. Our motto
              "Design, Build and Deliver" is derived from our determination to
              provide an exceptional buying experience for our customers.
            </p>
            <p className="py-2 text-white">
              We go above and beyond the prevailing practice of selling real
              estate. We develop, acquire, and manage properties. Our approach
              can simply be summarized as responsible selling.
            </p>
            <p className="py-2 text-white">
              Once our masterpieces are built, we offer them for sale. Delivery
              is made upon full completion of each detail within the building.
              Our vision is bold. To become the leading brand in the real estate
              sector and be synonymous with quality performance - in design, in
              build, and in delivery of superior construction. Noah is a sister
              company of Great Abyssinia PLC, a renowned FMCG company with
              brands you love, such as Abyssinia Coffee, Prigat, Tulip, and Aby
              soda drinks with various flavors. In a recent prestigious deal, we
              are also partnered up with Nestlé in water bottling; a
              continuation of the Abyssinia Springs brand.
            </p>
          
        </div>
      </div>
    </div>
  );
};

export default About;
