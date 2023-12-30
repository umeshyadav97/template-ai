import React from "react"
import { Paper, Typography, Box, Button } from "@mui/material"
import { useStyles } from "./templateStyles"
import Image from "next/image"

const SelectionBox = ({ selectedCards, handleClear = () => {}, handleChnage }) => {
  const classes = useStyles()
  return (
    <Paper sx={classes.boxStyle}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box sx={{ padding: "0 20px" }}>
          <Box sx={{ display: "flex", gap: "15px", alignItems: "center" }}>
            {selectedCards?.map((item, i) => (
              <Box key={i}>
                <Box sx={classes?.logo_box}>
                  <Image
                    src={item?.logo_url}
                    alt={item?.name}
                    style={classes.logo_img}
                    width={40}
                    height={40}
                  />
                </Box>
              </Box>
            ))}
            <Typography
              variant="h7"
              color={"text.gray_700"}
              sx={{ cursor: "pointer", textDecoration: "underline" }}
              onClick={handleClear}>
              Clear Selection
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <Typography variant="h7" color={"text.gray4"}>
            {selectedCards?.length} template selected
          </Typography>
          <Button
            variant="contained"
            sx={{ padding: "21px 28px" }}
            disableRipple
            onClick={() => handleChnage(selectedCards)}>
            Build Now
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}

export default SelectionBox
