import { Box, Divider, Drawer, Typography } from "@mui/material"
import React from "react"
import { useStyles } from "./deliveryCommonStyles"
import Image from "next/image"

function LeftDrawer({
  title,
  isDrawerOpen,
  handleCloseDrawer,
  phasePlatform,
  handleSelectPlatform,
  data,
  phaseId
}) {
  const classes = useStyles()
  return (
    <Drawer
      anchor={"right"}
      open={isDrawerOpen}
      onClose={handleCloseDrawer}
      PaperProps={{ sx: { maxWidth: "330px" } }}>
      <Box sx={{ p: "24px" }}>
        <Box>
          <Typography variant="p2" color={"text.gray"}>
            {title}
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ borderColor: "text.gray3" }} />
      <Box sx={classes?.drawer_box}>
        {data?.map((item, index) => {
          const isItem = phasePlatform?.some((phaseItem) => phaseItem?.name === item?.name)
          return (
            <Box
              key={index}
              sx={[classes?.logo_box, isItem ? classes?.bg_blue : classes?.bg_light_blue]}
              onClick={() => handleSelectPlatform(item, "advance", phaseId)}>
              <Box>
                <Image
                  src={item?.icon_url || "/images/baseTemplate/androidIcon.svg"}
                  alt={item?.name}
                  width={40}
                  height={40}
                />
              </Box>
              <Typography variant="p3" sx={{ color: "#1D2939" }}>
                {item?.name}
              </Typography>
            </Box>
          )
        })}
      </Box>
    </Drawer>
  )
}

export default LeftDrawer
