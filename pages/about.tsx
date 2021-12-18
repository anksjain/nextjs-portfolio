import React, { useEffect, useState } from "react";
import SideAbout from "../components/SideAbout/SideAbout";
import Title from "../components/Title/Title";
import { motion } from "framer-motion";
import { fadeInDown, routeAnimation } from "../components/Animation/animation";
import TimeLine from "../components/Resume/TimeLine";
import { Education, Work } from "../Data/timeline";
import { MdWork } from "react-icons/md";
import { IoSchoolSharp } from "react-icons/io5";
import Head from "next/head";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
 }, []);
  return (
    <motion.div variants={routeAnimation} initial="initial" animate="animate">
      <Head>
        <title>About Me</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Title title="About" />
      <div className="flex flex-wrap   md:space-x-10  justify-between">
        {/* <ImageSection /> */}
        <SideAbout />
      </div>
      <Title title="TimeLine" />
      <TimeLine icon={<MdWork />} title="Education" data={Education} />
      <TimeLine icon={<IoSchoolSharp />} title="Work Experience" data={Work} />
    </motion.div>
  );
}

export default About;
