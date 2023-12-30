import { Button, Grid, Stack, Typography } from "@mui/material"
import React from "react"
import { useStyles } from "./CompareScreenLayout.js"
import ListIcon from "@local/assets/icons/listIcon.svg"

import ImageFrame from "@local/assets/images/ComponentImage/ImageFrame.svg"
import DesktopUI from "@local/assets/images/ComponentImage/desktopUI.svg"
import Image from "next/image"

const content = [
  " User-centric interfaces for effortless experiences.",
  "Leveraging the latest technologies for peak performance.",
  "Grow your app as your business expands."
]

function TopContainer() {
  const classes = useStyles()

  return (
    <Grid container>
      <Stack sx={classes.outer_container}>
        <Typography variant="h11">Why Strope.ai?</Typography>
        <Typography
          sx={{ marginTop: "2.4rem", width: "50rem", color: "#475467", lineHeight: "2.8rem" }}
          variant="p4">
          Bringing cutting-edge design and seamless functionality together to deliver apps that
          elevate your business.
        </Typography>
        <Grid sx={{ marginTop: "4rem" }} item>
          <Button
            type="submit"
            variant="contained"
            sx={{ padding: "11px 82px", color: "#fff", backgroundColor: "#000" }}>
            Start Your Journey
          </Button>
          <Button
            type="submit"
            sx={{
              padding: "11px 82px",
              color: "#000",
              border: "2px solid #000",
              marginLeft: "2.4rem"
            }}>
            See Solutions and Pricing
          </Button>
        </Grid>
      </Stack>
      <Grid
        container
        item
        sx={{
          marginBottom: "5.6rem",
          backgroundColor: "#F8E1C1",
          minWidth: "95vw",
          height: "200px"
        }}>
        <Grid
          sx={{
            display: "flex",
            alignItems: "flex",
            justifyContent: "center",
            flexDirection: "column"
          }}
          item
          xs={6}>
          {content.map((item, index) => {
            return (
              <Grid
                key={index}
                sx={{
                  marginLeft: "9.2rem",
                  display: "flex",
                  alignItems: "center",
                  marginTop: "1.6rem"
                }}>
                <Image
                  src={ListIcon}
                  alt="view"
                  style={{
                    height: "2rem",
                    width: "2rem",
                    marginRight: "1rem"
                  }} // Adjust position as needed
                />
                <Typography variant="p4">{item}</Typography>
              </Grid>
            )
          })}
        </Grid>
        <Grid item sx={{ position: "relative" }}>
          <Image
            src={ImageFrame}
            alt="view"
            style={{
              position: "absolute",
              top: "-180%",
              left: 200,
              height: "60rem"
              // width: "60rem"
            }}
          />
          <Image
            src={DesktopUI}
            alt="view"
            style={{
              position: "absolute",
              top: -280,
              left: 100,
              height: "60rem",
              width: "60rem"
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default TopContainer
