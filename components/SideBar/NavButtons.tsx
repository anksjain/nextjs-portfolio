import React from "react";
import NavButton from "./NavButton";

function NavButtons() {
  return (
    <div className="flex flex-col justify-between">
      <NavButton title="Home" route={"/about"} />
      <NavButton title="Skills" route={"/skill"} />
      <NavButton title="Projects" route={"/projects"} />
      <NavButton title="Contact Me" route={"/contact"} />
    </div>
  );
}

export default NavButtons;
