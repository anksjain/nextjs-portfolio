import React from 'react'
import Header from './Header'
import MyParticle from './MyParticle'
interface MainProps {
  children: React.ReactNode;
}
function MainDisplay({children}:MainProps) {
    return (
        <div className=" flex-1 flex overflow-hidden">
          <MyParticle/>
        <div className="flex-1 flex-col overflow-y-scroll relative">
          
        <Header title="Contact Me"/>
        <div className=" px-10  lg:px-20 py-10
        dark:text-dark-white_color text-light-font_dark_2
        ">
          {children}
        </div>
        </div>
      </div>
    )
}
export default MainDisplay
