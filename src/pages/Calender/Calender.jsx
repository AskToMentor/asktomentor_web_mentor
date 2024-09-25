import React from "react";
import { MdAddCircle } from "react-icons/md";

const Sidebar = () => {
  const daysShort = ["M", "T", "W", "T", "F", "S", "S"];
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const today = new Date().getDate();

  return (
    <div
      className="w-full h-[963.67px] bg-[#212A31] text-white p-4 border-r-[0.93px] border-[#DADCE0]"
      style={{ left: "-4.67px" }}
    >
      <div className="text-lg font-medium mb-4">September 2024</div>
      <div className="grid grid-cols-7 gap-2">
        {daysShort.map((day, index) => (
          <div
            className="text-center text-[#D3D9D5] font-medium text-[13px] "
            key={index}
          >
            {day}
          </div>
        ))}
        {days.map((day, index) => (
          <div
            key={index}
            className={`text-center text-[#D3D9D5] font-medium text-[13px] py-2  ${
              day === today ? "bg-[#124E66] rounded-full" : ""
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

const CalendarHeader = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <div className="w-[100%] h-[100%] bg-white flex justify-between p-2 py-4">
      {days.map((day, index) => (
        <div
          className="flex-1 text-center text-[16px] font-semibold text-[#212A31]"
          key={index}
        >
          {day}
        </div>
      ))}
    </div>
  );
};

const TimeLabel = () => {
  const times = Array.from(
    { length: 24 },
    (_, i) => `${String(i).padStart(2, "0")}:00`
  );
  return (
    <div className="space-y-6 text-gray-400 p-1 ">
      {times.map((time, index) => (
        <div
          key={index}
          className="h-20 p-2 text-[14px] font-medium text-[#D3D9D5]"
        >
          {time}
        </div>
      ))}
    </div>
  );
};

const CalendarGrid = () => {
  const times = Array.from({ length: 24 });
  const days = Array.from({ length: 7 });

  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-24 gap-0 border border-gray-700">
      {times.map((_, rowIndex) =>
        days.map((_, colIndex) => (
          <div
            key={rowIndex * days.length + colIndex}
            className="border border-gray-700 transition duration-300 ease-in-out hover:bg-[#124E66]"
          ></div>
        ))
      )}
    </div>
  );
};

const TopBar = () => (
  <div className="text-white flex justify-between items-center p-1 shadow-md rounded-lg mb-4 ml-3">
    <div className="flex space-x-2">
      <button className="bg-gray-700 px-4 py-2 rounded-md text-sm transition duration-300">
        All Bookings
      </button>
      <button
        className="hover:bg-[#124E66]0 px-4 py-2 rounded-md text-sm flex items-center transition duration-300"
        style={{ backgroundColor: "#124E66" }}
      >
        <span className="mr-2">Add Service</span>
        <MdAddCircle className="text-[23px]" />
      </button>
    </div>
  </div>
);
const Calendar = () => (
  <div className="h-screen p-4">
    <div className="h-full grid grid-cols-6">
      <div className="col-span-1 ">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col col-span-5">
        <TopBar />
        <CalendarHeader />
        <div className="flex flex-1">
          <TimeLabel />
          <CalendarGrid />
        </div>
      </div>
    </div>
  </div>
);

export default Calendar;
