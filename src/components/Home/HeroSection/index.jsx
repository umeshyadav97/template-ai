import { Box, Typography } from "@mui/material"
import React from "react"
import { useStyles } from "./HeroSectionStyles"
import Image from "next/image"
function HeroSection() {
  const classes = useStyles()
  return (
    <Box sx={classes?.hero_container}>
      <Box sx={classes?.title_box}>
        <Box>
          <Typography variant="h2">
            Build an app & website in minutes with the{" "}
            <Typography sx={classes?.best_text} component={"span"}>
              Best
            </Typography>{" "}
            builder with minimum effort{" "}
            <span style={{ display: "inline", textAlign: "center", verticalAlign: "middle" }}>
              <Image
                src={"/images/icons/rightArrow.svg"}
                alt="right_img"
                height={66}
                width={66}
                style={classes?.arrow_icon}
              />
            </span>
          </Typography>
        </Box>
        {/* <Box>
          <Image src={"/images/icons/rightArrow.svg"} alt="right_img" height={66} width={66} />
        </Box> */}
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: "4rem" }}>
        <Image
          src="/images/backgrounds/herosection.svg"
          alt="hero_img"
          width={1114}
          height={569}
          style={classes?.hero_img}
        />
      </Box>
    </Box>
  )
}

export default HeroSection
