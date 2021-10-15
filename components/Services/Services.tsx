import React from 'react'
import ServiceCard from './ServiceCard'
import {MdDeveloperMode,MdWeb} from 'react-icons/md'
import {GoDeviceMobile} from 'react-icons/go'
import {FaCloud} from 'react-icons/fa'
import Title from "../Title/Title"
function Services() {
    return (
        <div className="">
            <Title title="Services"/>
            <div className=" my-14 grid grid-cols-12 gap-4 h-full  bgin">
                <ServiceCard title="Backend Development" icon={<MdDeveloperMode color="#4438ca"/>} content="Build a scable service which provide power to application"/>
                <ServiceCard title="Frontend Development" icon={<MdWeb color="#4438ca"/>} content="Provide a responsive with rich user experience"/>
                <ServiceCard title="Mobile App Development" icon={<GoDeviceMobile color="#4438ca"/>} content="Develop a Hybrid application with smoot user experience"/>
                <ServiceCard title="Cloud Services" icon={<FaCloud color="#4438ca"/>} content="Deploy and scale the application over the cloud "/>
            </div>
        </div>
    )
}

export default Services
