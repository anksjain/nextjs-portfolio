import React from 'react'
import { IconBaseProps } from 'react-icons';
interface ITimeLineTitle{
    title?:string
    icon:IconBaseProps

}
function TimeLineTitle({title,icon}:ITimeLineTitle) {
    return (
        <div className=" my-10 font-bold text-4xl
         text-light-font_dark
         dark:text-dark-font_light_color
         items-center flex">
           {icon}
            <h5 className=" pl-3">{title}</h5>
        </div>
    )
}
export default TimeLineTitle
