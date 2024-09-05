import React from "react";
import "./finish.css";
const Finish = () => {
  return (
    <div>
      <div className="finish-container">
        <img src="./image.png" alt="" />
        <h3 className="text-[26px] font-bold">Congratulations!</h3>
        <p className="text-[19px] font-bold">your account almost ready</p>
        <button className="finish-btn">Start</button>
      </div>
    </div>
  );
};
export default Finish;
