import React from "react";
import { motion } from "framer-motion";
import { fadeInleft, fadeInright } from "../Animation/animation";
function SideAbout() {
  return (
    <motion.div
      variants={fadeInleft}
      initial="initial"
      animate="animate"
      className="right-content  flex-grow my-5 mb-20 md:my-10  "
    >
        <div className="flex xl:w-9/12">
      <div className="">
        <h4 className="font-black text-left text-4xl">
          I AM <span className=" text-indigo-700 text-4xl">ANKIT JAIN</span>
        </h4>
        <p className="  font-normal paragraph text-justify text-xl my-6">
         Hi I am random guy, who have over 1.5 years of experience as a software engineer, and have worked at both small 
         startups and large organisation. I have experience working as part of a team and individually. My expertise is building backend services (API services and async mehanism). 
         I loves to work with new technology,really enjoy working with new task and solving the new challenges that arise on engineering problems. I am able to handle multiple tasks on a daily basis.
         
        </p>
        <p className="font-normal paragraph text-justify text-xl my-6">In my hobbies I like to watch movies & a big fan of Marvel.Also like to cook sometimes. I am kind of lazy person so always go for smart work over hard work. In meantime I like to learn new tech and improving problem solving skills. </p>
        <div className=" font-normal grid grid-rows-6 grid-flow-col text-left place-content-start  text-xl">
          <p>FullName</p>
          <p>Age</p>
          <p>Nationality</p>
          <p>Languages</p>
          <p>Location</p>
          <p>Service</p>
          <p className="px-2">:</p>
          <p className="px-2">:</p>
          <p className="px-2">:</p>
          <p className="px-2">:</p>
          <p className="px-2">:</p>
          <p className="px-2">:</p>
          <p>Ankit Jain</p>
          <p> 25</p>
          <p>Indian</p>
          <p>Hindi,English</p>
          <p>Gurgram,Haryana</p>
          <p>Developer</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SideAbout;
