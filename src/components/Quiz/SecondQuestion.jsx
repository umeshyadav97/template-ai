import { Box, Typography } from "@mui/material"
import React, { useEffect } from "react"
import { useStyles } from "./quizStyles"
import Image from "next/image"
import { motion } from "framer-motion"
import { buttonVariants, textVariants } from "@local/constants/animationVariants"
import styles from "./quiz.module.scss"
import { trackQuizStep } from "@local/helpers/google-analytics-events"
function SecondQuestion({ handleSelect, selectedItem }) {
  const classes = useStyles()
  useEffect(() => {
    trackQuizStep(2)
  }, [])

  const question2 = "Which option best describes your app’s goal?"
  return (
    <Box sx={classes?.main_box}>
      <motion.div
        initial={{ width: 0 }}
        animate={{
          width: "100%",
          transition: {
            duration: 0.07
          }
        }}
        exit={{
          x: typeof window !== "undefined" && window?.innerWidth,
          transition: { duration: 5 }
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
                {question2}
              </Typography>
            </Box>
          </motion.div>
          <Box sx={classes?.category_container}>
            <motion.div
              className={styles.app_goal}
              variants={buttonVariants}
              style={classes?.category_option_box}
              whileHover={classes?.hover_category_box}
              initial="hidden"
              whileInView="show"
              onClick={() =>
                handleSelect(2, question2, "My Main goal of my app is selling product")
              }
              viewport={{ once: true }}>
              <Box sx={classes?.inner_Category_box}>
                <Box>
                  <Image src={selectedItem?.icon_url} height={48} width={48} alt={"question"} />
                </Box>
                <Typography variant="c1" color={"text.black5"} sx={{ textAlign: "center" }}>
                  My Main goal of my app is selling product
                </Typography>
              </Box>
            </motion.div>
            <motion.div
              className={styles.app_goal}
              variants={buttonVariants}
              style={classes?.category_option_box}
              whileHover={classes?.hover_category_box}
              initial="hidden"
              whileInView="show"
              onClick={() =>
                handleSelect(
                  2,
                  question2,
                  "My main goal of my app is different and not just selling product"
                )
              }
              viewport={{ once: true }}>
              <Box sx={classes?.inner_Category_box}>
                <Box>
                  <Image
                    src={"/images/quiz/questionIcon.svg"}
                    height={48}
                    width={48}
                    alt={"question"}
                  />
                </Box>
                <Typography variant="c1" color={"text.black5"} sx={{ textAlign: "center" }}>
                  My main goal of my app is different and not just selling product
                </Typography>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </motion.div>
    </Box>
  )
}

export default SecondQuestion
