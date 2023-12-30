import { Button, Grid, Skeleton, Typography } from "@mui/material"
import React from "react"
import classes from "./Mobileview.module.css"
import { useSelector } from "react-redux"
import { DaysWeekConverter, formatCurrency } from "@local/helpers/common/common"
import Image from "next/image"
import DeleteIcon from "@local/assets/icons/deleteIcon.svg"
import { useMobileViewController } from "./mobileview.controller"
import DialogCard from "../Dialog"
import { useTheme } from "@emotion/react"
import NoData from "@local/assets/images/backgrounds/noData.png"

const MobileView = (props) => {
  const { features } = props
  const { selectedItem } = useSelector((store) => store.refinefeature)
  const { handleChange, handleOpenPopup, handleClosePopUp, open, currency } =
    useMobileViewController()
  const theme = useTheme()

  const checkDataFetching = (data, width) => {
    if (React.isValidElement(data) || (data && data.type)) {
      return <Skeleton style={{ width: width ? width : "50%" }} />
    }
    if (data === undefined || data === null || data === "" || data === "₹ NaN") {
      return <Skeleton style={{ width: width ? width : "50%" }} />
    }
    return data
  }

  return (
    <React.Fragment>
      <Grid container spacing={5}>
        <Grid item xs={6} display="flex" justifyContent="flex-end">
          <img
            src={features?.[0]?.app_image?.image_url}
            alt="view"
            width={100}
            height={100}
            quality={100}
            className={classes.imageContainer}
          />
        </Grid>
        {Object.keys(selectedItem).length > 0 ? (
          <Grid item xs={5} mt={3}>
            <Grid container spacing={2} pb={0.5}>
              <Grid item>
                <Typography className={classes.wishText}>
                  {checkDataFetching(selectedItem.name, 160)}
                </Typography>
              </Grid>
              <Grid item onClick={() => handleOpenPopup()}>
                <Image
                  src={DeleteIcon}
                  alt="view"
                  width={28}
                  height={28}
                  className={classes.cursor}
                />
              </Grid>
            </Grid>
            {/* <Grid item py={1}>
            <Typography className={classes.secondaryText}>
              {checkDataFetching(selectedItem.name)}
            </Typography>
          </Grid> */}

            <Grid item py={1}>
              <Typography className={classes.secondaryText}>
                {checkDataFetching(formatCurrency(selectedItem.price, currency))}{" "}
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.secondaryText}>
                {checkDataFetching(DaysWeekConverter(selectedItem.duration))}
              </Typography>
            </Grid>
            <Grid item py={1.5}>
              <Typography className={classes.descpText}>{selectedItem?.description}</Typography>
            </Grid>

            {/* <Grid item pb={0.5}>
            <Grid
              item
              className={classes.button}
              display="flex"
              alignItems="center"
              onClick={handleOpen}>
              <Image src={NotesIcon} alt="view" width={10} height={14} />
              <span className={classes.notesText}>Add Note</span>
            </Grid>
          </Grid> */}
          </Grid>
        ) : (
          <Grid item xs={5} mt={3}>
            <Grid item display="flex" justifyContent="center">
              <Image src={NoData} width={150} height={150} alt="no data found" />
            </Grid>
            <Grid item display="flex" justifyContent="center">
              <Typography variant="h12">Look like there are no feature selected</Typography>
            </Grid>
          </Grid>
        )}
      </Grid>
      {/* <AddNotes open={isOpen} handleClose={handleClose} title="How do you want this to work?" /> */}
      <DialogCard
        width="xs"
        open={open}
        handleClose={handleClosePopUp}
        title="Are you sure you want to remove this feature?"
        subtitle="You will lose the selected template and you will have to select this feature again.">
        <Grid container>
          <Button
            color="primary"
            sx={{
              color: theme.palette.secondary.default,
              marginRight: "10px",
              border: "1px solid #D0D5DD",
              height: "40px",
              width: "180px"
            }}
            onClick={() => handleClosePopUp()}>
            No,Keep them
          </Button>
          <Button
            sx={{
              color: theme.palette.background.main,
              marginRight: "10px",
              background: theme.palette.secondary.button,
              height: "40px",
              width: "180px",
              "&:hover": {
                color: theme.palette.background.main,
                background: theme.palette.secondary.button
              }
            }}
            onClick={() => handleChange(selectedItem)}>
            Yes,Remove them
          </Button>
        </Grid>
      </DialogCard>
    </React.Fragment>
  )
}

export default MobileView
