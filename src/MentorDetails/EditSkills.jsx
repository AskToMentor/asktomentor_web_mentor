import React, { useState } from "react";
import "./skill.css";
import SearchIcon from "@mui/icons-material/Search";

const EditSkills = () => {
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

  const [filteredSkills, setFilteredSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([
    "Machine Learning",
    "Autonomous driving",
    "React.js",
    "Node.js",
    "Microsoft Azure",
  ]);
  const [searchLength, setSearchLength] = useState(0);

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchLength(searchValue?.length);
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
  const removeSkills = (skill) => {
    if (selectedSkills.includes(skill)) {
      // Remove skill if it exists
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    }
  };
  console.log("searchLength", searchLength, filteredSkills);

  return (
    <div className="login-container text-white min-h-[600px] p-3 rounded-lg grid grid-cols-4 gap-4">
      <div className="w-full col-span-2">
        <h3 className="text-[16px] font-semibold tracking-normal">
          Select Skills
        </h3>
        <div className="flex items-center relative mt-2">
          <span className="text-[#FFFFFF36] absolute pointer-events-none left-2.5">
            <SearchIcon />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-[#FFFFFF36] text-white pl-10 p-2.5 rounded-[5px] hover:outline-none"
            onChange={handleSearch}
          />
        </div>
        <div className="flex flex-wrap gap-2.5 mt-5">
          {searchLength > 0
            ? filteredSkills.map((skill, index) => (
                <div
                  key={index}
                  className="h-10 flex justify-center items-center px-6 text-sm rounded-[20px] bg-ask-to-mentor-primary cursor-pointer "
                  onClick={() => addSkill(skill)}
                >
                  {skill}
                </div>
              ))
            : ""}
        </div>
      </div>
      <div className="w-ful col-span-2 flex flex-col justify-between rounded-[5px]">
        <h3 className="text-[16px] font-semibold">My Skill Lists</h3>
        <div className="bg-[#2F3943] h-full rounded-lg p-4 pt-7 mt-2">
          <div className="flex flex-wrap gap-2.5 ">
            {selectedSkills.length > 0 ? (
              selectedSkills.map((skill, index) => (
                <div
                  key={index}
                  className="h-10 flex justify-center  gap-4 items-center px-6 text-sm rounded-[20px] bg-[#26404E] cursor-pointer border-[1px] border-[#748D92]"
                >
                  <p> {skill}</p>
                  <p
                    onClick={() => {
                      removeSkills(skill);
                    }}
                    className="p-2"
                  >
                    X
                  </p>
                </div>
              ))
            ) : (
              <p>No skills selected yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditSkills;
