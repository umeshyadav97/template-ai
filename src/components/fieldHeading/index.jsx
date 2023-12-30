import { Typography } from "@mui/material"
// import styled from "@emotion/styled"
import React from "react"

const useStyles = () => ({
  text: {
    fontSize: "1.6rem",
    fontFamily: "Inter Medium",
    color: "#191919",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  }
})

const FieldHeading = ({ title }) => {
  const classes = useStyles()
  return <Typography sx={classes.text}>{title}</Typography>
}

export default FieldHeading
