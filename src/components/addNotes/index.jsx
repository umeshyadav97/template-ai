import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography
} from "@mui/material"
import React from "react"
import Slide from "@mui/material/Slide"
import CloseIcon from "@mui/icons-material/Close"
import { useStyles } from "./styles"
import DescriptionBox from "../descriptionBox"
import { useAddNotesController } from "./addnotes.controller"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

function AddNotes({ open = false, handleClose, title = "" }) {
  const styles = useStyles()
  const { handleInputChange, addNotes, isButtonDisabled } = useAddNotesController()

  return (
    <Dialog open={open} fullWidth maxWidth={"sm"} TransitionComponent={Transition} keepMounted>
      <DialogTitle>
        <Grid container alignItems="center">
          <Grid item xs={8}>
            <Typography sx={styles.title}>{title}</Typography>
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
        <Box>
          <Grid container>
            <Grid item>
              <Typography sx={styles.headingText}>
                Add text, images and attachments to explain...
              </Typography>
            </Grid>
            <Grid item></Grid>
          </Grid>
          <Grid item>
            <DescriptionBox
              id="description"
              placeholder="Tell us exactly what you’re expecting this feature to do (if it needs to include your images and text - attch these too.)"
              variant="standard"
              fullWidth
              rows={8}
              multiline
              value={addNotes}
              onChange={handleInputChange}
              InputLabelProps={{
                shrink: true
              }}
              InputProps={{
                disableUnderline: true
              }}
            />
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Box width="100%" display="flex" justifyContent="start" pl={2}>
          <Button
            variant="contained"
            sx={{ padding: "11px 22px" }}
            disabled={isButtonDisabled}
            // onClick={() => handleAdd(templateDetail)}
          >
            Add Note
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  )
}

export default AddNotes
