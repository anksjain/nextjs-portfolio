import React from "react";
import {motion } from 'framer-motion'
import { fadeInright, fadeInUp } from "../Animation/animation";
interface ITitleProps{
    title:string
    span?:string
}
function Title({title,span}:ITitleProps) {
    span=span?span:title
  return (
      <div className={`pb-14  md:my-10 inline-flex` }>
          <h2
            className=" relative z-1 font-semibold
             text-4xl md:text-6xl 
             text-light-font_dark
            dark:text-dark-white_color"
          >
            <motion.div 
            variants={fadeInright}
            initial="initial"
            animate="animate"

        transition={{ delay:1.0,type: "spring", damping:10,
        stiffness:100, duration: 0.8 }}
            className=" dark:bg-indigo-700 bg-indigo-500
            absolute -bottom-1.5 opacity-90 h-2 w-full container"/>
            {title}
            <b>
              {/* <motion.span className=" inline"> */}
              <motion.span
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{delay:1.0}}
                className=" 
                 text-light-background_light_2
                 dark:text-dark-font_light_color dark:text-opacity-30
                absolute font-black left-1 -z-1
                 text-7xl md:text-9xl"
              >
                {span}
              </motion.span>
            </b>
          </h2>
      </div>
  );
}

export default Title;
