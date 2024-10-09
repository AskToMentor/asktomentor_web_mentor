import React, { useState } from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import "../MentorDetails/addquestion.css";
import { IoMdAdd } from "react-icons/io";

const AddQuestions = ({
  setQuestionArray,
  questionArray,
  setTotalQuestion,
  totalQuestion,
  setServiceSetting,
  serviceSetting,
  selectedDays,
}) => {
  console.log("totalQuestion", serviceSetting);
  const availableDays = Object?.entries(selectedDays)
    .filter(([day, isAvailable]) => isAvailable) // Filter days where value is true
    .map(([day]) => day); // Map to get the day names only
  return (
    <div className="h-full min-h-[500px] overflow-hidden flex flex-row w-full gap-3">
      <div className="h-full  rounded-lg login-container p-4 w-[70%]">
        <div>
          <p className="text-[18px] font-medium">
            Setup Preparing Questionaire
          </p>
        </div>
        {totalQuestion == 0 && (
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
        )}

        <div className="h-[100%] flex flex-col justify-between">
          <div className="">
            {totalQuestion > 0 &&
              new Array(totalQuestion)?.fill(1)?.map((data, index) => (
                <div className="mt-2">
                  <div className="flex flex-col gap-2">
                    <p>Question {index + 1}</p>
                    <textarea
                      placeholder="Descriptions"
                      className="bg-[#FFFFFF36] w-full border-white text-[14px] font-normal leading-[16px] focus:outline-none h-[80px] rounded-lg p-2"
                      value={questionArray[index]?.question || ""}
                      onChange={(e) => {
                        const newQuestions = [...questionArray];
                        newQuestions[index] = {
                          ...newQuestions[index],
                          question: e.target.value,
                          required: newQuestions[index]?.required || false, // Maintain previous required state
                          fieldType: "TextArea",
                          questionariesId: "765879",
                        };
                        setQuestionArray(newQuestions);
                      }}
                    ></textarea>{" "}
                  </div>
                  <div className="flex justify-end items-end mt-3">
                    <div className=" flex flex-row gap-3 items-center">
                      <label className="custom-checkbox">
                        <input
                          type="checkbox"
                          className="h-[20px] w-[20px] pt-4 hidden-checkbox"
                          checked={questionArray[index]?.required || false}
                          onChange={(e) => {
                            const newQuestions = [...questionArray];
                            newQuestions[index] = {
                              ...newQuestions[index],
                              required: e.target.checked,
                            };
                            setQuestionArray(newQuestions); // Update state with the new array
                          }}
                        />
                        <span className="custom-checkbox-box"></span>
                      </label>
                      <p className="text-[15px] font-light">Required</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex justify-center items-center pb-3 flex-col">
            <div
              className="w-fit justify-center items-center flex flex-col"
              onClick={() => {
                if (totalQuestion == questionArray?.length) {
                  setTotalQuestion(totalQuestion + 1);
                }
              }}
            >
              <div className="bg-inherit border-[1px] border-white rounded-full h-[40px] w-[40px] flex justify-center items-center">
                <IoMdAdd className="text-white text-[20px]" />
              </div>
              <p className="button-text">Add Question</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[30%] bg-[#1A3B4A] rounded-lg h-fit p-3">
          <p className="text-[15px] font-medium">Service Setting</p>
          <div className="flex flex-col gap-[10px] mt-3 w-full">
            <span className="flex flex-row gap-1 items-center w-full">
              <p className="text-[#748D92] text-[14px] font-normal text-nowrap w-[40%]">
                Name:
              </p>
              <p className="text-white text-[14px] font-normal">
                {serviceSetting?.name}
              </p>
            </span>
            <span className="flex flex-row gap-1 items-center w-full">
              <p className="text-[#748D92] text-[14px] font-normal text-nowrap w-[40%]">
                Subcategory:
              </p>
              <p className="text-white text-[14px] font-normal">
                {serviceSetting?.sub_category}
              </p>
            </span>
            <span className="flex flex-row gap-1 items-center w-full">
              <p className="text-[#748D92] text-[14px] font-normal text-nowrap w-[40%]">
                {" "}
                Customer Type:
              </p>
              <span className="text-white text-[14px] font-normal flex flex-row gap-2">
                <p className="border-[1px] border-dashed h-7 text-[13px] flex justify-center items-center px-3 rounded-lg">
                  {" "}
                  {serviceSetting?.customer_type_1}
                </p>
                <p className="border-[1px] border-dashed h-7 text-[13px] flex justify-center items-center px-3 rounded-lg">
                  {serviceSetting?.customer_type_2}
                </p>
              </span>
            </span>
          </div>
          <div className="flex flex-col gap-[10px] mt-3 w-full">
            <span className="flex flex-row gap-1 items-center w-full">
              <p className="text-[#748D92] text-[14px] font-normal text-nowrap w-[40%]">
                Pricing :
              </p>
              <span className="text-white text-[14px] font-normal flex flex-col gap-2">
                <span
                  className={`${
                    serviceSetting?.pricing_1 ? "flex" : "hidden"
                  } border-[1px] border-dashed h-7 text-[13px] flex justify-center items-center px-3 rounded-lg`}
                >
                  {serviceSetting?.pricing_1}
                  {serviceSetting?.customer_type_1 == "P2P" ? "/h P2P" : ""}
                </span>
                <span
                  className={`${
                    serviceSetting?.pricing_2 ? "flex" : "hidden"
                  } border-[1px] border-dashed h-7 text-[13px] flex justify-center items-center px-3 rounded-lg`}
                >
                  {serviceSetting?.pricing_2}
                  {serviceSetting?.customer_type_2 == "P2B" ? "/h P2B" : ""}
                </span>
                {/* // {serviceSetting?.pricing_1}
                // {serviceSetting?.pricing_2} */}
              </span>
            </span>
            <span className="flex w-full">
              <p className="text-[#748D92] text-[14px] font-normal text-nowrap w-[40%] ">
                Date & Time:
              </p>
              <p className="text-white text-[14px] font-medium">
                {availableDays.map((day, index) => (
                  <li
                    key={index}
                    className="text-white text-[13px] font-normal"
                  >
                    {day}
                  </li>
                ))}
              </p>
            </span>
          </div>
        </div>
    </div>
  );
};

export default AddQuestions;
