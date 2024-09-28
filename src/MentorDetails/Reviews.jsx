import React, { useState } from "react";

const Reviews = () => {
  const [reviewFilter, setReviewFilter] = useState("Completed");
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <button
          className={`  rounded-full w-[150px] cursor-pointer h-fit    text-[15px] font-bold flex justify-center items-center text-center ${
            reviewFilter == "Completed"
              ? "bg-[#124E66] text-white"
              : "bg-[#2F3B44] text-[#D3D9D5]  border-[1px] border-white"
          }`}
          onClick={() => {
            setReviewFilter("Completed");
          }}
        >
          Completed
        </button>
        <button
          className={`  rounded-full w-[150px] cursor-pointer h-fit    text-[15px] font-bold flex justify-center items-center text-center ${
            reviewFilter == "Reported"
              ? "bg-[#124E66] text-white"
              : "bg-[#2F3B44] text-[#D3D9D5]  border-[1px] border-white"
          }`}
          type="button"
          onClick={() => {
            setReviewFilter("Reported");
          }}
        >
          Reported
        </button>
      </div>
      <div className="login-container text-white min-h-[600px] p-3 rounded-lg w-full">
        <div className="min-h-[600px] w-full border-[1.5px] border-white border-dotted flex justify-center items-center ">
          Noting to show
        </div>
      </div>
    </div>
  );
};

export default Reviews;
