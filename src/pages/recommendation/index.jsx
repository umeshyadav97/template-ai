import { Box, Button, Grid, Typography } from "@mui/material"
import Image from "next/image"
import React, { useEffect } from "react"
import EndingIcon from "@local/assets/icons/ending-icon.svg"
import StarIcon from "@local/assets/icons/star.svg"
import Search from "@local/assets/icons/searchDemo.svg"
import { useEndingPageController } from "@local/controllers/privateControllers/endingPage.controller"
import { useStyles } from "@local/styles/endingPage/endingPageStyles"
import RightDrawer from "@local/components/ResultScreen/RightDrawer"
import Head from "next/head"
import { trackRecommendationPageView } from "@local/helpers/google-analytics-events"

const ResultScreen = () => {
  const {
    data,
    handleNavigate,
    visibleWords,
    isDrawerOpen,
    handleCloseDrawer,
    handleOpenDrawer,
    formik,
    isLoading
  } = useEndingPageController()
  const classes = useStyles()

  useEffect(() => {
    trackRecommendationPageView()
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>Strope.AI - App Recommendation</title>
      </Head>
      {isLoading && (
        <Box>
          <Grid container sx={classes?.main_container}>
            <Grid item xs={12} md={6}>
              <Box sx={classes?.star_box}>
                <Image src={StarIcon} alt="icon" width={19} height={19} />
                <Typography sx={classes.colorSection}>{visibleWords.join(" ")}</Typography>
              </Box>
              <Box sx={{ mt: "2rem" }}>
                <Typography sx={classes.customised}>Customised Apps</Typography>
              </Box>
              <Box sx={{ mt: "0.8rem" }}>
                <Typography sx={classes.title}>Pay by feature</Typography>
              </Box>
              <Box sx={{ mt: "0.8rem" }}>
                <Typography sx={classes.desc} color={"text.gray4"}>
                  Save valuable time with templates, while seamlessly integrating exclusive features
                  tailored to your business needs.
                </Typography>
              </Box>

              <Grid item>
                <Grid container pt={3}>
                  {data.map((item, index) => (
                    <Grid item key={index} xs={12} md={6} sm={6} pb={4}>
                      <Grid container alignItems="flex-start" spacing={1}>
                        <Grid item xs={1} sx={{ marginRight: "15px" }}>
                          <Image src={Search} alt="" />
                        </Grid>
                        <Grid item xs={10}>
                          <Grid item>
                            <Typography sx={classes.title}>{item.title}</Typography>
                          </Grid>
                          <Grid item xs={10} sx={{ mt: "0.6rem" }}>
                            <Typography sx={classes.desc} color={"text.gray4"}>
                              {item.description}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              <Grid item pt={3}>
                <Grid container spacing={2}>
                  <Grid item>
                    <Button sx={classes.contactBtn} onClick={handleOpenDrawer}>
                      <Typography sx={classes.build}>Contact Us</Typography>
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button onClick={handleNavigate} color="primary" sx={classes.buildBtn}>
                      <Typography sx={classes.build}>Build Product</Typography>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={6} md={6} display="flex" justifyContent="flex-end">
              <Image
                src={EndingIcon}
                alt="icon"
                width={591}
                height={522}
                style={classes?.mob_img}
                // className={styles.imageContainer}
              />
            </Grid>
          </Grid>
        </Box>
      )}
      <RightDrawer
        isDrawerOpen={isDrawerOpen}
        handleCloseDrawer={handleCloseDrawer}
        formik={formik}
      />
    </React.Fragment>
  )
}

export default ResultScreen
