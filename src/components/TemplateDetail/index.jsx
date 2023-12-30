import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material"
import React from "react"
import { useStyles } from "./templateDetailStyles"
import Preview from "./Preview"
import CloseIcon from "@mui/icons-material/Close"
import Image from "next/image"
import Slide from "@mui/material/Slide"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})
import { AmountWithSymboal } from "@local/helpers/currencyHelper/currency"

function TemplateDetail({
  templateDetail,
  open = false,
  handleClose,
  title = "",
  handleAdd,
  selectedCards,
  handleRemove
}) {
  const theme = useTheme()
  const classes = useStyles()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Dialog open={open} fullWidth maxWidth={"lg"} TransitionComponent={Transition} keepMounted>
      <DialogTitle>
        <Grid container alignItems="center">
          <Grid item xs={8}>
            <Typography variant="h4">{title}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Grid container justifyContent="flex-end">
              <IconButton
                onClick={handleClose}
                sx={{
                  borderRadius: "50%",
                  border: "1px solid #EAECF0",
                  backgroundColor: "#FFFFFF"
                }}
                disableRipple>
                <CloseIcon sx={{ color: "text.black" }} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ minHeight: "500px" }}>
          <Grid container spacing={2}>
            {/* First column */}
            <Grid item xs={12} sm={6} order={isSmallScreen ? 2 : 1}>
              {/* Content for the first column */}
              {/* <div style={{ border: "1px solid", padding: "10px" }}>First Column</div> */}
              <Preview templateDetail={templateDetail} />
            </Grid>

            {/* Second column */}
            <Grid item xs={12} sm={6} order={isSmallScreen ? 1 : 2}>
              <Box sx={classes?.detail_container}>
                <Box sx={classes?.image_box}>
                  <Box sx={classes?.logo_box}>
                    <Image
                      src={templateDetail?.logo_url}
                      alt={templateDetail?.name}
                      style={classes.logo_img}
                      width={40} // Adjust the width as needed
                      height={40} // Adjust the height as needed
                    />
                  </Box>

                  <Typography variant="h4">{templateDetail?.name}</Typography>
                </Box>
                <Typography variant="p3" color={"text.gray4"}>
                  {templateDetail?.features?.length} Features included
                </Typography>
                <Typography variant="p2" color={"text.gray5"}>
                  {
                    "A mobile-first body scanning and measuring technology that provides accurate data-driven size and fit recommendations and photorealistic virtual try-on to help optimize processes, reduce returns while boosting sales, and increasing shopping confidence."
                  }
                </Typography>
                <Divider sx={{ color: "text.gray2" }} />
                <Typography variant="p3" color={"text.gray4"}>
                  STARTING FROM
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <Typography variant="h4">{AmountWithSymboal(templateDetail?.amount)}</Typography>
                  <Typography
                    variant="p3"
                    color={"text.gray4"}
                    sx={classes?.p3_typography}
                    component={"p"}>
                    &nbsp; Per Platform
                  </Typography>
                </Box>
                <Divider sx={{ color: "text.gray2" }} />
                <Typography variant="p3" color={"text.gray4"}>
                  PLATFORMS AVAILABLE
                </Typography>
                {templateDetail?.platform?.map((platform, i) => (
                  <Box key={i} sx={classes?.image_box}>
                    <Box sx={classes?.icon_img_box}>
                      <Image
                        src={platform?.icon_url}
                        alt={"ios"}
                        style={classes.logo_img}
                        width={24}
                        height={24}
                      />
                    </Box>
                    <Typography variant="p2">{platform?.description}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions sx={classes?.bootom_box}>
        {selectedCards.some((selectedTemplate) => selectedTemplate?.id === templateDetail?.id) ? (
          <Button
            variant="contained"
            sx={{ padding: "21px 28px" }}
            onClick={() => handleRemove(templateDetail)}>
            Remove Template
          </Button>
        ) : (
          <Button
            variant="contained"
            sx={{ padding: "21px 28px" }}
            onClick={() => handleAdd(templateDetail)}>
            Add Template
          </Button>
        )}
      </DialogActions>
    </Dialog>
  )
}

export default TemplateDetail
