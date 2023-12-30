import { Box, Button, Typography } from "@mui/material"
import React from "react"
import { useStyles } from "./quizStyles"
import FirstQuestion from "./FirstQuestion"
import SecondQuestion from "./SecondQuestion"
import ThirdQuestion from "./ThirdQuestion"
import FourthQuestion from "./FourthQuestion"
import FifthQuestion from "./FifthQuestion"
import QuizStart from "./QuizStart"
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft"
import { useQuizController } from "@local/controllers/privateControllers/quiz.controller"
function Quiz() {
  const classes = useStyles()
  const {
    step,
    selectedItem,
    handleItem,
    handleNext,
    handlePrev,
    handleStepClick,
    jsonData,
    handleSubmit,
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
    <Box sx={classes?.quiz_box}>
      <Box sx={[classes?.inner_box, step === 0 && classes?.inner_flex]}>
        {step !== 0 && (
          <Box sx={classes?.steps_container}>
            <Box sx={classes?.back_box} onClick={handlePrev}>
              <Box>
                <KeyboardArrowLeftIcon />
              </Box>
              <Typography variant="p1">Back</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>{renderSteps()}</Box>
          </Box>
        )}
        {step === 0 && <QuizStart />}
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
        {step === 0 && (
          <Box sx={classes?.button_box}>
            <Button variant="contained" sx={classes?.next_button} onClick={handleNext}>
              Let’s Go
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default Quiz
