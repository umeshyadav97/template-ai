import React, { useEffect } from "react"
import { useStyles } from "@local/styles/delivery/deliveryStyles"
import { Box, Checkbox, Divider, Grid, Typography } from "@mui/material"
import Image from "next/image"
import HtmlTooltip from "../HtmlToolTip"
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import LeftDrawer from "./LeftDrawer"
import { capitalizeSTR, removeUnderScore } from "@local/helpers/textUtils"
import { DaysWeekConverter } from "@local/helpers/common/common"

function PhaseBox({
  item,
  index,
  isAdvanced,
  selectedfeatures,
  platform,
  setPhasePlatform,
  selectedPlatform,
  handlePlatformData,
  handleCheckboxChange,
  handleTooltipClose,
  handleToolTip,
  tooltipOpen,
  selectedPhase,
  quotation,
  EstimatedDate,
  setSelectedPlatform,
  date
}) {
  const classes = useStyles()
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)

  useEffect(() => {
    if (selectedPlatform?.length > 0) {
      setPhasePlatform(selectedPlatform)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPlatform])
  const handleCloseDrawer = () => {
    setIsDrawerOpen(false)
  }
  const handleOpenDrawer = (platform) => {
    setIsDrawerOpen(true)
    setSelectedPlatform(platform)
  }

  const toolTipBox = (item) => (
    <Box sx={classes?.toolTipBox}>
      <Typography variant="h7" fontFamily={"Inter Bold"} component={"div"}>
        {removeUnderScore(item?.name)}
      </Typography>
      <Typography variant="p3" sx={{ mt: "12px" }}>
        {item?.description}
      </Typography>
    </Box>
  )

  return (
    <Box
      key={index}
      sx={[
        classes?.phase_box,
        item?.is_selected ? classes?.active_phase : classes?.inActive_phase
      ]}>
      <Box sx={classes?.phase_box_one}>
        <Box sx={classes?.phase_inner_box}>
          <Box>
            <Image src={item?.icon_url} alt={item?.name} width={40} height={40} />
          </Box>
          <Typography variant="p2" sx={{ maxWidth: "130px" }}>
            {capitalizeSTR(removeUnderScore(item?.name))}
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
        <Box sx={{ position: "relative" }}>
          <Grid item sx={{ position: "absolute", zIndex: "10", right: "-21px", top: "-19px" }}>
            <Checkbox
              icon={<RadioButtonUncheckedIcon sx={{ width: "3rem", height: "3rem" }} />}
              checkedIcon={<CheckCircleIcon sx={{ width: "3rem", height: "3rem" }} />}
              checked={item?.is_selected}
              onChange={() => handleCheckboxChange(item)}
              disableRipple
            />
          </Grid>
        </Box>
      </Box>
      {isAdvanced && (
        <Box sx={classes?.platform_wrapper}>
          {!!item?.platform?.length && (
            <>
              <Box>
                <Box sx={classes?.platform_inner_wrapper}>
                  <Typography variant="h7" color={"text.gray5"}>
                    Platform
                  </Typography>
                  <Typography
                    variant="p3"
                    sx={{ cursor: "pointer" }}
                    color={"text.primary_500"}
                    onClick={() => handleOpenDrawer(item?.platform)}>
                    Change
                  </Typography>
                </Box>
                <Box sx={{ marginTop: "8px" }}>
                  <Box sx={classes?.platform_box_wrapper}>
                    {item?.platform?.map((platform, i) => (
                      <Box sx={classes?.platform_logo_box} key={i}>
                        <Box>
                          <Image
                            src={platform?.icon_url || "/images/baseTemplate/androidIcon.svg"}
                            alt={"android"}
                            width={20}
                            height={25}
                          />
                        </Box>
                        <Typography sx={classes?.logo_text}>{platform?.name}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
              <Divider sx={{ borderColor: "text.gray3", margin: "8px 0" }} />
            </>
          )}
          <Box>
            <Box>
              <Box sx={classes?.platform_inner_wrapper}>
                <Typography variant="h7" color={"text.gray5"}>
                  Features
                </Typography>
                {/* <Typography
                  variant="p3"
                  sx={{ fontWeight: 600, cursor: "pointer" }}
                  color={"text.primary_500"}>
                  View
                </Typography> */}
              </Box>
              <Box sx={{ mt: "8px" }}>
                <Typography variant="p2" color={"text.black2"}>
                  {selectedfeatures?.length} Features selected
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      {item?.is_selected ? (
        <Box sx={{ padding: "0px 16px 16px" }}>
          <Divider sx={{ borderColor: "text.gray3", marginBottom: "16px" }} />
          {quotation?.phases?.map(
            (quo) =>
              quo?.id === item.id && (
                <>
                  <Box>
                    <Typography variant="h7" sx={{ fontWeight: "400" }}>
                      Estimated Duration :{" "}
                      <Typography
                        fontSize={"1.4rem"}
                        fontFamily={"Inter SemiBold"}
                        lineHeight={"2rem"}
                        component={"span"}
                        color={"text.black2"}>
                        {DaysWeekConverter(quo?.phase_duration)}
                      </Typography>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h7" sx={{ fontWeight: "400" }}>
                      Estimated Delivery Date :{" "}
                      <Typography
                        fontSize={"1.4rem"}
                        fontFamily={"Inter SemiBold"}
                        lineHeight={"2rem"}
                        component={"span"}
                        color={"text.black2"}>
                        {EstimatedDate(quo?.phase_duration, date)}
                      </Typography>
                    </Typography>
                  </Box>
                </>
              )
          )}
        </Box>
      ) : null}
      <LeftDrawer
        isDrawerOpen={isDrawerOpen}
        title="Platform"
        handleCloseDrawer={handleCloseDrawer}
        phasePlatform={selectedPlatform}
        handleSelectPlatform={handlePlatformData}
        data={platform}
        phaseId={item?.id}
      />
    </Box>
  )
}

export default PhaseBox
