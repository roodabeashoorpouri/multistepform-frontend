import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import BackgroundImage from "../assets/images/bg-sidebar-desktop.svg";
import Step from "@mui/material/Step";

const steps = [
  {
    label: "YOUR INFO",
  },
  {
    label: "SELECT PLAN",
  },
  {
    label: "ADD-ONS",
  },
  {
    label: "SUMMARY",
  },
];

function Navbar() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundRepeat: "no-repeat",
          height: "560px",
          width: "385px",
          borderRadius: "10px",
        }}
      >
        <Stepper
          activeStep={activeStep}
          orientation='vertical'
          sx={{
            "& .MuiStepConnector-line": {
              display: "none",
            },
          }}
        >
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={index === 0 ? <Typography>STEP 1</Typography> : null}
              >
                {step.label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ mb: 2 }}>
          <div>
            {activeStep === steps.length - 1 ? "Finish" : "Continue"}

            {activeStep === steps.length && (
              <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>All steps completed - you're finished</Typography>
              </Paper>
            )}
          </div>
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
