import React from "react";
import MainDisplay from "../MainDisplay/MainDisplay";
import SideBar from "../SideBar/SideBar";
interface LayoutProps {
  children: React.ReactNode;
}
function Layout({ children }: LayoutProps) {
  return (
    <div className="flex relative h-screen bg-light-background_light dark:bg-dark-background_dark_color">
      <SideBar />
      <MainDisplay>{children}</MainDisplay>
    </div>
  );
}

export default Layout;
