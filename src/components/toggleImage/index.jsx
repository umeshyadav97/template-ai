import React from "react"
import { Grid } from "@mui/material"
import Image from "next/image"

const ToggleImage = ({ isOn, onToggle, srcInactive, srcActive, alt, width, height }) => (
  <Grid item isOn={isOn} onClick={onToggle} sx={{ cursor: "pointer" }}>
    <Image src={isOn ? srcActive : srcInactive} alt={alt} width={width} height={height} />
  </Grid>
)

export default ToggleImage
