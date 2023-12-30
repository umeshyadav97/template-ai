import { Typography, useMediaQuery } from "@mui/material"
import React, { useEffect } from "react"
import SectionContainer from "../sectionContainer/index"

const useStyles = () => {
  const matches = useMediaQuery("(max-width:1440px)")
  useEffect(() => {}, [matches])
  return {
    headingBanner: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingLeft: matches ? "30px" : "calc(50vw - 730px)",
      paddingRight: "30px"
    },
    imageBg: {
      width: "100%"
    }
  }
}

function Banner() {
  const styles = useStyles()
  return (
    <div style={{ marginTop: "-64px" }}>
      <SectionContainer sx={{ paddingTop: "64px" }}>
        <div style={styles.headingBanner}>
          <div>
            <Typography variant="h2" className="m-0">
              Lorem Ipums
            </Typography>
          </div>
          <div style={{ marginTop: "20px" }}>
            <Typography sx={{ opacity: 0.5 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nunc finibus,
              congue dui non, accumsan sapien.
            </Typography>
          </div>
        </div>
        <div></div>
      </SectionContainer>
    </div>
  )
}

export default Banner
