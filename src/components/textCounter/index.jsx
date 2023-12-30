import { Box, Typography, useTheme } from "@mui/material"
import React from "react"

const TextCounter = ({ currentDescriptionLength = 0, maxLength, wordLength = 1000 }) => {
  const theme = useTheme()
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "flex-end"
      }}>
      <Typography
        style={{
          color: currentDescriptionLength < wordLength ? theme.palette.primary.main : "red"
        }}>{`${currentDescriptionLength || 0}/${maxLength}`}</Typography>
    </Box>
  )
}

export default TextCounter
