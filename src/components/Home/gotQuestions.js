import { Button, Grid, Typography, useTheme } from "@mui/material"
import React from "react"
import styles from "@local/styles/Home.module.css"
import Image from "next/image"
import Questions from "@local/assets/icons/got-questions.svg"

const GotQuestions = () => {
  const theme = useTheme()
  return (
    <React.Fragment>
      <Grid item className={styles.questions_grid}>
        <Grid
          container
          sx={{
            padding: "20px 60px",
            backgroundColor: theme.palette.secondary.secondary,
            borderRadius: "30px"
          }}>
          <Grid item xs={12} md={6} display="flex" flexDirection="column" justifyContent="center">
            <Grid item>
              <Typography variant="h2">Got Questions?</Typography>
            </Grid>
            <Grid item mt={2}>
              <Typography className={styles.questions_sub_header}>
                Our FAQ section is here to help you understand the ins and outs of marketplace
                operations.
              </Typography>
            </Grid>
            <Grid item mt={5}>
              <Button className={styles.primary_button}>Read FAQ&apos;s</Button>
            </Grid>
          </Grid>
          <Grid item xs={6} sx={{ display: { md: "flex", xs: "none" } }}>
            <Image src={Questions} alt="ques" style={{ width: "100%", height: "100%" }} />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default GotQuestions
