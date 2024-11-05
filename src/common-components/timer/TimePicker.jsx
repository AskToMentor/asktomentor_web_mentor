import React, { useState } from "react";

const TimePicker = ({ value, onChange, disabled }) => {
  const [time, setTime] = useState(
    value || { hours: "00", minutes: "00", period: "AM" }
  );

  const handleChange = (field, newValue) => {
    const newTime = { ...time, [field]: newValue };
    setTime(newTime);
    onChange && onChange(newTime);
  };

  return (
    <div className="relative">
      <div className="flex gap-2 items-center bg-[#616161] rounded-lg px-2 h-8 w-[110px] text-[12px] cursor-pointer">
        {/* Hours */}
        <select
          className="bg-transparent appearance-none w-1/3 text-white focus:outline-none cursor-pointer"
          value={time.hours}
          onChange={(e) => handleChange("hours", e.target.value)}
          disabled={disabled}
          // defaultValue={}
        >
          {Array.from({ length: 12 }, (_, i) =>
            (i).toString().padStart(2, "0")
          ).map((hour) => (
            <option key={hour} value={hour}>
              {hour}
            </option>
          ))}
        </select>

        {/* Colon */}
        <span>:</span>

        {/* Minutes */}
        <select
          className="bg-transparent appearance-none w-1/3 text-white focus:outline-none cursor-pointer"
          value={time.minutes}
          onChange={(e) => handleChange("minutes", e.target.value)}
          disabled={disabled}
        >
          {Array.from({ length: 60 }, (_, i) =>
            i.toString().padStart(2, "0")
          ).map((minute) => (
            <option key={minute} value={minute}>
              {minute}
            </option>
          ))}
        </select>

        {/* AM/PM */}
        <select
          className="bg-transparent appearance-none w-1/3 text-white focus:outline-none cursor-pointer"
          value={time.period}
          onChange={(e) => handleChange("period", e.target.value)}
          disabled={disabled}
        >
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </div>
    </div>
  );
};

export default TimePicker;
