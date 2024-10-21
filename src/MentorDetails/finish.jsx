import React from "react";
import "./finish.css";
import animation from "../../public/animation-congratulation.json";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
const Finish = () => {
  const navigate = useNavigate();
  return (
    <div className="login-container h-[500px] rounded-lg">
      <div className="h-[450px] flex justify-center flex-col items-center">
        <Lottie animationData={animation} className="w-[400px] !h-[350px]" />
        <h3 className="text-[23px] font-bold">Congratulations!</h3>
        <p className="text-[14px] font-normal">your account almost ready</p>
        <button
          className="bg-ask-to-mentor-primary w-[150px] mt-4 text-[14px]"
          onClick={() => {
            navigate("/login");
          }}
        >
          Start
        </button>
      </div>
    </div>
  );
};
export default Finish;
