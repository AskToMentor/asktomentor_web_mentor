import React from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import "../MentorDetails/addquestion.css";

const AddQuestions = () => {
  const [isQuestionVisible, setIsQuestionVisible] = useState(false);
  const toggleQuestionVisibility = () => {
    setIsQuestionVisible((prevState) => !prevState);
  };
  return (
    <div className="question-page">
      <div className="question-container">
        <p className="top-left-text2">Setup Preparing question</p>
        {isQuestionVisible && (
          <div className="question-section">
            <div className="question-area">
              <p>question1</p>
              <input type="checkbox" /> <p>required</p>
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  className="h-[20px] w-[20px] pt-4 hidden-checkbox"
                />
                <span className="custom-checkbox-box"></span>
              </label>
              <DeleteTwoToneIcon />
            </div>
            <textarea className="text-area"></textarea>
          </div>
        )}

        <div className="centered-content">
          <button className="plus-button" onClick={toggleQuestionVisibility}>
            <ControlPointIcon />
          </button>
          <p className="button-text">Add question</p>
        </div>
      </div>
    </div>
  );
};

export default AddQuestions;
