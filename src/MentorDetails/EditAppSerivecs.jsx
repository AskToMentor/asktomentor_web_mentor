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
  const getStepContent = (step) => {
    switch (step) {
      case 4:
        return <AddService />;
      case 5:
        return <GeneralSettings />;
      case 6:
        return <AddQuestions />;
      case 7:
        return <ServicePage />;
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
