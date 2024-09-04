import React from 'react';
import './appservices.css';
import ServicePage from './ServicePage';
import AddService from './AddServices';
import GeneralSetting from './GeneralSetting';
import AddQuestion from './AddQuestion';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';

const steps = ['Add Service', 'General Setting', 'Add Question', 'Service Page'];

function AppServices() {
  const [activeStep, setActiveStep] = React.useState(0);

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <AddService />;
      case 1:
        return <GeneralSetting />;
      case 2:
        return <AddQuestion />;
      case 3:
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

  return (
    <div>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        className="custom-stepper"
      >
        {steps.map((label, index) => (
          <Step  key={label} onClick={() => setActiveStep(index)}>
            <StepLabel ><div className='inner-step'>{label}</div></StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {getStepContent(activeStep)}
      </div>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
        <Button
          className="custom-button"
          disabled={activeStep === 0}
          onClick={handleBack}
        >
          Back
        </Button>
        <Button
          className="custom-button"
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default AppServices;
