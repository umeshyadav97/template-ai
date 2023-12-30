/* eslint-disable no-unused-vars */
import { Box, Divider, Grid, MenuItem, Select, Typography } from "@mui/material"
import React, { useState } from "react"
import { useStyles } from "./deliveryCommonStyles"
import { timezones } from "@local/constants/templateConstant"
import DetailsForm from "../detailsForm"
import moment from "moment"
import { DaysWeekConverter, formatCurrency } from "@local/helpers/common/common"
function DeliveryBanner({
  isAdvanced,
  cardData,
  quotation,
  currency,
  date,
  EstimatedDate,
  formik
}) {
  const classes = useStyles()
  const [selectedTimezone, setSelectedTimezone] = useState("")

  const handleChange = (event) => {
    setSelectedTimezone(event.target.value)
  }
  return (
    <Box sx={classes?.banner_wraaper}>
      <Box sx={classes?.banner_box}>
        {/* {isAdvanced && (
          <Box>
            <Typography variant="h4" fontWeight={600} color={"text.black2"}>
              When do you want the delivery?
            </Typography>
            <Typography variant="p1" color={"text.black2"} component={"div"}>
              Your team to be located in
            </Typography>
            <Select
              value={selectedTimezone}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={classes?.selectDropdown}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 300 // Set your preferred max height here
                  }
                }
              }}>
              <MenuItem value="">
                <em>Anywhere</em>
              </MenuItem>
              {timezones.map((timezone, index) => (
                <MenuItem key={index} value={timezone}>
                  {timezone}
                </MenuItem>
              ))}
            </Select>
          </Box>
        )} */}
        <Box
          sx={classes?.estimation_box}
          mb={2}
          style={{
            width: "100%"
          }}>
          <Box>
            <Typography
              fontSize={"1.8rem"}
              fontFamily={"Inter SemiBold"}
              lineHeight={"2.8rem"}
              color={"text.black2"}>
              If you kick-off on {moment(date?.$d).format("DD MMM YYYY")}
            </Typography>
            <Box
              style={{
                justifyContent: "space-between",
                display: "flex",
                alignItems: "center",
                width: "100%",
                flexWrap: "wrap",
                marginTop: "8px"
              }}>
              {quotation?.phases?.map((quo, i) =>
                quo?.name === "MVP" && quo?.is_selected ? (
                  <Typography key={i} variant="h7" fontWeight={"400"} color={"text.gray"}>
                    Estimated First delivery:{" "}
                    <Typography
                      component={"span"}
                      variant="h7"
                      fontWeight={"400"}
                      color={"text.blue3"}>
                      {EstimatedDate(quo?.phase_duration, date)}
                    </Typography>
                  </Typography>
                ) : null
              )}
              <Typography variant="h7" fontWeight={"400"} color={"text.gray"} component={"div"}>
                Estimated Final delivery:{" "}
                <Typography
                  component={"span"}
                  variant="h7"
                  fontWeight={"400"}
                  color={"text.black2"}>
                  {EstimatedDate(quotation?.total_duration, date)}
                </Typography>
              </Typography>
            </Box>
          </Box>
          <Divider style={{ marginTop: "16px" }} />
          <Box>
            <Grid item py={2}>
              <Typography fontSize={"1.8rem"} fontFamily={"Inter Medium"} lineHeight={"1rem"}>
                Quotation
              </Typography>
            </Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
              <Box
                sx={{
                  display: "flex",
                  columnGap: "25px",
                  rowGap: "10px",
                  alignItems: "center",
                  padding: "0px 0px 20px 3px",
                  flexWrap: "wrap"
                }}>
                {cardData.map((item, index) => (
                  <Box key={index}>
                    <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
                      <Typography sx={classes.typeText}>{item.type}</Typography>
                    </Box>
                    <Box sx={{ mt: "8px" }}>
                      <Typography
                        sx={classes.priceText}
                        style={item?.discount && { textDecoration: "line-through" }}>
                        {formatCurrency(item.price, currency)}
                      </Typography>
                    </Box>
                  </Box>
                ))}
                <Box item display="flex" alignItems="center">
                  =
                </Box>
                <Box>
                  <Typography sx={classes.typeText}>Indicative Duration</Typography>
                  <Typography style={{ marginTop: "5px" }} sx={classes.priceText}>
                    {DaysWeekConverter(quotation?.total_duration)}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Grid container lg={11} md={12} sm={7} sx={{ margin: "2rem auto", justifyContent: "center" }}>
        <Grid item sx={{ border: "1px solid #dcdcdc", borderRadius: "14px", padding: "24px" }}>
          <DetailsForm cardData={cardData} formik={formik} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default DeliveryBanner
