import React from "react";
import { routeAnimation } from "../components/Animation/animation";
import TimeLine from "../components/Resume/TimeLine";
import Skills from "../components/SkillsBar/Skills";
import Title from "../components/Title/Title";
import {motion} from 'framer-motion'
import Services from "../components/Services/Services";
import Certificate from "../components/Services/Certificate";
import Head from 'next/head'
export default function Skill() {
  return (
    <motion.div
    variants={routeAnimation}
    initial="initial"
    animate="animate"
    >
        <Head>
        <title>Skills</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
       <Title title="Skills"/>
       <div className="my-5 mb-14">
          <Skills/>
       </div>
          <Services/>
       <Certificate/>
    </motion.div>
  );
}
