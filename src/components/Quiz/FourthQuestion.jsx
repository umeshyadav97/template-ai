import { Box, Typography } from "@mui/material"
import React, { useEffect } from "react"
import { useStyles } from "./quizStyles"
import { motion } from "framer-motion"
import { buttonVariants, textVariants } from "@local/constants/animationVariants"
import { AmountWithSymboal } from "@local/helpers/currencyHelper/currency"
import styles from "./quiz.module.scss"
import { trackQuizStep } from "@local/helpers/google-analytics-events"

function FourthQuestion({ handleSelect }) {
  const classes = useStyles()
  const question4 = "What is your estimated budget for the app?"
  const optionArray = [
    {
      icon: "/images/quiz/dollorIcon.svg",
      step: "A",
      name: `Less than ${AmountWithSymboal(500000)}`
    },
    {
      icon: "/images/quiz/dollorIcon.svg",
      step: "B",
      name: `${AmountWithSymboal(500000)} to ${AmountWithSymboal(800000)}`
    },
    {
      icon: "/images/quiz/dollorIcon.svg",
      step: "C",
      name: `${AmountWithSymboal(800000)} - ${AmountWithSymboal(1500000)}`
    },
    {
      icon: "/images/quiz/dollorIcon.svg",
      step: "D",
      name: `${AmountWithSymboal(1500000)} +`
    },
    {
      icon: "/images/quiz/dollorIcon.svg",
      step: "E",
      name: "Not Decided/Flexible"
    }
  ]

  useEffect(() => {
    trackQuizStep(4)
  }, [])
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
                {question4}
              </Typography>
            </Box>
          </motion.div>
          <Box sx={classes?.category_container}>
            {optionArray.map((item, index) => (
              <motion.div
                className={`${styles.fund_strategy} ${styles.fund_strategy_height}`}
                variants={buttonVariants}
                style={{ ...classes?.funding_box, ...classes?.funding_box_height }}
                whileHover={classes?.hover_category_box}
                initial="hidden"
                whileInView="show"
                onClick={() => handleSelect(4, question4, item?.name)}
                key={index}
                viewport={{ once: true }}>
                <Box sx={classes?.step_box}>
                  <Typography variant="h9" color={"text.green2"}>
                    {item?.step}
                  </Typography>
                  {/* <Image src={item?.icon} height={48} width={48} alt={item?.name} /> */}
                </Box>
                <Typography color={"text.black5"} variant="c1">
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

export default FourthQuestion
