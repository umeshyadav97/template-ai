import * as React from "react"
import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import { Grid, IconButton, Typography } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import Slide from "@mui/material/Slide"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function DialogCard({
  open = false,
  children,
  handleClose,
  title = "",
  width,
  subtitle = ""
}) {
  return (
    <div>
      <Dialog
        open={open}
        fullWidth
        maxWidth={width}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => handleClose()}>
        <DialogTitle>
          <Grid container alignItems="center">
            <Grid item xs={9}>
              <Grid item>
                <Typography variant="h8">{title}</Typography>
              </Grid>
            </Grid>
            <Grid item xs={3}>
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
        <Grid item container xs={12} style={{ padding: "0px 24px" }}>
          <Typography variant="p2">{subtitle}</Typography>
        </Grid>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </div>
  )
}
