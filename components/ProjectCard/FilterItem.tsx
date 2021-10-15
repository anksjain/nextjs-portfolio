import React from "react";
interface IFilterItem{
    name:string
    active:string
    applyFilter:(name:string)=>void
}
function FilterItem({name,active,applyFilter}:IFilterItem) {
    let classname=`px-4 py-2 my-2  mx-2 rounded-full text-center border-2 border-transparent
    dark:hover:border-dark-background_light_color hover:border-light-font_dark_2
      dark:hover:bg-indigo-700 hover:bg-light-background_light_2   `
    if(active===name)
    classname+="dark:bg-indigo-700 bg-light-background_light_2   "
    else
    classname+="dark:bg-dark-sidebar_dark_color bg-light-border"

  return (
      <div className="  ">

    <button
      onClick={() => applyFilter(name)}
      className={classname}>
      {name}
    </button>
          </div>
  );
}

export default FilterItem;
