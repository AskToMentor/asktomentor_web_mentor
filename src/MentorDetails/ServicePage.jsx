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

const ServicePage = () => {
  const [checked, setChecked] = React.useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="flex flex-row w-full gap-3">
      {/* Main Content */}
      <div className="login-container w-[75%] rounded-lg p-4 px-8">
        <p className="text-[18px] font-medium">
          Setup Preparing Questionnaires
        </p>
        <p className="text-[15px] font-normal mt-2">
          When will you provide your services?*
        </p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex flex-row gap-3 items-center justify-between">
            <input type="checkbox" className="h-[20px] w-[20px] pt-4" />
            <p className="text-[15px] font-light">All Days</p>
          </div>
          <div className="flex flex-row gap-4">
            <input
              type="time"
              placeholder="hh:mm"
              className="h-9 bg-[#616161] rounded-lg text-[14px] px-2"
            />
            <input
              type="time"
              placeholder="hh:mm"
              className="h-9 bg-[#616161] rounded-lg text-[14px] px-2"
            />
          </div>
        </div>

        {/* Days List */}
        <div className="grid grid-cols-1 gap-6 mt-6">
          {[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ].map((day) => (
            <div className="flex justify-between items-center">
              <div className=" flex flex-row gap-3 items-center">
                <input type="checkbox" className="h-[20px] w-[20px] pt-4" />
                <p className="text-[15px] font-light">{day}</p>
              </div>

              <div className="flex flex-row gap-4">
                <input
                  type="time"
                  placeholder="hh:mm"
                  className="h-9 bg-[#616161] rounded-lg text-[14px] px-2"
                />
                <input
                  type="time"
                  placeholder="hh:mm"
                  className="h-9 bg-[#616161] rounded-lg text-[14px] px-2"
                />
              </div>
            </div>
          ))}
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

export default ServicePage;
