import React, { useState } from "react";
import "../MentorDetails/signup-manually.css";
import Skills from "./skill";
// import logo from './personal_profile.png';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Finish from "./finish";
import AppServices from "./appservices";
import MentorSlides from "../common-components/mentor-sliders/MentorSlides";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { IoLogoLinkedin } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import {
  MentorPersonalInfo,
  saveMentorQuestion,
  saveMentorQuestionArray,
  saveProfileImage,
} from "../service/SignUpProcess";
import Loader from "../Loader/Loader";
import ShowErrorMessages from "../alert-messages/ShowErrorMessages";
import ShowSucessmessages from "../alert-messages/ShowSucessmessages";

const ManuallySignUpForm = ({}) => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const activeColor = (index) =>
    step >= index ? "bg-ask-to-mentor-primary" : "bg-gray-300";
  const processSteps = [
    {
      id: 1,
      name: "Start",
      step: 1,
    },
    {
      id: 2,
      name: "Personal info",
      step: 2,
    },
    {
      id: 3,
      name: "Skills",
      step: 3,
    },
    {
      id: 4,
      name: "Services",
      step: 4,
    },
    {
      id: 5,
      name: "Finish",
      step: 8,
    },
  ];
  const [loading, setLoading] = useState(false);
  const [profileImage, setProfileImage] = useState("");
  console.log("step", step);
  const [image, setImage] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("file", file);
    setProfileImage(file);
    if (file) {
      const payload = {
        profile_image: file,
        userId: registration_user_id,
      };
      const image_response = saveProfileImage(payload);
      console.log("image_response", image_response);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const [personalInfoData, setPersonalInfoData] = useState({
    about_yourself: "",
    facebook_id: "",
    instagram_id: "",
    twitter_id: "",
    linkedin_id: "",
  });
  const [questionArray, setQuestionArray] = useState([]);
  const [generalSetting, setGeneralSetting] = useState({
    coachingOfferingsId: "",
    desc: "",
    categoryId: "",
    subCategoryId: "",
  });
  const [selectedSkillsID, setSelectedSkillsID] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const [generalSettingsId, setGeneralSettingsId] = useState();
  const [totalQuestion, setTotalQuestion] = useState(0);

  // Time slots State:
  // -------------------
  const [allDaysChecked, setAllDaysChecked] = useState(false);
  const [selectedDays, setSelectedDays] = useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
  });

  // For global time ranges (All Days)
  const [globalTimeRanges, setGlobalTimeRanges] = useState([
    { start: "", end: "" },
  ]);

  // For individual day-specific time ranges
  const [timeForDays, setTimeForDays] = useState({
    Monday: [{ start: "", end: "" }],
    Tuesday: [{ start: "", end: "" }],
    Wednesday: [{ start: "", end: "" }],
    Thursday: [{ start: "", end: "" }],
    Friday: [{ start: "", end: "" }],
    Saturday: [{ start: "", end: "" }],
    Sunday: [{ start: "", end: "" }],
  });
  // Right side box data states
  const [serviceSetting, setServiceSetting] = useState({
    name: "",
    sub_category: "",
    customer_type_1: "",
    customer_type_2: "",
    pricing_1: "",
    pricing_2: "",
    date_time: "",
  });
  const [services, setServices] = useState([]);
  console.log("services", services);
  const saveFormData = async () => {
    console.log("hello");
    console.log("selectedSkillsID", selectedSkillsID);
    const registration_user_id = localStorage.getItem("registered_user_id");
    if (step == 2) {
      try {
        if (!personalInfoData?.about_yourself) {
          ShowErrorMessages("Please provide the description");
          return;
        }
        //  else if (!personalInfoData?.facebook_id) {
        //   ShowErrorMessages("Please provide the facebook profile");
        //   return;
        // } else if (!personalInfoData?.instagram_id) {
        //   ShowErrorMessages("Please provide the instagram profile");
        //   return;
        // } else if (!personalInfoData?.twitter_id) {
        //   ShowErrorMessages("Please provide the twitter profile");
        //   return;
        // } else if (!personalInfoData?.linkedin_id) {
        //   ShowErrorMessages("Please provide the linkedin profile");
        //   return;
        // }
        setLoading(true);
        const payload = {
          selfIntroDesc: personalInfoData?.about_yourself,
          faceBookId: personalInfoData?.facebook_id,
          instagramId: personalInfoData?.instagram_id,
          twitterId: personalInfoData?.twitter_id,
          userId: registration_user_id,
        };
        console.log("payload", payload);
        const response = await MentorPersonalInfo(payload);
        if (response?.success) {
          ShowSucessmessages("Personal information added successfully");
          setStep(step + 1);
          // setPersonalInfoData({
          //   ...personalInfoData,
          //   about_yourself: "",
          //   facebook_id: "",
          //   instagram_id: "",
          //   linkedin_id: "",
          //   twitter_id: "",
          // });
        }
        console.log("response is....", response);
      } catch (error) {
        console.log("error is", error);
      } finally {
        setLoading(false);
      }
    } else if (step == 3) {
      try {
        if (selectedSkillsID?.length <= 0) {
          ShowErrorMessages("Please select the skills");
          return;
        }
        setLoading(true);
        const payload = {
          skills: selectedSkillsID,
          userId: registration_user_id,
        };
        console.log("payload", payload);
        const response = await MentorPersonalInfo(payload);
        if (response?.success) {
          setStep(step + 1);
          // setSelectedSkillsID([]);
          ShowSucessmessages("Skills added successfully");
        }
        console.log("response is....", response);
      } catch (error) {
        console.log("error is", error);
      } finally {
        setLoading(false);
      }
    } else if (step == 5) {
      try {
        if (!generalSetting?.coachingOfferingsId) {
          ShowErrorMessages("Please select the type");
          return;
        } else if (!generalSetting?.desc) {
          ShowErrorMessages("Please provide the description");
          return;
        } else if (!generalSetting?.categoryId) {
          ShowErrorMessages("Please select the category");
          return;
        } else if (!generalSetting?.subCategoryId) {
          ShowErrorMessages("Please select the sub category");
          return;
        } else if (services?.length <= 0) {
          ShowErrorMessages("Please select the service type");
          return;
        } else if (
          services?.length > 0 &&
          services[0]?.type == "" &&
          services[1]?.type == ""
        ) {
          ShowErrorMessages("Please select the service type");
          return;
        }
        setLoading(true);
        const payload = {
          coachingOfferingsId: generalSetting?.coachingOfferingsId,
          categoryId: generalSetting?.categoryId,
          subCategoryId: generalSetting?.subCategoryId,
          desc: generalSetting?.desc,
          serviceType: JSON.stringify(services),
          userId: registration_user_id,
        };
        console.log("payload", payload);
        const response = await saveMentorQuestion(payload);
        if (response?.success) {
          setStep(step + 1);
          ShowSucessmessages("General setting information added successfully");
          setGeneralSettingsId(response?.data?.settingId);
          setServices([]);
          // setGeneralSetting({
          //   ...generalSetting,
          //   categoryId: "",
          //   coachingOfferingsId: "",
          //   desc: "",
          //   subCategoryId: "",
          // });
        }
      } catch (error) {
        console.log("error is", error);
      } finally {
        setLoading(false);
      }
    } else if (step == 6) {
      try {
        setLoading(true);
        const payload = {
          settingId: generalSettingsId,
          questonaries: JSON.stringify(questionArray),
        };
        console.log("payload", payload);
        const response = await saveMentorQuestionArray(payload);
        setStep(step + 1);
        if (response?.success) {
          ShowSucessmessages("Questions added successfully");
          // setQuestionArray([]);
        }
        console.log("response is....", response);
      } catch (error) {
        console.log("error is", error);
      } finally {
        setLoading(false);
      }
    }
  };
  console.log("selectedDays", step);
  return (
    <div className="h-full mb-20 overflow-y-auto">
      {loading && Loader(loading)}
      <div className="mb-16 lg:mb-0 flex flex-col md:flex-row p-3 lg:p-0 w-full lg:w-[90%] max-w-[1300px] bg-[#212a31] text-white min-h-[500px] shadow-[0_5px_15px_rgba(0,0,0,0.5)] mx-auto lg:my-[50px] rounded-[10px]">
        <div className="sidebar pt-[3rem] flex flex-col items-center md:items-start md:flex-row justify-center w-full md:w-[20%]  ">
          <div className="flex md:hidden items-start flex-row">
            {processSteps?.map((item, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col gap-4 items-center ">
                  <div className="flex ">
                    <div className={`h-fit flex flex-col items-center`}>
                      <span
                        className={`w-6 h-6 rounded-full ${activeColor(
                          index + 1
                        )} `}
                      ></span>
                    </div>
                    <div
                      className={`w-10 mobile-lg:w-16 h-1 mt-2 ${activeColor(
                        index + 1
                      )} ${
                        processSteps?.length == index + 1 ? "hidden" : "block"
                      }`}
                    ></div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="flex md:hidden items-start gap-3 mobile-lg:gap-6 flex-row">
            {processSteps?.map((item, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col text-[13px] mobile-lg:text-[16px] gap-5 items-center">
                  <p>{item?.name}</p>
                </div>
              </React.Fragment>
            ))}
          </div>

          <div className="hidden md:flex items-start flex-col">
            {processSteps?.map((item, index) => (
              <React.Fragment key={index}>
                <div className={`w-fit gap-4 h-fit flex items-center`}>
                  <span
                    className={`w-8 h-8  text-[13px] flex justify-center  items-center rounded-full  ${activeColor(
                      item?.step
                    )} `}
                  >
                    {index + 1}
                  </span>
                  <p className="text-white text-[13px]">{item?.name}</p>
                </div>
                <div
                  className={`h-16 border-dashed border-[1px] ml-[15px] ${activeColor(
                    index + 1
                  )} ${processSteps?.length == index + 1 ? "hidden" : "block"}`}
                ></div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="w-full md:w-[80%] bg-[#212a3] flex flex-col relative p-4">
          {step === 1 && (
            <div className="flex justify-between">
              <div>
                <p className="text-[20px] font-semibold">Let's get started!</p>
                <p className="text-[14px]">
                  Just enter your basic details to create your account
                </p>
              </div>
              <div>
                <button className="bg-ask-to-mentor-primary text-white py-2 w-fit rounded-full gap-2 flex flex-row items-center justify-center mx-auto">
                  <IoLogoLinkedin className="text-[25px] " />
                  <p className="text-[13px]">Import from LinkedIn</p>
                </button>
              </div>
            </div>
          )}

          {step === 1 && <MentorSlides nextStep={nextStep} />}
          {step === 2 && (
            <div className="personal-info login-container rounded-[10px] p-3 px-16 pb-10">
              <div className="flex items-center justify-between gap-3">
                <div className="form-group">
                  <h1 className="text-[20px] font-medium text-left">
                    Connect with us
                  </h1>
                  <p className="text-white text-[13px] font-normal leading-[27.24px]">
                    Share a bit about your background and passions.
                  </p>
                </div>
                <div className="profile-image text-white flex justify-center items-center flex-col">
                  {/* <div className="h-[110px] !bg-[#5B636A] text-[#5B636A]  z-50 w-[110px] flex justify-end rounded-full border-[2px] border-[#748D92]"></div>
                  <p>Add profile picture </p>
                  <input
                    type="file"
                    className="text-[#5B636A]  z-50 rounded-full"
                    placeholder="Upload"
                  /> */}
                  {image ? (
                    <div className="mt-4 w-20 h-20 rounded-full overflow-hidden border-[2px] border-[#748D92]">
                      <img
                        src={image}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-[80px] !bg-[#5B636A] text-[#5B636A]  z-50 w-[80px] flex justify-end rounded-full border-[2px] border-[#748D92]"></div>
                  )}
                  <label
                    htmlFor="file-upload"
                    className="text-white cursor-pointer text-[13px]"
                  >
                    Add profile picture
                  </label>

                  <input
                    type="file"
                    id="file-upload"
                    onChange={handleFileChange}
                    className="hidden" // Hide the file input
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="text-[13px]">About yourself</label>
                <textarea
                  placeholder="Tell us about yourself, your interest, your experiences"
                  className="bg-[#FFFFFF36] border-white text-[14px] font-normal leading-[16px] focus:outline-none h-[80px] rounded-lg p-2"
                  onChange={(e) => {
                    setPersonalInfoData({
                      ...personalInfoData,
                      about_yourself: e.target.value,
                    });
                  }}
                  value={personalInfoData?.about_yourself}
                ></textarea>
              </div>
              <div>
                <label className="text-[13px]">Social media links</label>
                <div className="flex flex-col gap-6 mt-2">
                  <div className="flex w-full bg-[#FFFFFF36] flex-row items-center rounded-lg">
                    <span className="px-2">
                      <FaFacebookSquare className="text-[30px]" />
                    </span>
                    <input
                      type="text"
                      placeholder="Facebook ID"
                      className="bg-[#FFFFFF36] border-white w-full text-[12px] font-normal leading-[16px] focus:outline-none h-11 rounded-r-lg p-2"
                      onChange={(e) => {
                        setPersonalInfoData({
                          ...personalInfoData,
                          facebook_id: e.target.value,
                        });
                      }}
                      value={personalInfoData?.facebook_id}
                    />
                  </div>
                  <div className="flex w-full bg-[#FFFFFF36] flex-row items-center rounded-lg">
                    <span className="px-2">
                      <FaInstagramSquare className="text-[30px]" />
                    </span>
                    <input
                      type="text"
                      placeholder="Instagram ID"
                      className="bg-[#FFFFFF36] border-white w-full text-[12px] font-normal leading-[16px] focus:outline-none h-11 rounded-r-lg p-2"
                      onChange={(e) => {
                        setPersonalInfoData({
                          ...personalInfoData,
                          instagram_id: e.target.value,
                        });
                      }}
                      value={personalInfoData?.instagram_id}
                    />
                  </div>
                  <div className="flex w-full bg-[#FFFFFF36] flex-row items-center rounded-lg">
                    <span className="px-2">
                      <FaSquareXTwitter className="text-[30px]" />
                    </span>
                    <input
                      type="text"
                      placeholder="X ID"
                      className="bg-[#FFFFFF36] border-white w-full text-[12px] font-normal leading-[16px] focus:outline-none h-11 rounded-r-lg p-2"
                      onChange={(e) => {
                        setPersonalInfoData({
                          ...personalInfoData,
                          twitter_id: e.target.value,
                        });
                      }}
                      value={personalInfoData?.twitter_id}
                    />
                  </div>
                  <div className="flex w-full bg-[#FFFFFF36] flex-row items-center rounded-lg">
                    <span className="px-2">
                      <IoLogoLinkedin className="text-[30px]" />
                    </span>
                    <input
                      type="text"
                      placeholder="Linkedin ID"
                      className="bg-[#FFFFFF36] border-white w-full text-[14px] font-normal leading-[16px] focus:outline-none h-11 rounded-r-lg p-2"
                      onChange={(e) => {
                        setPersonalInfoData({
                          ...personalInfoData,
                          linkedin_id: e.target.value,
                        });
                      }}
                      value={personalInfoData?.linkedin_id}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <Skills
              setSelectedSkillsID={setSelectedSkillsID}
              selectedSkillsID={selectedSkillsID}
              setSelectedSkills={setSelectedSkills}
              selectedSkills={selectedSkills}
            />
          )}
          {(step === 4 || step === 5 || step === 6 || step === 7) && (
            <AppServices
              nextStep={nextStep}
              prevStep={prevStep}
              step={step}
              setStep={setStep}
              setQuestionArray={setQuestionArray}
              questionArray={questionArray}
              setGeneralSetting={setGeneralSetting}
              generalSetting={generalSetting}
              setServices={setServices}
              services={services}
              generalSettingsId={generalSettingsId}
              setTotalQuestion={setTotalQuestion}
              totalQuestion={totalQuestion}
              setAllDaysChecked={setAllDaysChecked}
              allDaysChecked={allDaysChecked}
              setSelectedDays={setSelectedDays}
              selectedDays={selectedDays}
              setGlobalTimeRanges={setGlobalTimeRanges}
              globalTimeRanges={globalTimeRanges}
              setTimeForDays={setTimeForDays}
              timeForDays={timeForDays}
              setServiceSetting={setServiceSetting}
              serviceSetting={serviceSetting}
            />
          )}
          {step === 8 && <Finish />}
          <div className="flex justify-between mt-8">
            {step < 7 && (
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
              {step == 1 && (
                <button
                  className="bg-ask-to-mentor-primary w-[100px] h-11 flex justify-center items-center text-[14px]"
                  onClick={() => {
                    nextStep();
                    saveFormData();
                  }}
                >
                  Start
                </button>
              )}
              {step > 1 && step < 7 && (
                <button
                  className="bg-ask-to-mentor-primary w-[80px] h-11 flex justify-center items-center"
                  onClick={prevStep}
                >
                  <IoIosArrowDropleft className="text-[23px]" />
                </button>
              )}
              {step < 7 && step > 1 && (
                <button
                  className="bg-ask-to-mentor-primary w-[80px] h-11 flex justify-center items-center"
                  onClick={() => {
                    if (step == 2 || step == 3 || step == 5 || step == 6) {
                      saveFormData();
                      // nextStep();
                    } else if (step == 4) {
                      setStep(8);
                    } else {
                      nextStep();
                    }
                  }}
                >
                  <IoIosArrowDropright className="text-[23px]" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManuallySignUpForm;
