import React, { useState } from "react"
import { Button, Divider, Menu, MenuItem } from "@mui/material"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"

const DropDown = ({ filterData }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleOrderBy = (orderBy) => {
    console.log("Ordered by:", orderBy)
    handleClose()
  }

  return (
    <div>
      <Button
        color="primary"
        onClick={handleClick}
        sx={{
          color: (theme) => theme.palette.secondary.default,
          border: "1px solid #D0D5DD",
          height: "37px"
        }}
        endIcon={<ArrowDropDownIcon />}>
        Order By
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <div>
          {filterData.map((orderByOption, index) => (
            <React.Fragment key={orderByOption}>
              <MenuItem onClick={() => handleOrderBy(orderByOption)} sx={{ fontSize: "1.2rem" }}>
                {orderByOption}
              </MenuItem>
              {index < filterData.length - 1 && <Divider />}{" "}
            </React.Fragment>
          ))}
        </div>
      </Menu>
    </div>
  )
}

export default DropDown
