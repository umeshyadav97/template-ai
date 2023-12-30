import { ToggleButton, styled } from "@mui/material"

const BorderLessToggleButton = styled(ToggleButton)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  border: "1px solid #D0D5DD",
  borderRadius: "4px",
  fontWeight: 500,
  width: "80px",
  "&:not(:first-of-type)": {
    borderLeft: "1px solid #D0D5DD  !important",
    marginLeft: theme.spacing(1),
    borderRadius: "4px !important"
  },
  "&:not(:last-of-type)": {
    borderLeft: "1px solid #D0D5DD",
    borderRadius: "4px !important"
  },
  "&.Mui-selected": {
    backgroundColor: theme.palette.background.blue, // Set the background color for the selected state
    color: theme.palette.common.white, // Set the font color for the selected state
    fontWeight: 600,
    "&:hover": {
      backgroundColor: theme.palette.background.blue
    }
  },
  "&:hover": {
    backgroundColor: "transparent"
  }
}))

export default BorderLessToggleButton
