import { Box, Divider, Typography } from "@mui/material"
import React from "react"
import { useStyles } from "./CounterSectionStyles"
import Image from "next/image"
function CounterSection() {
  const classes = useStyles()
  const counterArray = [
    {
      number: "3,000,000",
      title: "Total app downloads"
    },
    {
      number: "10,000",
      title: "Man hours saved per app"
    },
    {
      number: "$50,000",
      title: "Amount saved per app"
    }
  ]
  return (
    <Box sx={classes?.counter_container}>
      <Box sx={classes?.counter_box}>
        <Box sx={classes?.text_box}>
          {counterArray.map((item, index) => (
            <Box key={index}>
              <Typography variant="h8" color={"text.primary_500"}>
                {item?.number + "+"}{" "}
              </Typography>
              <Typography variant="p2" color={"text.gray_600"} component={"div"} mt={"13px"}>
                {item?.title}
              </Typography>
            </Box>
          ))}
        </Box>
        <Divider orientation="vertical" flexItem sx={classes?.divider} />
        <Box sx={classes?.play_box}>
          <Box sx={{ cursor: "pointer" }}>
            <Image src={"/images/icons/play.svg"} alt="play" width={60} height={60} />
          </Box>
          <Box>
            <Typography variant="p1" color={"text.gray_600"}>
              Check our product Video
            </Typography>
            <Typography
              color={"text.primary_500"}
              variant="p3"
              fontFamily={"Inter SemiBold"}
              component={"div"}
              mt={"4px"}>
              Finalise the app in 5mins
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default CounterSection
