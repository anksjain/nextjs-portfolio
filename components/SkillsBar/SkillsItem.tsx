import React from "react";
import { ISkill } from "../../Data/types";
import Bar from "../Bar/Bar";
interface ISkillItems{
skillList:ISkill[]
title?:string
}
function SkillsItem({skillList,title}:ISkillItems) {
  return (
    <div>
      <h5 className="my-3 text-3xl font-semibold">{title}</h5>
      <div className="my-2">
      <div className="grid gap-6 md:grid-cols-2">
        {skillList.map((skill,index) => (
          <Bar data={skill} key={index}></Bar>
        ))}
      </div>
      </div>
    </div>
  );
}

export default SkillsItem;
