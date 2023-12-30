import React from "react"
import { Paper, Box, Button, Typography, Skeleton } from "@mui/material"
import { useStyles } from "./styles"
import { LightTooltip } from "../toolTip"
import TooltioIcon from "@local/assets/icons/tooltip.svg"
import Image from "next/image"
import { DaysWeekConverter, formatCurrency } from "@local/helpers/common/common"
import { useSelector } from "react-redux"

const SelectedCardData = ({ buttonName = "", cardData, handleChnage, alignCenter = false }) => {
  const classes = useStyles()
  const { currency } = useSelector((store) => store.currency)

  const checkDataFetching = (data, width) => {
    if (React.isValidElement(data) || (data && data.type)) {
      return <Skeleton style={{ width: width ? width : "50%" }} />
    }
    if (data === undefined || data === null || data === "") {
      return <Skeleton style={{ width: width ? width : "50%" }} />
    }
    return data
  }

  return (
    <Paper sx={alignCenter ? classes.boxStyleCenter : classes.boxStyle}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            padding: "0px 15px",
            flexWrap: "wrap"
          }}>
          <Box>
            <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
              <Typography sx={classes.typeText}>Fixed Cost</Typography>
              <LightTooltip title="Cost including per feature and platform" arrow>
                <Image src={TooltioIcon} alt="tooltip" />
              </LightTooltip>
            </Box>
            <Box sx={{ mt: "8px" }}>
              <Typography
                sx={
                  cardData.discount_price === 0 || cardData.discount_price === cardData.fixed_cost
                    ? classes.priceText
                    : classes.priceText1
                }>
                {checkDataFetching(formatCurrency(cardData.fixed_cost, currency))}
              </Typography>
            </Box>
          </Box>
          {cardData.discount_price === cardData.fixed_cost ? null : (
            <Box>
              <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
                <Typography sx={classes.typeText}>Discount Cost</Typography>
                <LightTooltip title="Cost including per feature and platform" arrow>
                  <Image src={TooltioIcon} alt="tooltip" />
                </LightTooltip>
              </Box>
              <Box sx={{ mt: "8px" }}>
                <Typography sx={classes.priceText}>
                  {checkDataFetching(formatCurrency(cardData.discount_price, currency))}
                </Typography>
              </Box>
            </Box>
          )}
          {/* Total Cost */}
          {/* <Box>
            <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
              <Typography sx={classes.typeText}>Total Cost</Typography>
              <LightTooltip title="Cost includes Fixed costs and customisation costs" arrow>
                <Image src={TooltioIcon} alt="tooltip" />
              </LightTooltip>
            </Box>
            <Box sx={{ mt: "8px" }}>
              <Typography sx={classes.priceText}>
                {checkDataFetching(formatCurrency(cardData.total_cost, currency))}
              </Typography>
            </Box>
          </Box> */}

          <Box sx={{ borderLeft: "1px solid #DFE0E6", paddingLeft: "20px" }}>
            <Typography sx={classes.typeText}>Indicative Duration</Typography>
            <Typography sx={classes.priceText}>
              {checkDataFetching(DaysWeekConverter(cardData.total_duration))}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <Button variant="contained" sx={{ padding: "21px 28px" }} onClick={handleChnage}>
            {buttonName}
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}

export default SelectedCardData
