import React from "react";
import { IconBaseProps } from "react-icons";
import { ITimeLineData } from "../../Data/types";
import TimeLineItem from "./TimeLineItem";
import TimeLineTitle from "./TimeLineTitle";
interface ITimeLine{
  title:string
  data:ITimeLineData[]
  icon:IconBaseProps
}
function TimeLine({title,data,icon}:ITimeLine) {
  return (
    <div>
        <TimeLineTitle icon={icon} title={title}/>
      <div className="border-l-2 border-dashed border-dark-border_color">
        {
          data.map((x,index)=>(
            <TimeLineItem data={x} key={index}/>
          ))
        }
      </div>
    </div>
  );
}

export default TimeLine;
