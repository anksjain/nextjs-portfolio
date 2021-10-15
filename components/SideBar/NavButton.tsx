import React from "react";
import { useRouter } from "next/dist/client/router";
interface INavButton {
  title: string
  route:string
}
function NavButton({ title,route }: INavButton) {
  const router = useRouter();
  return (
    <div>
      <button
        className=" text-lg w-full rounded-full outline-none my-2 py-2
        hover:bg-light-border
        dark:hover:bg-indigo-700
        dark:text-dark-background_light_color text-light-font_dark  
        dark:hover:border-blue-200  border-transparent border-2 hover:border-current
        "
        onClick={() => {
          router.push(route);
        }}
      >
        {title}
      </button>
    </div>
  );
}

export default NavButton;
