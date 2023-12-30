import { Box, Typography, useMediaQuery, useTheme } from "@mui/material"
import React, { useState } from "react"
import { useStyles } from "./StepperStyles"
import Image from "next/image"
function Stepper({ stepArray }) {
  const classes = useStyles()
  const theme = useTheme()
  const isTabScreen = useMediaQuery(theme.breakpoints.down("md"))
  const [currentStep, setCurrentStep] = useState(1)

  const handleStepClick = (step) => {
    setCurrentStep(step)
  }

  const calculateProgress = () => {
    return (currentStep / stepArray?.length) * 100 // Assuming there are 4 steps
  }

  return (
    <Box sx={classes?.stepper_container}>
      <Box sx={classes?.title_box}>
        <Typography variant="h2">Turn your idea to app or website in 5 minutes</Typography>
        <Typography variant="h6" color={"text.gray_600"}>
          {
            "Achieve maximum potential with minimum effort. Convert your website to Android & iOS app in three simple steps."
          }
        </Typography>
      </Box>
      <Box sx={classes?.step_container}>
        <Box sx={classes?.step_index_container}>
          {stepArray?.map((item, index) => (
            <Box
              key={index}
              sx={classes?.step_index_box}
              onClick={() => handleStepClick(index + 1)}>
              <Box sx={classes?.step_circle_box}>
                <Typography variant="h9" color={"text.primary_500"}>
                  {index + 1}
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" fontFamily={"Inter Medium"}>
                  {item?.title}
                </Typography>
                <Typography variant="h12" color={"text.gray_600"} mt={"10px"} component={"div"}>
                  {item?.content}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <Box sx={classes?.progress_box}>
          <Box
            style={{
              height: isTabScreen ? "3px" : `${calculateProgress()}%`,
              width: isTabScreen ? `${calculateProgress()}%` : "3px",
              backgroundColor: "#000",
              transition: isTabScreen ? "width 0.3s ease" : "height 0.3s ease"
            }}
          />
        </Box>
        <Box sx={classes?.img_container}>
          <Box>
            <Image
              src={stepArray[currentStep - 1].imgURL}
              alt="step_img"
              height={462}
              width={724}
              style={classes?.img}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Stepper
