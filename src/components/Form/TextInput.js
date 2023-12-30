import { TextField } from "@mui/material"
import { styled } from "@mui/system"

const TextInput = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "4px",
    fontFamily: "Inter Medium",
    fontSize: "1.6rem",
    lineHeight: "1.75rem",
    background: "#FFFAF5",
    maxHeight: "45px",

    "&.Mui-focused fieldset": {
      border: "1px solid #000"
    },

    "&::placeholder": {
      color: "#000",
      fontSize: "1.125rem",
      lineHeight: "1.75rem",
      fontWeight: 500
    }
  },

  "& .MuiFormHelperText-root": {
    color: "#AD1D1F",

    "&.Mui-error": {
      color: "#AD1D1F"
    }
  }
}))

export default TextInput
