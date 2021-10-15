import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { fadeInleft, fadeInright } from '../Animation/animation'
function ImageSection() {
    return (
        <motion.div
        variants={fadeInright}
        initial="initial"
        animate="animate"
             className="left-content  h-full ">
                {/* <Image width="100%" height="100%" className="" src="/img2.JPG"></Image> */}
                <img   className=" object-fill w-full md:w-2.5 h-full" src="/img4.jpeg"></img>
            </motion.div>
    )
}

export default ImageSection
