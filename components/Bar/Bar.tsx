import React, { FunctionComponent } from 'react'
import { ISkill } from '../../Data/types'
import {motion} from "framer-motion";
import {BiMedal} from 'react-icons/bi'
const Bar: FunctionComponent<{data:ISkill}> = ({data:{Level: level,Name: name}}) =>{
    const bar_width=`${level}`
    const variants={
        initial:{
            width:0
        },
        animate:{
            width:bar_width,
            transition:{
                delay:0.5,
                duration:0.3,
                type:"spring",
                damping:10,
                stiffness:100,
            }
        }
    }
    return (
        <div
       
         className=" font-bold my-2 bg-light-border dark:bg-dark-scrollbar_bg_color rounded-full" >
            <motion.div className="px-4  py-1 flex items-center rounded-full bg-gradient-to-r 
             from-light-background_light_2 to-indigo-500
            dark:from-dark-primary_color dark:to-dark_to"
            style={{width:level}}
            variants={variants}
            initial="initial"
            animate="animate"
            >
                <BiMedal className="mr-3"/>
                {name}
            </motion.div>
        </div>
    )
}

export default Bar;
// from-dark-primary_color to-indigo-700