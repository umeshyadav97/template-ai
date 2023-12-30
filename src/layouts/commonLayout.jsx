import React from "react"
import { Box, Grid } from "@mui/material"
import { useStyles } from "./commonLayoutStyles"
import NavBar from "@local/components/navBar"
import SideSection from "@local/components/sideSection"
import { useRouter } from "next/router"
import AccordainSidebar from "@local/components/accordianSideSection"

function CommonLayout({ children }) {
  const styles = useStyles()
  const path = useRouter()
  const isDelivery = path.pathname.includes("/atelier/delivery")
  const isRefineFeaturesRoute = path.pathname === "/atelier/refine-features"
  const isQuizRoute =
    path.pathname === "/quiz" ||
    path.pathname === "/recommendation" ||
    path.pathname === "/contact-us"
  return (
    <Box sx={styles.main}>
      <Grid container sx={styles.divider}>
        <NavBar isQuizRoute={isQuizRoute}></NavBar>
      </Grid>

      <Grid container mt={7} sx={styles.gridContainer}>
        {!isDelivery && !isQuizRoute && (
          <Grid
            item
            md={2}
            sx={{
              ...styles.sideSectionContainer,
              display: { xs: "none", md: "block" }
            }}>
            {isRefineFeaturesRoute ? <AccordainSidebar /> : <SideSection />}
          </Grid>
        )}
        <Grid
          xs={12}
          sm={12}
          md={isDelivery || isQuizRoute ? 12 : 10}
          item
          sx={styles.childrenContainer}>
          {children}
        </Grid>
      </Grid>
    </Box>
  )
}

export default CommonLayout
