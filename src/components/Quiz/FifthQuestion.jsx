import { Box, Typography } from "@mui/material"
import React, { useEffect } from "react"
import { useStyles } from "./quizStyles"
import Image from "next/image"
import { motion } from "framer-motion"
import { buttonVariants, textVariants } from "@local/constants/animationVariants"
import styles from "./quiz.module.scss"
import { trackQuizStep } from "@local/helpers/google-analytics-events"

function FifthQuestion({ handleSelect }) {
  const classes = useStyles()

  useEffect(() => {
    trackQuizStep(5)
  }, [])

  const question5 = "What is your desired timeline for the app completion?"
  return (
    <Box sx={classes?.main_box}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{
          x: typeof window !== "undefined" && window?.innerWidth,
          transition: { duration: 0.5 }
        }}>
        <Box sx={classes?.inner_main_box}>
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography
                variant="h13"
                color={"text.black3"}
                sx={{ textAlign: "center", fontFamily: "Inter Medium" }}>
                {question5}
              </Typography>
            </Box>
          </motion.div>
          <Box sx={classes?.category_container}>
            <motion.div
              className={`${styles.completion_timeline} ${styles.completion_timeline_height}`}
              variants={buttonVariants}
              style={classes?.option_box}
              whileHover={classes?.hover_category_box}
              initial="hidden"
              whileInView="show"
              onClick={() =>
                handleSelect(5, question5, `I'm looking to launch my app within the next month`)
              }
              viewport={{ once: true }}>
              <Box>
                <Image src={"/images/quiz/time_1.svg"} height={48} width={48} alt={"question"} />
              </Box>
              <Typography
                variant="c1"
                fontWeight={500}
                color={"text.black5"}
                sx={{ textAlign: "center" }}>
                {"I'm looking to launch my app within the next month"}
              </Typography>
            </motion.div>
            <motion.div
              className={`${styles.completion_timeline} ${styles.completion_timeline_height}`}
              variants={buttonVariants}
              style={{ ...classes?.option_box, ...classes?.option_box_height }}
              whileHover={classes?.hover_category_box}
              initial="hidden"
              whileInView="show"
              onClick={() =>
                handleSelect(
                  5,
                  question5,
                  `I'm willing to consider and discuss a range of timelines that align with the project's needs`
                )
              }
              viewport={{ once: true }}>
              <Box>
                <Image src={"/images/quiz/time_1.svg"} height={48} width={48} alt={"question"} />
              </Box>
              <Typography
                variant="c1"
                fontWeight={500}
                color={"text.black5"}
                sx={{ textAlign: "center" }}>
                {
                  "I'm willing to consider and discuss a range of timelines that align with the project's needs"
                }
              </Typography>
            </motion.div>
          </Box>
        </Box>
      </motion.div>
    </Box>
  )
}

export default FifthQuestion
