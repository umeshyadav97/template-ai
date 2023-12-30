import { Skeleton } from "@mui/material"
import React from "react"

const TextLoader = ({ width }) => {
  return <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={width} />
}

export default TextLoader
