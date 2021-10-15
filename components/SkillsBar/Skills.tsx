import React from "react";
import { Framework, Language, WebTechnologgy } from "../../Data/skill";
import SkillsItem from "./SkillsItem";
function Skills() {
  return (
    <div>
     <SkillsItem title="Languages" skillList={Language}/>
     <SkillsItem title="Frameowrk" skillList={Framework}/>
     <SkillsItem title="Others" skillList={WebTechnologgy}/>
    </div>
  );
}

export default Skills;
