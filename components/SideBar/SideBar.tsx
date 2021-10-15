import React from "react";
import SideButton from "./SideButton";
import NavButtons from "./NavButtons";
import ImageAvatar from "./ImageAvatar";
import ToogleTheme from "./ToogleTheme";

import {FaGithub,FaLinkedin,FaInstagram} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'
function SideBar() {
  return (
    <div
      className="sideBar rounded-tr-3xl  w-7/12 md:w-80 px-5 bg-light-sidebar_dark dark:bg-dark-sidebar_dark_color text-center absolute inset-y-0 left-0
         transform  -translate-x-full md:translate-x-0 md:relative transition duration-200 ease-in-out z-30"
    >
      <div className="flex flex-col w-full justify-between py-4 h-full">
        <div className=" flex justify-end">
          <ToogleTheme />
        </div>
        <div className="flex-grow flex flex-col justify-between">
          <ImageAvatar />
          <div className="w-full dark:text-light-sidebar_dark">
              <div className="flex flex-row justify-evenly">
                <a href="https://leetcode.com/OO_skull_/">
                <SiLeetcode  onClick={()=>{}} className=" dark:text-light-background_dark_grey text-gray-800" style={{ fontSize: "200%" }} />
                </a>
                <a href="https://github.com/anksjain">
                <FaGithub  onClick={()=>{}} className=" dark:text-light-background_dark_grey text-gray-800" style={{ fontSize: "200%" }} />
                </a>
                <a href="https://linkedin.com/in/ankit0029">
                <FaLinkedin className=" dark:text-light-background_dark_grey text-gray-800" style={{ fontSize: "200%" }} />
                </a>
                <a href="https://instagram.com/_anksjain/" >
                <FaInstagram className=" dark:text-light-background_dark_grey text-gray-800" style={{ fontSize: "200%" }} />
                </a>
              </div>
            </div>
          <NavButtons />
          <a href="/ANKIT-JAIN.pdf" download="ANKIT-JAIN.pdf  "> 
          <SideButton  title="Download CV" OnClick={() => {}} />
        </a>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
