import styled from "@emotion/styled"
import { TextField } from "@mui/material"
import React from "react"

const StyledTextField = styled(TextField)({
  "& label": {
    fontFamily: "Inter Regular",
    fontStyle: "normal",
    fontSize: "14px",
    lineHeight: "18px",
    color: "#191919"
  },
  "& label.Mui-focused": {
    color: "#191919"
  },
  "& .MuiInputBase-input": {
    padding: "10px",
    paddingTop: "15px",
    paddingBottom: "15px",
    fontFamily: "Inter Medium",
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#191919",
    border: "1px solid #41393E",
    borderRadius: "8px",
    WebkitBoxShadow: "0 0 0 1000px #FFF inset",
    height: "2rem"
  },
  "& .MuiInputBase-input:focus": {},
  "& .Mui-error": {
    "& .MuiInputBase-input": {
      border: "1px solid #E13838",
      fontFamily: "Inter Regular"
    }
  },
  "& .Mui-disabled": {
    "& .MuiInputBase-input": {
      backgroundColor: "#E9E9E9",
      WebkitBoxShadow: "0 0 0 1000px #E9E9E9 inset",
      fontFamily: "Inter Medium",
      borderRadius: "8px"
    }
  },
  "& input[type=number]": {
    "-moz-appearance": "textfield"
  },
  "& input[type=number]::-webkit-outer-spin-button": {
    "-webkit-appearance": "none",
    margin: 0
  },
  "& input[type=number]::-webkit-inner-spin-button": {
    "-webkit-appearance": "none",
    margin: 0
  }
})

const InputField = ({ onChange, ...props }) => {
  return (
    <>
      <StyledTextField
        {...props}
        onChange={onChange}
        InputProps={{ disableUnderline: true, autoComplete: "off" }}
      />
    </>
  )
}

export default InputField
