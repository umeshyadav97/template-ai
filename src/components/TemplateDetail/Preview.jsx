import { Box, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material"
import Image from "next/image"
import React, { useState, useEffect } from "react"
import mobilePreviewIcon from "public/images/baseTemplate/mobPreview.svg"
import webPreviewIcon from "public/images/baseTemplate/webPreview.svg"
import { useStyles } from "./templateDetailStyles"

function Preview({ templateDetail }) {
  const [selectedButton, setSelectedButton] = useState("app")
  // const [imageCount, setTotalCount] = useState(templateDetail?.images?.length)
  const [selectedImage, setSelectedImage] = useState(null)

  const classes = useStyles()

  useEffect(() => {
    //for preview image count
    setSelectedImage({ index: 0, item: templateDetail?.images ? templateDetail?.images[0] : {} })
  }, [templateDetail])

  const handleButtonChange = (event, newSelectedButton) => {
    if (newSelectedButton !== null) {
      setSelectedButton(newSelectedButton)
    }
  }

  const handleGridItemClick = (index, item) => {
    setSelectedImage({ index, item })
    // setSelectedItem({ index, name });
  }

  // Filter and map the items
  const webItems =
    templateDetail?.images?.length > 0 &&
    templateDetail?.images
      // .filter((item) => item.type === selectedButton)
      .map((item, index) => (
        <Box key={index} onClick={() => handleGridItemClick(index, item)}>
          <Box sx={[classes?.grid_box, selectedImage?.index === index ? classes?.active_box : ""]}>
            <Box sx={classes?.image_container}>
              <Image
                src={selectedButton === "app" ? item.mob_image_url : item.web_image_url}
                alt={item.name}
                style={selectedButton === "app" ? classes.preview_img : classes.preview_web_img}
                width={88} // Adjust the width as needed
                height={64} // Adjust the height as needed
              />
            </Box>
          </Box>
        </Box>
      ))
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "24px"
        }}>
        <Box sx={classes.image_grid}>
          {selectedButton === "app" ? (
            <Box sx={classes?.preview_img_box}>
              <Image
                src={templateDetail?.app_image?.image_url}
                alt="mobile preview"
                width={200}
                height={143}
                style={classes.img_big}
              />
            </Box>
          ) : (
            <Box sx={classes?.preview_img_web_box}>
              <Image
                src={templateDetail?.web_image?.image_url}
                alt="mobile preview"
                width={200}
                height={143}
                style={classes.img_big}
              />
            </Box>
          )}
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {/* <Typography variant="p3" color={"text.gray4"}>
            {selectedImage ? selectedImage?.index + 1 : 0}/{templateDetail?.images?.length}
          </Typography> */}
            <Typography variant="p3" sx={{ fontWeight: "600" }}>
              {selectedImage?.item ? selectedImage?.item?.name : ""}
            </Typography>
          </Box>
        </Box>
        <ToggleButtonGroup
          value={selectedButton}
          exclusive
          onChange={handleButtonChange}
          aria-label="button group">
          <ToggleButton value="app" aria-label="all">
            <Image src={mobilePreviewIcon} alt="mobile icon preview" />
          </ToggleButton>
          <ToggleButton value="web" aria-label="all">
            <Image src={webPreviewIcon} alt="web icon preview" />
          </ToggleButton>
        </ToggleButtonGroup>
        <Box sx={classes?.preview_items}>{webItems}</Box>
      </Box>
    </Box>
  )
}

export default Preview
