import { Box, Typography } from "@mui/material"
import React, { useEffect } from "react"
import { useStyles } from "./quizStyles"
import Image from "next/image"
import { motion } from "framer-motion"
import { textVariants, buttonVariants } from "@local/constants/animationVariants"
import styles from "./quiz.module.scss"
import { trackQuizStep } from "@local/helpers/google-analytics-events"
function FirstQuestion({ handleSelect, categoryData }) {
  const classes = useStyles()

  useEffect(() => {
    trackQuizStep(1)
  }, [])

  const question1 = "What category best describes your app?"
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
                {question1}
              </Typography>
            </Box>
          </motion.div>
          <Box sx={classes?.category_container_type}>
            {categoryData?.map((item, index) => (
              <motion.div
                className={styles.motion}
                variants={buttonVariants}
                style={classes?.category_box}
                whileHover={classes?.hover_category_box}
                initial="hidden"
                whileInView="show"
                key={index}
                onClick={() => handleSelect(1, question1, item)}
                viewport={{ once: true }}>
                <Box>
                  <Image src={item?.icon_url} height={36} width={36} alt={item?.name} />
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

export default FirstQuestion
