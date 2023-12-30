/* eslint-disable no-unused-vars */
import React, { useEffect } from "react"
import {
  Box,
  ClickAwayListener,
  Divider,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme
} from "@mui/material"
import { useStyles } from "@local/styles/delivery/deliveryStyles"
import Head from "next/head"
import Image from "next/image"
import DeliveryBanner from "@local/components/Delivery/DeliveryBanner"
import PricePlan from "@local/components/Delivery/PricePlan"
import { useDeliveryController } from "@local/controllers/privateControllers/delivery.controller"
import PhaseBox from "@local/components/Delivery/PhaseBox"
import moment from "moment"
import SelectedCardData from "@local/components/selectCardData"
import DialogCard from "@local/components/Dialog"
import DetailsForm from "@local/components/detailsForm"
import { trackDeliveryPageView } from "@local/helpers/google-analytics-events"
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import dayjs from "dayjs"
import { ellipsizeText } from "@local/helpers/textUtils"
import MessageIcon from "@local/assets/icons/messageIcon.svg"
function Delivery() {
  const classes = useStyles()
  const theme = useTheme()
  const {
    isAdvanced,
    handleAdvance,
    cardData,
    isOpen,
    handleOpen,
    handlePhase,
    phase,
    selectedfeatures,
    handlePlatform,
    platform,
    selectedPlatform,
    handlePlatformData,
    quotation,
    currency,
    phasePlatform,
    setPhasePlatform,
    setCheckedState,
    setSelectedPlatform,
    checkedState,
    handleCheckboxChange,
    handleTooltipClose,
    handleToolTip,
    tooltipOpen,
    selectedPhase,
    openCalender,
    setOpenCalender,
    closeCalender,
    date,
    setDate,
    EstimatedDate,
    formik
  } = useDeliveryController()

  const isWeekend = (date) => {
    const currentDate = dayjs()
    // Convert the selected date to dayjs
    const selectedDate = dayjs(date)

    // Check if the selected date is before the current date or a weekend (Saturday or Sunday)
    return (
      selectedDate.isBefore(currentDate, "day") ||
      selectedDate.day() === 0 || // Sunday
      selectedDate.day() === 6 // Saturday
    )
  }
  const formattedDate = moment(date?.$d).format("DD MMM YYYY")
  const isToday = formattedDate === moment().format("DD MMM YYYY")

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search)
    const ID = urlSearchParams.get("product_id")
    handlePlatform(ID)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search)
    const ID = urlSearchParams.get("product_id")
    handlePhase(ID)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [platform])

  useEffect(() => {
    trackDeliveryPageView()
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>Strope.AI - Plan Delivery</title>
      </Head>
      <Box sx={{ pb: "15rem" }}>
        <Box sx={classes?.header_box}>
          <Grid container xs={12} justifyContent="space-between" alignItems="center">
            <Grid item xs={6}>
              <Typography sx={classes?.header} color={"text.black2"}>
                Decide your deliverables
              </Typography>
              <Typography variant="p2">Select platform for your product</Typography>
            </Grid>
            <Grid item xs={6}>
              <Grid item xs={12} display="flex" justifyContent="flex-end">
                <Typography
                  variant="p2"
                  sx={{ fontFamily: "Inter SemiBold" }}
                  color={"text.black2"}>
                  Expected kick-off date{" "}
                </Typography>
              </Grid>
              <Grid item xs={12} display="flex" justifyContent="flex-end">
                <Typography
                  variant="c1"
                  sx={{ cursor: "pointer", color: theme.pallete.primary.main }}
                  onClick={() => setOpenCalender(true)}>
                  {formattedDate} {isToday ? "(Today)" : ""}
                </Typography>
              </Grid>
              {openCalender && (
                <Grid
                  item
                  sx={{
                    position: "absolute",
                    zIndex: "100",
                    right: "20px",
                    backgroundColor: "#fff",
                    boxShadow: "0 6px 14px 0 rgba(149, 157, 171, 0.4)",
                    marginTop: "20px"
                  }}>
                  <ClickAwayListener onClickAway={closeCalender}>
                    <Grid item>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar
                          className="calender"
                          value={date}
                          onChange={(newValue) => (setDate(newValue), setOpenCalender(false))}
                          shouldDisableDate={isWeekend}
                          autoOk
                        />
                      </LocalizationProvider>
                    </Grid>
                  </ClickAwayListener>
                </Grid>
              )}
            </Grid>
          </Grid>
          <Box sx={classes?.platform_box}>
            {platform?.map((item, index) => {
              const isItem = selectedPlatform?.some((phaseItem) => phaseItem.name === item.name)
              return (
                <Box
                  key={index}
                  sx={[classes?.logo_box_1, classes?.disable_platform]}
                  // onClick={() => !isAdvanced && handlePlatformData(item, "basic")}
                >
                  <Box>
                    <Image
                      src={item?.icon_url || "/images/baseTemplate/androidIcon.svg"}
                      alt={item?.name}
                      width={40}
                      height={40}
                      style={{ filter: "grayscale(100%) opacity(40%)" }}
                    />
                  </Box>
                  <Typography variant="p3" sx={{ color: "#c9c7c7" }}>
                    {ellipsizeText(item?.name, 20)}
                  </Typography>
                </Box>
              )
            })}
          </Box>
          <Box sx={[classes?.box_flex, classes?.margin_typo]}>
            <Typography variant="h5" color={"text.black2"} sx={classes?.advanceText}>
              Select phases for your product
            </Typography>
            <div className="btn-grp-small">
              <ToggleButtonGroup
                value={isAdvanced}
                onChange={handleAdvance}
                exclusive={true}
                size="large">
                <ToggleButton value={false}>Basic</ToggleButton>
                <ToggleButton value={true}>Advanced</ToggleButton>
              </ToggleButtonGroup>
            </div>
          </Box>
          <Box sx={classes?.phase_box_container}>
            {phase?.map((item, index) => (
              <PhaseBox
                key={index}
                item={item}
                index={index}
                isAdvanced={isAdvanced}
                selectedfeatures={selectedfeatures}
                platform={platform}
                phasePlatform={phasePlatform}
                setPhasePlatform={setPhasePlatform}
                selectedPlatform={selectedPlatform}
                setSelectedPlatform={setSelectedPlatform}
                checkedState={checkedState}
                handleCheckboxChange={handleCheckboxChange}
                handleTooltipClose={handleTooltipClose}
                handleToolTip={handleToolTip}
                tooltipOpen={tooltipOpen}
                selectedPhase={selectedPhase}
                handlePlatformData={handlePlatformData}
                quotation={quotation}
                date={date}
                EstimatedDate={EstimatedDate}
              />
            ))}
          </Box>
          {/* 
          <Box sx={classes?.phase_box_container}>
            {phaseArray?.map((item, index) => (
              <Box key={index} sx={classes?.phase_box}>
                <Box sx={classes?.phase_box_one}>
                  <Box sx={classes?.phase_inner_box}>
                    <Box>
                      <Image src={item?.icon} alt={item?.name} width={40} height={40} />
                    </Box>
                    <Typography variant="p2" sx={{ maxWidth: "100px" }}>
                      {item?.name}
                    </Typography>
                    <Box>
                      <HtmlTooltip
                        title={toolTipBox(item)}
                        onClose={handleTooltipClose}
                        open={tooltipOpen && selectedPhase === index}>
                        <Image
                          onClick={() => handleToolTip(index)}
                          src={"/images/baseTemplate/info.svg"}
                          alt={"info"}
                          width={20}
                          height={20}
                          style={{ cursor: "pointer" }}
                        />
                      </HtmlTooltip>
                    </Box>
                  </Box>
                  <Box>
                    <Checkbox
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<CheckCircleIcon />}
                      checked={checkedState[index]}
                      onChange={() => handleCheckboxChange(index)}
                      disableRipple
                    />
                  </Box>
                </Box>
                {isAdvanced && (
                  <Box sx={classes?.platform_wrapper}>
                    <Box>
                      <Box sx={classes?.platform_inner_wrapper}>
                        <Typography variant="h7" sx={{ fontWeight: 600 }} color={"text.gray5"}>
                          Platform
                        </Typography>
                        <Typography
                          variant="p3"
                          sx={{ fontWeight: 600, cursor: "pointer" }}
                          color={"text.blue"}
                          onClick={handleOpenDrawer}>
                          Change
                        </Typography>
                      </Box>
                      <Box sx={{ marginTop: "8px" }}>
                        <Box sx={classes?.platform_box_wrapper}>
                          {item?.platform?.map((platform, i) => (
                            <Box sx={classes?.platform_logo_box} key={i} onClick={handleOpenDrawer}>
                              <Box>
                                <Image
                                  src={platform?.logo}
                                  alt={"android"}
                                  width={20}
                                  height={20}
                                />
                              </Box>
                              <Typography sx={classes?.logo_text}>{platform?.name}</Typography>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    </Box>
                    <Divider sx={{ borderColor: "text.gray3", margin: "8px 0" }} />
                    <Box>
                      <Box>
                        <Box sx={classes?.platform_inner_wrapper}>
                          <Typography variant="h7" sx={{ fontWeight: 600 }} color={"text.gray5"}>
                            Features
                          </Typography>
                          <Typography
                            variant="p3"
                            sx={{ fontWeight: 600, cursor: "pointer" }}
                            color={"text.blue"}>
                            View
                          </Typography>
                        </Box>
                        <Box sx={{ mt: "8px" }}>
                          <Typography variant="p2" color={"text.black2"}>
                            80 Features selected
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Divider sx={{ borderColor: "text.gray3", margin: "8px 0 0" }} />
                  </Box>
                )}
                {checkedState[index] ? (
                  <Box sx={classes?.estimated_wrapper}>
                    <Box>
                      <Typography variant="h7" sx={{ fontWeight: "400" }}>
                        Estimated Duration :{" "}
                        <Typography component={"span"} sx={{ fontWeight: "600" }}>
                          {item?.duration}
                        </Typography>
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="h7" sx={{ fontWeight: "400" }}>
                        Estimated Delivery Date :{" "}
                        <Typography component={"span"} sx={{ fontWeight: "600" }}>
                          {item?.estimatedDeliveryDate}
                        </Typography>
                      </Typography>
                    </Box>
                  </Box>
                ) : null}
              </Box>
            ))}
          </Box> */}
        </Box>
        <Divider />
        <Box>
          <DeliveryBanner
            isAdvanced={isAdvanced}
            cardData={cardData}
            quotation={quotation}
            currency={currency}
            date={date}
            EstimatedDate={EstimatedDate}
            formik={formik}
          />
        </Box>
        {/* <Box>
          <PricePlan />
        </Box> */}
        {/* <SelectedCardData
          buttonName={"Plan Delivery"}
          cardData={cardData}
          handleChnage={handleOpen}
          alignCenter={true}
        /> */}
      </Box>
      <DialogCard width="xs" open={isOpen} handleClose={handleOpen}>
        <Grid
          item
          sx={{ marginTop: "-20px" }}
          display="flex"
          alignItems="center"
          justifyContent="center">
          <Image src={MessageIcon} alt="message" />
        </Grid>
        <Grid item display="flex" alignItems="center" justifyContent="center" py={2}>
          <Typography sx={classes.headingText}>We will reach out to you soon!</Typography>
        </Grid>
        <Grid item display="flex" alignItems="center" justifyContent="center">
          <Typography sx={classes.descpText}>
            We have received your request and we will be reaching out to you within 6 hours!
          </Typography>
        </Grid>
        {/* <DetailsForm cardData={cardData} /> */}
      </DialogCard>
    </React.Fragment>
  )
}

export default Delivery
