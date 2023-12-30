import React from "react"
import { Box, Grid } from "@mui/material"
import { useStyles } from "./layoutStyles"
import NavBar from "./navbar"
import Footer from "@local/components/footer"

function HomeLayout({ children }) {
  const styles = useStyles()
  return (
    <Box sx={styles.main}>
      <Grid container>
        <NavBar />
      </Grid>
      <Grid container>
        <Grid xs={12} item>
          {children}
        </Grid>
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Box>
  )
}

export default HomeLayout
