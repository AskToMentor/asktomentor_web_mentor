import React, { useState } from "react";
import "./skill.css";
import SearchIcon from '@mui/icons-material/Search';

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
    <div className="skills-container">
      <div className="skills-select">
        <div className="input-container">
          <span className="search-icon"><SearchIcon /></span>
          <input
            type="text"
            placeholder="        Search"
            className="skills-search"
            onChange={handleSearch}
          />
        </div>
        <div className="skills-list">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="skill-item"
              onClick={() => addSkill(skill)}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="skills-selected">
        <h3 className="my-list">My Skills List</h3>
        <div className="selected-skills-list">
          {selectedSkills.length > 0 ? (
            selectedSkills.map((skill, index) => (
              <div key={index} className="selected-skill-item">
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
