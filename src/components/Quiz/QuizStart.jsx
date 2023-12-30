import { Box, Typography } from "@mui/material"
import Image from "next/image"
import React from "react"
import { useStyles } from "./quizStyles"
import BackGround from "@local/assets/icons/background.svg"

const QuizStart = () => {
  const classes = useStyles()
  return (
    <Box>
      <Box sx={{ p: "0 3rem" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h9" color={"text.green2"}>
            30 Sec. 5 Quick Questions
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: "1.6rem" }}>
          <Typography variant="h3" color={"text.black3"}>
            Let’s find your perfect app-building solution
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: "1.6rem" }}>
          <Typography variant="p4" lineHeight={"2.8rem"} color={"background.gray2"}>
            Depending on the complexity of your app. You have different development options.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: "1.6rem" }}>
          <Image src={BackGround} alt="bg_img" style={classes?.bg_img} />
        </Box>
      </Box>
    </Box>
  )
}

export default QuizStart
