import React from "react";
import { ITimeLineData } from "../../Data/types";
interface IResumeItem {
  data:ITimeLineData
}
function TimeLineItem({data}: IResumeItem) {
  return (
    <div
      className="flex pb-5 w-full
        "
    >
      <div className="left-content pl-5 w-3/12 relative ">
        <div
          className="
                 absolute
                 -left-9
                 top-7
                 rounded-xl
                 h-4 w-4 border-4 border-solid
                    border-dark-border_color
                "
        />
        <p className=" font-semibold inline-block text-lg">{data.date}</p>
      </div>
      {/* <div
          className=" w-12 h-1
                 items-center
                  relative left-2 top-4
                 bg-light-font_dark
                 dark:bg-dark-font_light_color opacity-30
                "
        /> */}
      <div className="right-content pl-20 w-9/12  relative ">
        <div
          className=" w-12 h-1
                 items-center
                 absolute left-2 top-4
                 bg-light-font_dark
                 dark:bg-dark-font_light_color opacity-30
                "
        />
        <h5 className=" dark:text-indigo-700 text-indigo-500 text-3xl font-extrabold">
          {data.title}
        </h5>
        <h6 className="  text-xl font-semibold py-3">{data.subDetail}</h6>
        <ul className="list-disc">
          {data.description.map((x,i)=>(
            <li key={i}>{x}</li>
          ))}
          </ul>
        {/* <p className="">{data.description}</p> */}
      </div>
    </div>
  );
}

export default TimeLineItem;
