import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  FormControlLabel,
  Button,
  Switch,
  Card,
  CardContent,
} from "@mui/material";
import "./service-page.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Popup from "./summery";
import { useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { saveMentorQuestionArray } from "../service/SignUpProcess";
import ShowSucessmessages from "../alert-messages/ShowSucessmessages";
import Loader from "../Loader/Loader";
import ShowErrorMessages from "../alert-messages/ShowErrorMessages";
import { useNavigate } from "react-router-dom";

const ServicePage = ({
  step,
  generalSettingsId,
  setStep,
  setTotalQuestion,
  totalQuestion,
  setAllDaysChecked,
  allDaysChecked,
  setSelectedDays,
  selectedDays,
  setGlobalTimeRanges,
  globalTimeRanges,
  setTimeForDays,
  timeForDays,
  setServiceSetting,
  serviceSetting,
}) => {
  const [loading, setLoading] = useState(false);
  // New Logic
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const navigate = useNavigate();
  console.log("selectedDays", selectedDays);

  // const [allDaysChecked, setAllDaysChecked] = useState(false);
  // const [selectedDays, setSelectedDays] = useState({
  //   Monday: false,
  //   Tuesday: false,
  //   Wednesday: false,
  //   Thursday: false,
  //   Friday: false,
  //   Saturday: false,
  //   Sunday: false,
  // });

  // // For global time ranges (All Days)
  // const [globalTimeRanges, setGlobalTimeRanges] = useState([
  //   { start: "", end: "" },
  // ]);

  // // For individual day-specific time ranges
  // const [timeForDays, setTimeForDays] = useState({
  //   Monday: [{ start: "", end: "" }],
  //   Tuesday: [{ start: "", end: "" }],
  //   Wednesday: [{ start: "", end: "" }],
  //   Thursday: [{ start: "", end: "" }],
  //   Friday: [{ start: "", end: "" }],
  //   Saturday: [{ start: "", end: "" }],
  //   Sunday: [{ start: "", end: "" }],
  // });

  const handleAllDaysChange = (e) => {
    const checked = e.target.checked;
    setAllDaysChecked(checked);

    // Check or uncheck all individual days
    const updatedDays = Object?.keys(selectedDays)?.reduce((acc, day) => {
      acc[day] = checked;
      return acc;
    }, {});

    setSelectedDays(updatedDays);

    // Set the same time for all days if checked
    if (checked) {
      const updatedTimeForDays = Object?.keys(timeForDays)?.reduce(
        (acc, day) => {
          acc[day] = globalTimeRanges;
          return acc;
        },
        {}
      );
      setTimeForDays(updatedTimeForDays);
    } else {
      // Reset times if unchecked
      const resetTimeForDays = Object?.keys(timeForDays)?.reduce((acc, day) => {
        acc[day] = [{ start: "", end: "" }];
        return acc;
      }, {});
      setTimeForDays(resetTimeForDays);
    }
  };

  const handleDayChange = (day) => {
    setSelectedDays((prev) => ({
      ...prev,
      [day]: !prev[day],
    }));
  };

  // Function to add another time range globally (All Days)
  const addGlobalTimeRange = () => {
    setGlobalTimeRanges([...globalTimeRanges, { start: "", end: "" }]);
  };
  // Function to handle removal of time input for global (all days)
  const removeGlobalTimeRange = (index) => {
    const updatedTimeRanges = globalTimeRanges.filter((_, i) => i !== index);
    setGlobalTimeRanges(updatedTimeRanges);
  };
  // Function to remove a time range for individual days
  const removeDayTimeRange = (day, index) => {
    const updatedTimeRanges = timeForDays[day].filter((_, i) => i !== index);
    setTimeForDays((prev) => ({
      ...prev,
      [day]: updatedTimeRanges,
    }));
  };

  // Function to add another time range for individual day
  const addDayTimeRange = (day) => {
    setTimeForDays((prev) => ({
      ...prev,
      [day]: [...prev[day], { start: "", end: "" }],
    }));
  };

  // Handle individual time change for both global and specific days
  const handleGlobalTimeChange = (index, type, value) => {
    const updatedTimeRanges = globalTimeRanges?.map((time, i) =>
      i === index ? { ...time, [type]: value } : time
    );
    setGlobalTimeRanges(updatedTimeRanges);

    // If "All Days" is checked, propagate time change to all days
    if (allDaysChecked) {
      const updatedTimeForDays = Object?.keys(timeForDays)?.reduce(
        (acc, day) => {
          acc[day] = updatedTimeRanges;
          return acc;
        },
        {}
      );
      setTimeForDays(updatedTimeForDays);
    }
  };

  const handleDayTimeChange = (day, index, type, value) => {
    const updatedTimeRanges = timeForDays[day]?.map((time, i) =>
      i === index ? { ...time, [type]: value } : time
    );
    setTimeForDays((prev) => ({
      ...prev,
      [day]: updatedTimeRanges,
    }));
  };
  console.log("timeForDays", timeForDays);
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  // Validation function to check if any time is filled
  const isTimeFilled = () => {
    // Check global time ranges (All Days)
    const globalTimeFilled = globalTimeRanges?.some(
      (range) => range.start && range.end
    );

    // Check individual day-specific time ranges
    const dayTimeFilled = Object.values(timeForDays)?.some((dayRanges) =>
      dayRanges?.some((range) => range.start && range.end)
    );

    return globalTimeFilled || dayTimeFilled;
  };
  const saveFormData = async () => {
    const keys = Object.keys(timeForDays);
    let finalArray = [];
    for (let key of keys) {
      const timeSlots = timeForDays[key]
        ?.filter((slot) => slot.start && slot.end)
        ?.map((slot) => ({
          startTime: slot.start,
          endTime: slot.end,
        }));

      if (timeSlots.length > 0) {
        finalArray.push({
          day: key,
          timeSlots: timeSlots,
        });
      }
    }
    if (isTimeFilled()) {
      try {
        setLoading(true);
        const payload = {
          settingId: generalSettingsId,
          availability: JSON.stringify(finalArray),
        };
        console.log("payload", payload);
        const response = await saveMentorQuestionArray(payload);
        if (response?.success) {
          setStep(step + 1);
          ShowSucessmessages("Time slots added successfully");
        }
        console.log("response is....", response);
      } catch (error) {
        console.log("error is", error);
      } finally {
        setLoading(false);
      }
    } else {
      ShowErrorMessages("Please fill the time slots");
    }
    console.log("finalArray", finalArray);
  };
  // Filtering only the days with value 'true'
  const availableDays = Object?.entries(selectedDays)
    .filter(([day, isAvailable]) => isAvailable) // Filter days where value is true
    .map(([day]) => day); // Map to get the day names only
  console.log("globalTimeRanges", globalTimeRanges);
  return (
    <div className="flex flex-col w-full h-full">
      {loading && Loader(loading)}
      <div className="flex flex-row w-full gap-3  h-full">
        {/* Main Content */}
        <div className="login-container w-[70%] rounded-lg p-4 px-8 h-full">
          <p className="text-[13px] font-medium">
            Setup Preparing Questionnaires
          </p>
          <p className="text-[12px] font-normal mt-2">
            When will you provide your services?*
          </p>

          {/* All Days Checkbox */}
          <div className="flex justify-between items-center mt-4">
            <div className="flex flex-row gap-3 items-center justify-between">
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  className="hidden-checkbox h-[20px] w-[20px] "
                  checked={allDaysChecked}
                  onChange={handleAllDaysChange}
                />
                <span className="custom-checkbox-box"></span>
              </label>
              <p className="text-[12px] font-light">All Days</p>
            </div>

            {/* Global Time Inputs */}
            <div className="flex flex-row gap-4">
              <div className="flex flex-col gap-4 ">
                {globalTimeRanges?.map((time, index) => (
                  <div className="flex flex-row gap-4 items-center" key={index}>
                    <input
                      type="time"
                      placeholder="hh:mm"
                      className="h-8 bg-[#616161] rounded-lg text-[12px] px-2 w-[110px]"
                      value={time.start}
                      onChange={(e) =>
                        handleGlobalTimeChange(index, "start", e.target.value)
                      }
                      disabled={!allDaysChecked}
                    />
                    <input
                      type="time"
                      placeholder="hh:mm"
                      className="h-8 bg-[#616161] rounded-lg text-[12px] px-2 w-[110px]"
                      value={time.end}
                      onChange={(e) =>
                        handleGlobalTimeChange(index, "end", e.target.value)
                      }
                      disabled={!allDaysChecked}
                    />

                    {globalTimeRanges.length > 1 &&
                      time.start !== "" &&
                      time.end !== "" && (
                        <button
                          onClick={() => removeGlobalTimeRange(index)}
                          className="border-[1px] border-white shadow-xl h-8 w-[10px] flex justify-center items-center bg-white text-ask-to-mentor-primary text-[21px]"
                        >
                          -
                        </button>
                      )}
                  </div>
                ))}
              </div>
              <button
                onClick={addGlobalTimeRange}
                className="border-[1px] border-white shadow-xl h-8 w-[10px] flex justify-center items-center bg-white text-ask-to-mentor-primary text-[21px]"
                disabled={globalTimeRanges?.some(
                  (time) => time.start === "" || time.end === ""
                )}
              >
                +
              </button>
            </div>
          </div>

          {/* Days List */}
          <div className="grid grid-cols-1 gap-6 mt-6">
            {daysOfWeek?.map((day) => (
              <div className="flex justify-between items-center" key={day}>
                <div className="flex flex-row gap-3 items-center">
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      className="hidden-checkbox h-[20px] w-[20px]"
                      checked={selectedDays[day]}
                      onChange={() => handleDayChange(day)}
                    />
                    <span className="custom-checkbox-box"></span>
                  </label>

                  <p className="text-[13px] font-light">{day}</p>
                </div>

                {/* Individual Time Inputs */}
                <div className="flex flex-row gap-4">
                  <div className="flex flex-col gap-4 ">
                    {timeForDays[day]?.map((time, index) => (
                      <div
                        className="flex flex-row gap-3 items-center"
                        key={index}
                      >
                        <input
                          type="time"
                          placeholder="hh:mm"
                          className="h-8 bg-[#616161] rounded-lg text-[12px] px-2 w-[110px]"
                          value={time.start}
                          onChange={(e) =>
                            handleDayTimeChange(
                              day,
                              index,
                              "start",
                              e.target.value
                            )
                          }
                          disabled={!selectedDays[day]}
                        />
                        <input
                          type="time"
                          placeholder="hh:mm"
                          className="h-8 bg-[#616161] rounded-lg text-[12px] px-2 w-[110px]"
                          value={time.end}
                          onChange={(e) =>
                            handleDayTimeChange(
                              day,
                              index,
                              "end",
                              e.target.value
                            )
                          }
                          disabled={!selectedDays[day]}
                        />
                        {timeForDays[day].length > 1 &&
                          time.start !== "" &&
                          time.end !== "" && (
                            <button
                              onClick={() => removeDayTimeRange(day, index)}
                              className="border-[1px] border-white shadow-xl h-8 w-[10px] flex justify-center items-center bg-white text-ask-to-mentor-primary text-[21px]"
                            >
                              -
                            </button>
                          )}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => addDayTimeRange(day)}
                    className="border-[1px] border-white shadow-xl h-8 w-[10px] flex justify-center items-center bg-white text-ask-to-mentor-primary text-[21px]"
                    disabled={
                      timeForDays[day]?.some(
                        (time) => time.start === "" || time.end === ""
                      ) || !selectedDays[day]
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
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
              <p className="text-white text-[14px] font-medium ">
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
      <div className="flex justify-between mt-8">
        {step < 8 && (
          <div>
            <button
              className="bg-ask-to-mentor-primary w-[100px] h-11 flex justify-center items-center text-[14px]"
              onClick={() => {
                navigate("/mentor-profile");
              }}
            >
              Skip
            </button>
          </div>
        )}
        <div className="flex gap-5 ">
          <button
            className="bg-ask-to-mentor-primary w-[80px] h-11 flex justify-center items-center"
            onClick={prevStep}
          >
            <IoIosArrowDropleft className="text-[23px]" />
          </button>

          <button
            className="bg-ask-to-mentor-primary w-[80px] h-11 flex justify-center items-center"
            onClick={() => {
              // if (step == 2 || step == 3 || step == 5 || step == 6) {
              // saveFormData();
              // } else {
              nextStep();
              // }
            }}
          >
            <IoIosArrowDropright className="text-[23px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
