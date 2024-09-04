import React from "react";
import Navbar from "./common-components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden">
      <div className="main-content flex flex-col w-full h-screen overflow-hidden">
        <div className="h-[10%]">
          <Navbar />
        </div>
        <div className="w-full h-[90%] overflow-hidden pb-2">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
