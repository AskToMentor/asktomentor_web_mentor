import React from "react";
import Navbar from "./common-components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden">
      <div className="main-content flex flex-col w-full h-full">
        <div className="h-[80px] sm:h-[100px]">
          <Navbar />
        </div>
        <div className="w-full h-full overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
