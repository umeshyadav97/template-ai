import React, { useEffect } from "react"
import Head from "next/head"
import { Grid, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material"
import styles from "@local/styles/RefineFeature.module.css"
import Image from "next/image"
import { useRefineFeatureController } from "@local/controllers/privateControllers/refinefeature.controller"
import MobileIcon from "@local/assets/icons/mobileIcon.svg"
import DesktopIcon from "@local/assets/icons/desktopIcon.svg"
import WebPage from "@local/components/webpage"
import MobileView from "@local/components/mobileView"
import SideView from "@local/components/sideView"
import SelectedCardData from "@local/components/selectCardData"
import { trackFeaturesPageView } from "@local/helpers/google-analytics-events"

function About() {
  const {
    selectedButton,
    handleButtonChange,
    isOpen,
    handleClose,
    handleOpen,
    handleNavigate,
    features,
    selectedValue
  } = useRefineFeatureController()

  useEffect(() => {
    trackFeaturesPageView()
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>Strope.AI - Refine Features</title>
      </Head>
      <Grid container>
        <Grid item xs={8}>
          <Grid container xs={12} className={styles.gridDivider}>
            <Grid item xs={6}>
              <Typography variant="h4" className={styles.headingText}>
                Feature Preview
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              pr={3}
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
              pt={1}>
              <ToggleButtonGroup
                value={selectedButton}
                exclusive
                onChange={handleButtonChange}
                aria-label="button group">
                <ToggleButton value="app" aria-label="all">
                  <Image src={MobileIcon} alt="mobile icon preview" />
                </ToggleButton>
                <ToggleButton value="web" aria-label="all">
                  <Image src={DesktopIcon} alt="web icon preview" />
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>
          </Grid>
          <Grid item pl={4} pt={4}>
            {selectedButton === "app" ? (
              <Grid item>
                <MobileView
                  isOpen={isOpen}
                  handleClose={handleClose}
                  handleOpen={handleOpen}
                  features={features}
                />
              </Grid>
            ) : (
              <Grid item>
                <WebPage
                  isOpen={isOpen}
                  handleClose={handleClose}
                  handleOpen={handleOpen}
                  features={features}
                />
              </Grid>
            )}
          </Grid>
        </Grid>
        <Grid item xs={4} pt={3} pl={1} spacing={2} className={styles.container}>
          <SideView selectedButton={selectedButton} features={features} />
        </Grid>
        <SelectedCardData
          buttonName={"Plan Delivery"}
          cardData={selectedValue}
          handleChnage={handleNavigate}
        />
      </Grid>
    </React.Fragment>
  )
}

export default About
