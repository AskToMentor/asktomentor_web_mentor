import React, { useState } from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import "../MentorDetails/addquestion.css";
import { IoMdAdd } from "react-icons/io";

const AddQuestions = () => {
  const [isQuestionVisible, setIsQuestionVisible] = useState(false);
  const toggleQuestionVisibility = () => {
    setIsQuestionVisible((prevState) => !prevState);
  };
  const [totalQuestion, setTotalQuestion] = useState(0);
  console.log("totalQuestion", totalQuestion);
  return (
    <div className=" h-[500px] flex flex-row w-full gap-3">
      <div className="h-full  rounded-lg login-container p-4 w-[75%]">
        <div className="h-[80%]">
          <p className="text-[18px] font-medium">
            Setup Preparing Questionaire
          </p>
          {/* {isQuestionVisible && (
            <div className="mt-2">
              <div className="flex flex-col gap-2">
                <p>Question 1</p>
                <textarea
                  placeholder="Descriptions"
                  className="bg-[#FFFFFF36] w-full border-white text-[14px] font-normal leading-[16px] focus:outline-none h-[80px] rounded-lg p-2"
                ></textarea>{" "}
              </div>
              <div className="flex justify-end items-end mt-3">
                <div className=" flex flex-row gap-3 items-center">
                  <input type="checkbox" className="h-[20px] w-[20px] pt-4" />
                  <p className="text-[15px] font-light">Required</p>
                </div>
              </div>
            </div>
          )} */}
          <div className="overflow-y-auto">
            {totalQuestion > 0 &&
              new Array(totalQuestion)?.fill(1)?.map((data, index) => (
                <div className="mt-2">
                  <div className="flex flex-col gap-2">
                    <p>Question 1</p>
                    <textarea
                      placeholder="Descriptions"
                      className="bg-[#FFFFFF36] w-full border-white text-[14px] font-normal leading-[16px] focus:outline-none h-[80px] rounded-lg p-2"
                    ></textarea>{" "}
                  </div>
                  <div className="flex justify-end items-end mt-3">
                    <div className=" flex flex-row gap-3 items-center">
                      <input
                        type="checkbox"
                        className="h-[20px] w-[20px] pt-4"
                      />
                      <p className="text-[15px] font-light">Required</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="flex justify-center h-[20%] items-center flex-col">
          <div
            className="w-fit justify-center items-center flex flex-col"
            onClick={() => {
              setTotalQuestion(totalQuestion + 1);
            }}
          >
            <div className="bg-inherit border-[1px] border-white rounded-full h-[40px] w-[40px] flex justify-center items-center">
              <IoMdAdd className="text-white text-[20px]" />
            </div>
            <p className="button-text">Add Question</p>
          </div>
        </div>
      </div>
      <div className="w-[25%] bg-[#1A3B4A] rounded-lg h-fit p-3">
        <p className="text-[16px] font-medium">Service Setting</p>
        <div className="flex flex-col gap-[2px] mt-3">
          <span>
            <p className="text-[#748D92] text-[15px] font-normal">Name:</p>
            <p></p>
          </span>
          <span>
            <p className="text-[#748D92] text-[15px] font-normal">
              Subcategory:
            </p>
            <p></p>
          </span>
          <span>
            <p className="text-[#748D92] text-[15px] font-normal">
              {" "}
              Customer Type:
            </p>
            <p></p>
          </span>
        </div>
        <div className="flex flex-col gap-[2px] mt-3">
          <span>
            <p className="text-[#748D92] text-[15px] font-normal">Pricing :</p>
            <p></p>
          </span>
          <span className="flex justify-between">
            <p className="text-[#748D92] text-[15px] font-normal">
              Date & Time:
            </p>
            <p className="text-white text-[15px] font-medium">All Days</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AddQuestions;
