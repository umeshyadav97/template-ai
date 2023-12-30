import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material"
import React from "react"
import { useStyles } from "./quizStyles"
import FirstQuestion from "./FirstQuestion"
import SecondQuestion from "./SecondQuestion"
import ThirdQuestion from "./ThirdQuestion"
import FourthQuestion from "./FourthQuestion"
import FifthQuestion from "./FifthQuestion"
// import QuizStart from "./QuizStart"
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft"
import { useQuizController } from "@local/controllers/privateControllers/quiz.controller"
import { AnimatePresence } from "framer-motion"
import Restart from "@local/assets/icons/restart.svg"
import Image from "next/image"

function NewQuiz({ handleClose }) {
  const classes = useStyles()
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))
  const {
    step,
    selectedItem,
    handleItem,
    handleNext,
    handlePrev,
    handleStepClick,
    jsonData,
    handleSubmit,
    handleRestart,
    categoryData
  } = useQuizController()

  const renderSteps = () => {
    const steps = [1, 2, 3, 4, 5]
    return steps.map((item, index) => (
      <Box
        key={index}
        sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Box
          onClick={() => index + 1 <= step && handleStepClick(index + 1)}
          sx={[classes.step, index + 1 <= step && classes.activeStep]}>
          <Typography variant="h7">{index + 1 <= step && item}</Typography>
        </Box>
        {index < steps.length - 1 && index + 1 >= step && (
          <Box sx={[classes?.border_line, index + 1 === step && classes?.active_line]}></Box>
        )}
        {/* {index < steps.length - 1 && <div style={classes.line}></div>} */}
      </Box>
    ))
  }

  return (
    <Box>
      <Box sx={{ marginTop: { xs: "4rem", md: "2rem" } }}>
        {step !== 0 && (
          <Box>
            <Box sx={classes?.steps_container}>
              <Box sx={classes?.back_box}>
                {!isSmallScreen ? (
                  <Button
                    sx={classes?.button_style}
                    disableRipple
                    onClick={step === 1 ? handleClose : handlePrev}>
                    <Box sx={{ display: "flex" }}>
                      <KeyboardArrowLeftIcon />
                    </Box>
                    Back
                  </Button>
                ) : (
                  <Box
                    sx={{ display: "flex", alignItems: "center" }}
                    onClick={step === 1 ? handleClose : handlePrev}>
                    <KeyboardArrowLeftIcon
                      sx={{
                        width: "4rem",
                        height: "4rem"
                      }}
                    />
                  </Box>
                )}
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>{renderSteps()}</Box>
              {step !== 1 && (
                <Box sx={classes?.restart_box}>
                  {!isSmallScreen ? (
                    <Button sx={classes?.button_style} onClick={handleRestart}>
                      Restart
                    </Button>
                  ) : (
                    <Image src={Restart} alt="restart" onClick={handleRestart} />
                  )}
                </Box>
              )}
            </Box>
            <Box></Box>
          </Box>
        )}
        <AnimatePresence>
          {step === 1 && (
            <FirstQuestion
              jsonData={jsonData}
              handleSelect={handleItem}
              categoryData={categoryData}
            />
          )}
          {step === 2 && <SecondQuestion handleSelect={handleNext} selectedItem={selectedItem} />}
          {step === 3 && <ThirdQuestion handleSelect={handleNext} />}
          {step === 4 && <FourthQuestion handleSelect={handleNext} />}
          {step === 5 && <FifthQuestion handleSelect={handleSubmit} />}
        </AnimatePresence>
      </Box>
    </Box>
  )
}

export default NewQuiz
