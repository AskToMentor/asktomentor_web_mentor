import React, { useState } from "react";
import "./appservices.css";
import ServicePage from "./ServicePage";
import AddService from "./addservices";
// import GeneralSetting from './GeneralSetting';
import GeneralSettings from "./GeneralSettings";
import AddQuestions from "./AddQuestions";
// import AddQuestions from './AddQuestion';

const steps = [
  {
    id: 1,
    label: "Add Service",
    value: "1",
  },
  {
    id: 2,
    label: "General Setting",
    value: "2",
  },
  {
    id: 3,
    label: "Add Question",
    value: "3",
  },
  {
    id: 4,
    label: "Service Page",
    value: "4",
  },
];

const EditAppSerivecs = ({ nextStep, prevStep, step }) => {
  console.log("step...", step);
  const [activeStep, setActiveStep] = React.useState(step);
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

  // Default Select
  const [defaultSelect, setDefaultSelect] = useState(false);
  const [defaultSelectP2B, setDefaultSelectP2B] = useState(false);

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
  const getStepContent = (step) => {
    switch (step) {
      case 4:
        return <AddService />;
      case 5:
        return (
          <GeneralSettings
            setGeneralSetting={setGeneralSetting}
            generalSetting={generalSetting}
            setServices={setServices}
            services={services}
            setServiceSetting={setServiceSetting}
            serviceSetting={serviceSetting}
            selectedDays={selectedDays}
            setDefaultSelect={setDefaultSelect}
            defaultSelect={defaultSelect}
            setDefaultSelectP2B={setDefaultSelectP2B}
            defaultSelectP2B={defaultSelectP2B}
          />
        );
      case 6:
        return (
          <AddQuestions
            setQuestionArray={setQuestionArray}
            questionArray={questionArray}
            setTotalQuestion={setTotalQuestion}
            totalQuestion={totalQuestion}
            setServiceSetting={setServiceSetting}
            serviceSetting={serviceSetting}
            selectedDays={selectedDays}
            setDefaultSelect={setDefaultSelect}
            defaultSelect={defaultSelect}
            setDefaultSelectP2B={setDefaultSelectP2B}
            defaultSelectP2B={defaultSelectP2B}
          />
        );
      case 7:
        return (
          <ServicePage
            step={step}
            generalSettingsId={generalSettingsId}
            setStep={setStep}
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
            setDefaultSelect={setDefaultSelect}
            defaultSelect={defaultSelect}
            setDefaultSelectP2B={setDefaultSelectP2B}
            defaultSelectP2B={defaultSelectP2B}
          />
        );
      default:
        return <div>Unknown step</div>;
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const activeColor = (index) =>
    step >= index ? "bg-ask-to-mentor-primary" : "bg-gray-300";

  return (
    <div className="flex justify-between flex-col w-full">
      {/* <Stepper
        alternativeLabel
        activeStep={activeStep}
        className="custom-stepper"
      >
        {steps.map((label, index) => (
          <Step key={label} onClick={() => setActiveStep(index)}>
            <StepLabel>
              <div className="text-white text-[16px] font-semibold">
                {label}
              </div>
            </StepLabel>
          </Step>
        ))}
      </Stepper> */}
      <div className="flex w-full items-center justify-between flex-row  b">
        {steps?.map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col gap-4 items-center w-full ">
              <div className="flex items-center w-full ">
                <div className={`h-fit flex flex-col items-center`}>
                  <span
                    className={`w-8 border-[2px]  border-[#124E66] h-8 flex justify-center items-center text-white rounded-full ${activeColor(
                      index + 4
                    )} `}
                  >
                    {item?.value}
                  </span>
                </div>
                <div
                  className={`w-10  mobile-lg:w-full border-[1px] border-dashed border-[#124E66] ${
                    steps?.length == index + 1 ? "hidden" : "block"
                  }`}
                ></div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="mt-4">{getStepContent(step)}</div>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      ></div>
    </div>
  );
};

export default EditAppSerivecs;
