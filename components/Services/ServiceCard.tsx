import React from 'react'
import { IconBaseProps, IconType } from 'react-icons'
interface IServiceCrad{
    title:string
    content:string
    icon:IconBaseProps
}
function ServiceCard({title,content,icon}:IServiceCrad) {
    return (
        <div className=" col-span-12 sm:col-span-6 xl:col-span-4 pl-2  p-8
         dark:bg-dark-background_dark_grey bg-light-border
          border-dark-background_light_color_2
           hover:border-dark-primary_color_light
           transition-all ease-in-out
           hover:translate-y-3    
          border-t-8">
            <div className="flex items-center pb-3">
                <span className=" pr-2 text-6xl">
                    {icon}
                </span>
            <h4 className="text-xl font-medium" >{title}</h4>
            </div>
            <p  className=" text-lg font-normal px-2" >{content}</p>
        </div>
    )
}

export default ServiceCard
