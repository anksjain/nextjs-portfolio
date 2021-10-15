import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import { Projects } from "../Data/projects";
import Title from "../components/Title/Title";
import Filters from "../components/ProjectCard/Filters";
import { IProject } from "../Data/types";
import { motion } from "framer-motion";
import Head from "next/head";
import {
  fadeInUp,
  routeAnimation,
  stagger,
} from "../components/Animation/animation";
function Project() {
  let filteredProjects: IProject[];
  const [activeFilter, setActiveFilter] = useState("All");
  const [myProjects, setmyProjects] = useState<IProject[]>(Projects);
  const tags = helper(Projects);
  console.log(tags);
  function setFilter(name: string) {
    filteredProjects = Projects;
    if (name !== "All") {
      filteredProjects = Projects.filter((x) => x.tag.includes(name));
    }
    setActiveFilter(name);
    setmyProjects(filteredProjects);
  }
  return (
    <motion.div variants={routeAnimation} initial="initial" animate="animate">
      <Head>
        <title>Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Title title="Projects" />
      <Filters names={tags} applyFilter={setFilter} active={activeFilter} />
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="grid grid-cols-12 gap-4 my-3 relative"
      >
        {myProjects.map((project, index) => (
          <motion.div
            variants={fadeInUp}
            transition={{ type: "spring", duration: 0.8, delay: 1.0 }}
            className="col-span-12 sm:col-span-6 lg:col-span-4 p-2 "
          >
            <ProjectCard project={project} key={index} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Project;

function helper(list: IProject[]): string[] {
  let tags: string[] = [];
  let set = new Set<string>();
  tags.push("All");
  for (let i = 0; i < list.length; i++) {
    list[i].tag.map((z) => {
      if (!set.has(z)) {
        tags.push(z);
        set.add(z);
      }
    });
  }

  return tags;
}
