import { Grid, Stack, Typography } from "@mui/material"
import React from "react"
import { useStyles } from "./CompareScreenLayout.js"
import Image from "next/image.js"
import TickIcon from "@local/assets/icons/tick.svg"
import CrossIcon from "@local/assets/icons/cancel.svg"
import BusinessType from "./BusinessType.jsx"
import GotQuestions from "../Home/gotQuestions.js"

const totalElement = [
  { 0: [true, true, true, true, true, true, true] },
  { 1: [false, false, false, false, true, true, true] },
  { 2: [false, false, true, true, false, false, true] }
]

const heading = ["Strope.ai", "Software development agencies", "Low Code No Code App Builders"]

const stropeBenefit = [
  "Guaranteed pricing",
  "Dedicated project manager",
  "Transparent dev process",
  "3 Years Free App maintenance",
  "Vendor lock in",
  "Own the code",
  "Hosting options"
]

function AboutStrope() {
  const classes = useStyles()
  return (
    <>
      <Grid container sx={classes.about_container}>
        <Grid
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
          <Typography variant="h11">Why Choose Strope.ai for Your App Development</Typography>
        </Grid>
        <Grid
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
          <Typography
            sx={{ marginTop: "1.2rem", color: "#475467", lineHeight: "2.8rem" }}
            variant="h6">
            Experience the Difference – Where Innovation Meets Excellence.
          </Typography>
        </Grid>
        <Grid xs={12} item container justifyContent="space-between" sx={{ marginTop: "6.1rem" }}>
          {totalElement?.map((element, indx) => {
            return (
              <Grid
                key={indx}
                xs={3.5}
                item
                container
                sx={{
                  border:
                    indx == 0 ? "1.203px solid #E9D4B8" : "1px solid var(--Gray-200, #EAECF0)",
                  padding: "3rem 2rem",
                  backgroundColor: indx == 0 ? "#FFFAF5" : null,
                  borderRadius: "2rem"
                }}>
                <Grid xs={12} sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      backgroundColor: indx == 0 ? "#C28C7E" : null,
                      padding: "1rem",
                      color: indx == 0 ? "#FFF" : "#C28C7E",
                      borderRadius: "2rem"
                    }}
                    variant="p5">
                    {heading[indx]}
                  </Typography>
                </Grid>
                <Stack>
                  {stropeBenefit.map((item, index) => {
                    return (
                      <Grid
                        key={index}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "1.6rem"
                        }}>
                        <Image
                          src={element[indx][index] ? TickIcon : CrossIcon}
                          alt="view"
                          style={{
                            height: "2rem",
                            width: "2rem",
                            marginRight: "1rem"
                          }}
                        />
                        <Typography variant="p6">{item}</Typography>
                      </Grid>
                    )
                  })}
                </Stack>
              </Grid>
            )
          })}
        </Grid>
        <Grid
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10rem"
          }}>
          <Typography variant="h11">From Concept to Creation</Typography>
        </Grid>
        <Grid item xs={12}>
          <BusinessType />
        </Grid>
      </Grid>
      <GotQuestions />
    </>
  )
}

export default AboutStrope
