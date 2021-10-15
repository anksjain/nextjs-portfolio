import React from "react";
import {TiThMenuOutline} from  'react-icons/ti'
interface IHeaderTitle {
  title?: string;
}
function Header({ title="title" }: IHeaderTitle) {
  function toogleSideBar() {
    const sideBar = document.querySelector(".sideBar");
    sideBar?.classList.toggle("-translate-x-full");
  }
  return (
    <div className=" md:hidden bg-dark-header_backgorund_color text-dark-white_color
    top-0 left-0 z-20 sticky flex justify-end items-center px-8 bg-transparent h-16">
      <div>
        <TiThMenuOutline className="" onClick={toogleSideBar} />
      </div>
    </div>
  );
}
export default Header;
