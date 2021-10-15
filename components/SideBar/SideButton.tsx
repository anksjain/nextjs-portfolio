import React, { MouseEventHandler } from "react";
interface IButton{
    OnClick:MouseEventHandler<HTMLElement>,
    title:string
}
function SideButton({OnClick,title}:IButton) {
  return (
    <div>
      <button className=" dark:text-dark-background_light_color text-light-font_dark_2
      mb-12 py-2 font-medium text-lg  w-full rounded-full outline-none border-transparent border-2 hover:border-current
       bg-light-border dark:bg-dark-border_color 
     dark:hover:bg-indigo-700" 
      onClick={OnClick}>
        {title}
      </button>
    </div>
  );
}

export default SideButton;
