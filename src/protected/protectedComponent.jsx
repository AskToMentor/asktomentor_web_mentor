import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const protectedComponent = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);
  return (
    <div className="w-full h-full overflow-hidden">
      <Component />
    </div>
  );
};

export default protectedComponent;
