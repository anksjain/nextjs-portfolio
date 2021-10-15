import React, { MouseEventHandler, useState } from "react";
import { IProject } from "../../Data/types";
import { AiOutlineClose, AiOutlineLink } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import Tag from "./Tag";
import {motion} from "framer-motion"
import { fadeInDown, fadeInleft, fadeInright, fadeInUp } from "../Animation/animation";
interface IDetails {
  project: IProject;
  onClose: MouseEventHandler<SVGElement>;
}
function Details({ project, onClose }: IDetails) {
  return (
    <motion.div
    variants={fadeInDown}
    initial="initial"
    animate="animate"
      className="grid lg:grid-cols-2 gap-12 absolute right-0 left-0 z-40 px-6 md:px-16 py-10
       dark:bg-dark-detail_background_1 bg-light-border"
    >
      <motion.div
       variants={fadeInright}
       transition={{delay:0.2}}
       initial="initial"
       animate="animate"
       >
        <img className=" h-full object-cover" src={project.imageUrl}></img>
      </motion.div>
      <motion.div
       variants={fadeInleft}
       transition={{delay:0.2}}
       initial="initial"
       animate="animate"
       >
        <h2 className=" text-4xl font-bold">{project.name}</h2>
        <div className=" my-2 md:my-4 text-4xl flex justify-items-start  items-center">
          <VscGithub href={project.github_url} className=" mr-4" />
          <AiOutlineLink />
        </div>
        <h3 className=" font-normal text-lg">
         {project.description}
        </h3>
        <div className=" flex flex-wrap pt-8">
          {project.tag.map((x) => (
            <Tag name={x} />
          ))}
        </div>
      </motion.div>
      <div className="absolute top-2 hover:bg-red-500 right-2 text-xl md:text-3xl focus:outline-none p-1 rounded-full">
        <AiOutlineClose onClick={onClose} />
      </div>
    </motion.div>
  );
}

export default Details;
