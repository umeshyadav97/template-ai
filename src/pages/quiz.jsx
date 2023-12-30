import { Box, Typography, useMediaQuery, useTheme } from "@mui/material"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import NewQuiz from "@local/components/Quiz/NewQuiz"
import { useStyles } from "@local/styles/commonStyles"
import styles from "@local/components/Quiz/quiz.module.scss"
import Head from "next/head"
import { trackQuizPageView, trackQuizStart } from "@local/helpers/google-analytics-events"

function Quiz() {
  const classes = useStyles()
  const theme = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const textVariants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeIn"
      }
    },
    exit: { opacity: 0, y: 15 }
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.05,
        ease: "easeIn",
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    exit: { opacity: 0, y: 15 }
  }

  const handleStartClick = () => {
    setIsOpen(true)
    trackQuizStart()
  }

  const handleBackClick = () => {
    setIsOpen(false)
  }

  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    if (typeof window !== "undefined") {
      // Check if window is defined (client-side)
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })

      window.addEventListener("resize", handleResize)

      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  // Define the animate object based on the condition
  const animateObject = isOpen
    ? {
        translateY: !isMobile ? -(windowDimensions.height * 0.33) : 0,
        translateX: !isMobile ? -(windowDimensions.width * 0.2) : 0
      }
    : { translateY: 0 }

  useEffect(() => {
    trackQuizPageView()
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>Strope.AI - Get Recommendation | Estimate in 30 second</title>
      </Head>
      <Box sx={classes.main_container}>
        <motion.div
          initial={{ translateY: 0, translateX: 0 }}
          animate={animateObject}
          transition={{ duration: 0.5 }}
          style={{
            height: "100%",
            overflow: "hidden",
            transform: isMobile && "none",
            marginLeft: isOpen && !isMobile && `${windowDimensions.width * 0.2}px`
          }}>
          <Box sx={classes.main_box}>
            <Box>
              <Image
                src={"/images/quiz/avtar.svg"}
                alt="avtar"
                width={370}
                height={370}
                // style={{
                //   maxWidth: isOpen ? "30rem" : "48rem",
                //   width: "100%",
                //   maxHeight: isOpen ? "30rem" : "48rem",
                //   height: "100%"
                // }}
                style={classes?.avtar_img}
                className={`${isOpen && styles.avtar_open_res} ${styles.avtar_res}`}
              />
            </Box>
            <Box sx={classes?.text_box}>
              <motion.div variants={textVariants} initial="hidden" whileInView="show">
                <Typography variant="h4" color={"primary.tertiary"}>
                  Hello I’m Nikki!
                </Typography>
              </motion.div>
              {!isOpen && (
                <motion.div variants={textVariants} initial="hidden" whileInView="show">
                  <Typography variant="h3" color={"#fff"} sx={{ mt: "16px" }}>
                    {"Let's discover the ideal solution for building your app."}
                  </Typography>
                </motion.div>
              )}
              <motion.div variants={textVariants} initial="hidden" whileInView="show">
                <Typography variant="h6" color={"#fff"} fontWeight={"500"} sx={{ mt: "16px" }}>
                  {isOpen
                    ? "I’m here to help you build your app. Answer some questions to get started."
                    : "We'll tailor the development approach based on the specific complexity of your app.Answer 5 quick questions to get started!"}
                </Typography>
              </motion.div>
              {!isOpen && (
                <motion.div variants={buttonVariants} initial="hidden" whileInView="show">
                  <motion.button
                    whileHover={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    style={classes?.lets_button}
                    onClick={handleStartClick}>
                    {"Let's Start"}
                  </motion.button>
                </motion.div>
              )}
            </Box>
          </Box>
        </motion.div>
      </Box>
      <motion.div
        initial={{ translateY: isOpen ? "100%" : "0%", opacity: isOpen ? 1 : 0 }}
        animate={{ translateY: isOpen ? "0%" : "100%", opacity: isOpen ? 1 : 0 }}
        exit={{ translateY: isOpen ? "100%" : "0%", opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{
          ...classes?.content_div,
          height: isMobile ? `${windowDimensions.height - 75}px` : "67vh"
        }}
        className={styles.content_div}>
        {/* Content of the opened box */}
        <Box>
          <NewQuiz handleClose={handleBackClick} />
        </Box>
      </motion.div>
    </React.Fragment>
  )
}

export default Quiz
