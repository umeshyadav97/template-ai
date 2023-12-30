import { Button, Grid, Typography } from "@mui/material"
import React from "react"
import classes from "./WebPage.module.css"
import { useSelector } from "react-redux"
import { DaysWeekConverter } from "@local/helpers/common/common"
import { AmountWithSymboal } from "@local/helpers/currencyHelper/currency"
import { useWebPageController } from "./webpage.controller"
import DialogCard from "../Dialog"
import { useTheme } from "@emotion/react"
import Image from "next/image"
import DeleteIcon from "@local/assets/icons/deleteIcon.svg"
import NoData from "@local/assets/images/backgrounds/noData.png"

const WebPage = (props) => {
  const { features } = props
  const theme = useTheme()
  const { selectedItem } = useSelector((store) => store.refinefeature)
  const { handleChange, handleOpenPopup, handleClosePopUp, open } = useWebPageController()

  return (
    <React.Fragment>
      <Grid item pb={4} display="flex" justifyContent="center">
        <img
          src={features?.[0]?.web_image?.image_url}
          alt="view"
          width={100}
          height={100}
          className={classes.imageContainer}
        />
      </Grid>
      {Object.keys(selectedItem).length > 0 ? (
        <Grid item>
          <Grid container spacing={2} display="flex" justifyContent="center" pb={0.5}>
            <Grid item>
              <Typography className={classes.wishText}>{selectedItem.name}</Typography>
            </Grid>
            <Grid item onClick={handleOpenPopup}>
              <Image
                src={DeleteIcon}
                alt="view"
                width={28}
                height={28}
                className={classes.cursor}
              />
            </Grid>
          </Grid>
          {/* <Grid item display="flex" justifyContent="center" pb={0.5}>
          <Typography className={classes.secondaryText}>{selectedItem.name}</Typography>
        </Grid> */}

          <Grid container display="flex" justifyContent="center" pb={0.5}>
            <Grid item>
              <Typography className={classes.secondaryText}>
                {AmountWithSymboal(selectedItem.price)} | {DaysWeekConverter(selectedItem.duration)}
              </Typography>
            </Grid>
          </Grid>
          <Grid container display="flex" justifyContent="center" pb={0.5}>
            <Grid item>
              <Typography className={classes.descpText}>{selectedItem?.description}</Typography>
            </Grid>
          </Grid>

          {/* <Grid item display="flex" justifyContent="center" pb={0.5}>
          <Grid
            item
            onClick={handleOpen}
            className={classes.button}
            display="flex"
            alignItems="center">
            <Image src={NotesIcon} alt="view" width={10} height={14} />
            <span className={classes.notesText}>Add Note</span>
          </Grid>
        </Grid> */}
        </Grid>
      ) : (
        <Grid item mt={-3}>
          <Grid item display="flex" justifyContent="center">
            <Image src={NoData} width={150} height={150} alt="no data found" />
          </Grid>
          <Grid item display="flex" justifyContent="center">
            <Typography variant="h12">Look like there are no feature selected</Typography>
          </Grid>
        </Grid>
      )}
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

export default WebPage
