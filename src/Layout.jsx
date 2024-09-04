import React from "react";
import Navbar from "./common-components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden">
      <div className="main-content flex flex-col w-full h-full">
        <div className="h-fit">
          <Navbar />
        </div>
        <div className="page-content w-full h-full">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
