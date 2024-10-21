import React, { useEffect, useState } from "react";
import "./skill.css";
import SearchIcon from "@mui/icons-material/Search";
import { getMentorSkillsData } from "../service/SignUpProcess";

const Skills = ({
  setSelectedSkillsID,
  selectedSkillsID,
  setSelectedSkills,
  selectedSkills,
}) => {
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
  const [searchLength, setSearchLength] = useState(0);
  const [skillList, setSkillList] = useState();
  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchLength(searchValue?.length);
    setFilteredSkills(
      skillList?.filter((skill) =>
        skill?.skillName?.toLowerCase()?.includes(searchValue)
      )
    );
  };

  const addSkill = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
      setSelectedSkillsID([...selectedSkillsID, skill?.skillId]);
    }
  };
  const removeSkills = (skill) => {
    if (selectedSkills.includes(skill)) {
      // Remove skill if it exists
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
      setSelectedSkillsID(selectedSkillsID.filter((s) => s !== skill?.skillId));
    }
  };
  console.log("searchLength", searchLength, filteredSkills);
  const getMentorSkills = async () => {
    const response = await getMentorSkillsData();
    console.log("response", response);
    if (response?.success) {
      setSkillList(response?.data);
    }
  };
  useEffect(() => {
    getMentorSkills();
  }, []);
  return (
    <div className="flex flex-col md:flex-row justify-between login-container text-white min-h-[600px] p-[15px] px-7 rounded-lg">
      <div className="w-full md:w-[45%]">
        <div className="flex items-center relative mb-5">
          <span className="text-[#FFFFFF36] absolute pointer-events-none left-2.5">
            <SearchIcon />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-[#FFFFFF36] text-white pl-10 p-2.5 rounded-[5px] hover:outline-none text-[12px]"
            onChange={handleSearch}
          />
        </div>
        <div className="flex flex-wrap gap-2.5 mt-5">
          {searchLength > 0
            ? filteredSkills?.map((skill, index) => (
                <div
                  key={index}
                  className="h-10 flex justify-center items-center px-6 text-[12px] rounded-[20px] bg-ask-to-mentor-primary cursor-pointer "
                  onClick={() => addSkill(skill)}
                >
                  {skill?.skillName}
                </div>
              ))
            : ""}
        </div>
      </div>
      <div className="p-2 w-full md:w-[45%] flex flex-col justify-between rounded-[5px]">
        <h3 className="text-[13px] font-semibold">My Skill Lists</h3>
        <div className="bg-[#2F3943] h-full rounded-lg p-4 pt-7 mt-2">
          <div className="flex flex-wrap gap-2.5 ">
            {selectedSkills.length > 0 ? (
              selectedSkills.map((skill, index) => (
                <div
                  key={index}
                  className="h-10 flex justify-center  gap-4 items-center px-6 text-[12px] rounded-[20px] bg-[#26404E] cursor-pointer border-[1px] border-[#748D92]"
                >
                  <p> {skill?.skillName}</p>
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

export default Skills;
