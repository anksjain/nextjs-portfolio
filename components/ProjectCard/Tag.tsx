import React from 'react'
import { AiFillTags } from 'react-icons/ai';
interface ITag{
    name:string
}
function Tag({name}:ITag) {
    return (
        <div className=" flex items-center   dark:bg-gray-600 bg-light-border_2 rounded-full px-3 mr-1 my-1">
            <AiFillTags className="text-gray-800 dark:text-gray-300"/>
           <p>
            {name}
            </p> 
        </div>
    )
}

export default Tag
