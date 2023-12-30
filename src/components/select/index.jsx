import React from "react"
import { InputLabel, ListItemText, MenuItem, Select, Typography } from "@mui/material"
import { useStyles } from "./selectStyles"

const CustomSelect = ({
  name,
  id,
  items = [],
  value,
  onChange,
  placeHolder,
  // style,
  disabled,
  label = "",
  required = false
}) => {
  const styles = useStyles()

  return (
    <>
      {label && (
        <InputLabel sx={styles.label}>
          {label}
          {required && "*"}
        </InputLabel>
      )}
      <Select
        id={id}
        fullWidth
        sx={styles.inputfield}
        type="text"
        value={value}
        onChange={(e) => onChange && onChange(e)}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        name={name}
        labelId={id}
        disabled={disabled}>
        <MenuItem value="">
          <Typography sx={styles.select_texts}>{placeHolder}</Typography>
        </MenuItem>
        {items.map((item, index) => (
          <MenuItem sx={styles.borderLine} key={index} value={item.value}>
            {/* {item.label} */}
            {/* <ListItemIcon>{item.icon.type.src}</ListItemIcon> */}
            <ListItemText primary={item.label} />
          </MenuItem>
        ))}
        {items.length === 0 && <MenuItem disabled>No options available</MenuItem>}
      </Select>
    </>
  )
}

export default CustomSelect
