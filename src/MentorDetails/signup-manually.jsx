import React, { useState } from "react";
import "../MentorDetails/signup-manually.css";
import Skills from "../MentorDetails/skill";
// import logo from './personal_profile.png';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Appservices from "../MentorDetails/appservices";
import Finish from "../MentorDetails/finish";

const ManuallySignUpForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="signup-container">
      <div className="sidebar">
        <ul>
          <li className={step === 1 ? "active" : step > 1 ? "completed" : ""}>Start</li>
          <li className={step === 2 ? "active" : step > 2 ? "completed" : ""}>Personal info</li>
          <li className={step === 3 ? "active" : step > 3 ? "completed" : ""}>Skills</li>
          <li className={step === 4 ? "active" : step > 4 ? "completed" : ""}>Services</li>
          <li className={step === 5 ? "active" : step > 5 ? "completed" : ""}>Finish</li>
        </ul>
      </div>
      <div className="form-content">
        {step === 2 && (
          <div className="personal-info">
            <div className="profile-image">
              <img src="./profile-logo.png" alt="Profile" />
              <p>Select profile image</p>
            </div>
            <div className="form-group">
              <label>About yourself</label>
              <textarea placeholder="Briefly about yourself                                                          0/256"></textarea>
            </div>
            <div className="form-group">
              <label>Social media links</label>
              <input type="text" placeholder="Facebook                                                                                                                                            Optional" />
              <input type="text" placeholder="Instagram                                                                                                                                           Optional" />
              <input type="text" placeholder="LinkedIn                                                                                                                                              Optional" />
            </div>
            <div className="form-group">
              <label>Referral code</label>
              <input type="text" placeholder="Enter referral code...." />
            </div>
          </div>
        )}

        {step === 3 && <Skills/>} 
        {step===4 && <Appservices/>}  
        {step === 5 && <Finish/>}

        <div className="form-navigation">
          {step > 1 && <button className="backbutton" onClick={prevStep}><ArrowBackIosIcon/></button>}
          {step < 5 && <button className="backbutton" onClick={nextStep}><ArrowForwardIosIcon/></button>}
        </div>
      </div>
    </div>
  );
};

export default ManuallySignUpForm;
