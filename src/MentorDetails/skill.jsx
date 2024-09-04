import React, { useState } from "react";
import "./skill.css";
import SearchIcon from "@mui/icons-material/Search";

const Skills = () => {
  const availableSkills = [
    "Machine Learning",
    "Autonomous driving",
    "React.js",
    "Node.js",
    "Microsoft Azure",
    "Artificial Intelligence",
    "Data Science",
    "Natural Language Processing",
    "Computer Vision",
  ];

  const [filteredSkills, setFilteredSkills] = useState(availableSkills);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setFilteredSkills(
      availableSkills.filter((skill) =>
        skill.toLowerCase().includes(searchValue)
      )
    );
  };

  const addSkill = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between bg-[#1c1c1c] text-white min-h-[80vh] p-[15px] rounded-lg">
      <div className="w-full md:w-[45%]">
        <div className="flex items-center relative mb-5">
          <span className="text-[#00c896] absolute pointer-events-none left-2.5">
            <SearchIcon />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="w-full border bg-[#333] text-white box-border pl-10 p-2.5 rounded-[5px] border-solid border-[#00c896]"
            onChange={handleSearch}
          />
        </div>
        <div className="flex flex-wrap gap-2.5 mt-5">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="py-[8px] px-[8px] text-sm rounded-[20px] bg-[#555] cursor-pointer "
              onClick={() => addSkill(skill)}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#555] p-2  w-full md:w-[45%] min-h-[300px] rounded-[5px]">
        <h3 className="">My Skill Lists</h3>
        <div className="flex flex-wrap gap-2.5  mt-2">
          {selectedSkills.length > 0 ? (
            selectedSkills.map((skill, index) => (
              <div
                key={index}
                className="py-[8px] px-[8px] text-sm rounded-[20px] bg-[#00c896] cursor-pointer "
              >
                {skill}
              </div>
            ))
          ) : (
            <p>No skills selected yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
