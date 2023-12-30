import { Box, Typography } from "@mui/material"
import React, { useEffect } from "react"
import { useStyles } from "./quizStyles"
import Image from "next/image"
import { motion } from "framer-motion"
import { buttonVariants, textVariants } from "@local/constants/animationVariants"
import styles from "./quiz.module.scss"
import { trackQuizStep } from "@local/helpers/google-analytics-events"
function ThirdQuestion({ handleSelect }) {
  const classes = useStyles()

  const optionArray = [
    {
      icon: "/images/quiz/funding_2.svg",
      name: "I don’t currently have a budget"
    },
    {
      icon: "/images/quiz/funding_2.svg",
      name: "I am using budget from Investor"
    },
    {
      icon: "/images/quiz/funding_3.svg",
      name: "I am using budget from savings"
    },
    {
      icon: "/images/quiz/funding_4.svg",
      name: "Other"
    }
  ]

  useEffect(() => {
    trackQuizStep(3)
  }, [])

  const question3 = "What is your funding strategy for the app?"
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
                {question3}
              </Typography>
            </Box>
          </motion.div>
          <Box sx={classes?.category_container}>
            {optionArray.map((item, index) => (
              <motion.div
                className={styles.fund_strategy}
                variants={buttonVariants}
                style={classes?.funding_box}
                whileHover={classes?.hover_category_box}
                initial="hidden"
                whileInView="show"
                onClick={() => handleSelect(3, question3, item?.name)}
                key={index}
                viewport={{ once: true }}>
                <Box>
                  <Image src={item?.icon} height={48} width={48} alt={item?.name} />
                </Box>
                <Typography color={"text.black5"} variant="c1" sx={{ textAlign: "center" }}>
                  {item?.name}
                </Typography>
              </motion.div>
            ))}
          </Box>
        </Box>
      </motion.div>
    </Box>
  )
}

export default ThirdQuestion
