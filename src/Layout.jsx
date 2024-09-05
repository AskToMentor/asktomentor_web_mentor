import React from "react";
import Navbar from "./common-components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      <div className="main-content flex flex-col w-full h-screen overflow-hidden">
        <div className="h-[12%] sm:h-[10%]">
          <Navbar />
        </div>
        <div className="w-full h-[88%] sm:h-[90%] overflow-hidden flex pb-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
