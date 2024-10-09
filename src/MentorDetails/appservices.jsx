import React from "react";
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
    value: "a",
  },
  {
    id: 2,
    label: "General Setting",
    value: "b",
  },
  {
    id: 3,
    label: "Add Question",
    value: "c",
  },
  {
    id: 4,
    label: "Service Page",
    value: "d",
  },
];
// "Add Service",
//   "General Setting",
//   "Add Question",
//   "Service Page",

const AppServices = ({
  nextStep,
  prevStep,
  step,
  setStep,
  setQuestionArray,
  questionArray,
  setGeneralSetting,
  generalSetting,
  setServices,
  services,
  generalSettingsId,
  setTotalQuestion,
  totalQuestion,
  setAllDaysChecked,
  allDaysChecked,
  setSelectedDays,
  selectedDays,
  setGlobalTimeRanges,
  globalTimeRanges,
  setTimeForDays,
  timeForDays,
  setServiceSetting,
  serviceSetting,
}) => {
  console.log("step...", step);
  const [activeStep, setActiveStep] = React.useState(step);
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
    <div className="flex justify-between flex-col">
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
      <div className="flex items-start flex-row ml-7">
        {steps?.map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col gap-4 items-center ">
              <div className="flex items-center">
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
                  className={`w-10  mobile-lg:w-[182px] border-[1px] border-dashed border-[#124E66] ${
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

export default AppServices;
