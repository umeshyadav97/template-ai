import React, { useEffect } from "react"
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
  Grid,
  useMediaQuery,
  Skeleton
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
// import Search from "../search"
import Image from "next/image"
import { useAccordianSectionController } from "./accordiansection.controller"
import CircularCheckbox from "../circularCheckbox"
import { DaysWeekConverter, formatCurrency } from "@local/helpers/common/common"

const useStyles = () => {
  const matches = useMediaQuery("(max-width:1440px)")
  useEffect(() => {}, [matches])
  return {
    divGrid: {
      borderRight: "1px solid #EAECF0",
      maxHeight: "100vh",
      top: 0,
      overflowY: "auto",
      paddingBottom: "60px",
      paddingTop: "20px"
    },
    imageBg: {
      width: "100%"
    },
    heading: {
      fontSize: "1.6rem"
    },
    serchContainer: {
      borderBottom: "1px solid #EAECF0",
      borderRight: "1px solid #EAECF0",
      width: "100%"
    },
    accordion: {
      marginLeft: "-5px"
    }
  }
}

const AccordainSidebar = () => {
  const { sideBarData, categoryData, handleChange, selectedFeature, isLoading, currency } =
    useAccordianSectionController()
  const styles = useStyles()
  useEffect(() => {
    sideBarData()
  }, [])

  const checkDataFetching = (data) => {
    if (isLoading) {
      return (
        <>
          <Grid item xs={12}>
            <Grid item px={2}>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                sx={{ borderBottom: "1px solid #D0D5DD" }}>
                <Grid container alignItems="center" pb={2}>
                  <Skeleton variant="circular" width={20} height={20} />
                  <Grid item direction="row" mx={1} xs={9} md={8} lg={9}>
                    <Skeleton variant="text" sx={{ fontSize: "25px" }} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </>
      )
    }
    return data
  }

  return (
    <Grid item>
      {/* <Grid item py={2} style={styles.serchContainer}>
        <Search placeholder="Search for a feature" />
      </Grid> */}
      <div style={styles.divGrid}>
        {categoryData.map((accordion, index) => (
          <div key={index}>
            <Accordion style={styles.accordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Grid container py={1}>
                  <Grid item mr={0.8}>
                    <Image src={accordion.icon_url} alt="icon" width={18} height={18} />
                  </Grid>
                  <Grid item display="flex" alignItems="center">
                    <Typography variant="h7" fontWeight={400}>
                      {accordion.name}
                    </Typography>
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails sx={{ minHeight: "10vh", maxHeight: "35vh", overflowY: "auto" }}>
                {/* <Grid container justifyContent="space-between" pb={1}>
                  <Grid item>
                    <Typography variant="p3">
                      Selected {selectedProducts?.length}/{accordion?.features.length}
                    </Typography>
                  </Grid>
                  <Typography
                    variant="p3"
                    onClick={() => handleSelectAll(accordion)}
                    sx={{ cursor: "pointer", textDecoration: "underline" }}>
                    {selectAll ? "Unselect All" : "Select All"}
                  </Typography>
                </Grid> */}
                <Divider />

                {accordion?.features.map((item, index) => (
                  <div key={index}>
                    <Grid container py={1}>
                      <Grid item xs={2}>
                        <CircularCheckbox
                          isOn={
                            selectedFeature.findIndex(
                              (selectedItem) => selectedItem.id === item.id
                            ) !== -1
                          }
                          onToggle={() => handleChange(item)}
                        />
                      </Grid>
                      <Grid item xs={10}>
                        <Grid item>
                          <Typography variant="h12">{item?.name}</Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="p3">
                            {formatCurrency(item.price, currency)}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="p3">{DaysWeekConverter(item.duration)}</Typography>
                        </Grid>
                      </Grid>
                      {/* For Future reference */}
                      {/* <Grid item xs={4} display="flex" alignItems="center">
                        <Grid container spacing={1}>
                          <ToggleImage
                            isOn={productDetails?.id === item?.id}
                            onToggle={() => handleEyeChange(item)}
                            srcInactive={InActiveEyeIcon}
                            srcActive={ActiveEyeIcon}
                            alt="icon"
                            width={28}
                            height={28}
                          />
                          <ToggleImage
                            isOn={selectedProducts?.findIndex(({ id }) => item.id === id) !== -1}
                            onToggle={() => handleChange(item)}
                            srcInactive={PlusIcon}
                            srcActive={DeleteIcon}
                            alt="icon"
                            width={28}
                            height={28}
                          />
                        </Grid>
                      </Grid> */}
                    </Grid>

                    <Divider />
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
            {index < categoryData.length - 1 && <Divider />}
          </div>
        ))}
        {!categoryData?.length > 0 && (
          <Grid container spacing={2} mt={1}>
            {LoaderArray?.map((_, i) => (
              <React.Fragment key={i}>{checkDataFetching()}</React.Fragment>
            ))}
          </Grid>
        )}
      </div>
    </Grid>
  )
}

export default AccordainSidebar

const LoaderArray = ["", "", "", "", "", "", "", "", "", "", ""]
