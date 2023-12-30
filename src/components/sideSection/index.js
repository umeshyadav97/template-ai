import {
  Grid,
  //  Radio,
  Skeleton,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material"
import React, { useEffect } from "react"
import Checkbox from "../checkBox"
import { useSideSectionController } from "./sidesection.controller"
import SectionContainer from "../sectionContainer"
import { useSelector } from "react-redux"

const useStyles = () => {
  const matches = useMediaQuery("(max-width:1440px)")
  const theme = useTheme()
  useEffect(() => {}, [matches])
  return {
    headingBanner: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingLeft: matches ? "30px" : "calc(50vw - 730px)",
      paddingRight: "30px"
    },
    divGrid: {
      borderRight: "1px solid #EAECF0",
      height: "100vh",
      top: 0,
      overflowY: "auto",
      paddingBottom: "60px",
      overflowX: "hidden"
    },
    imageBg: {
      width: "100%"
    },
    heading: {
      fontSize: "1.6rem",
      marginBottom: "8px"
    },
    headingText: {
      fontFamily: "Inter Medium",
      fontSize: "1.8rem",
      lineHeight: "2.8rem",
      fontWeight: 500,
      paddingLeft: "10px",
      color: "#252C32"
    },
    textName: {
      fontSize: "1.4rem",
      fontWeight: "400",
      fontFamily: "Inter Regular",
      color: "#252C32",
      wordBreak: "break-word"
    },
    clearText: {
      fontSize: "1.4rem",
      fontWeight: "400",
      fontFamily: "Inter Regular",
      color: theme.palette.primary.main,
      cursor: "pointer"
    }
  }
}

function SideSection() {
  const styles = useStyles()
  const { category } = useSelector((store) => store.home)
  const {
    // handleRadioChange,
    // selectedValue,
    handleCheckBox,
    // handleClearSelection,
    handleClearCkeckBox,
    // filterByCost,
    sideBarData,
    categoryData
  } = useSideSectionController()

  useEffect(() => {
    sideBarData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const checkDataFetching = () => {
    return (
      <>
        <Grid item xs={12}>
          <Grid item px={2}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid container alignItems="center">
                <Skeleton variant="circular" width={20} height={20} />
                <Grid item direction="row" mx={1} xs={9} md={8} lg={9}>
                  <Skeleton variant="text" sx={{ fontSize: "18px" }} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    )
  }

  return (
    <div style={styles.divGrid}>
      <SectionContainer>
        <Grid item pt={3} pb={1}>
          <Grid container>
            <Grid item xs={9} style={styles.heading} display="flex" alignItems="center">
              <Typography style={styles.headingText}>Filter by Category</Typography>
            </Grid>
            {category.length > 0 && (
              <Grid
                item
                pr={1.5}
                xs={3}
                display="flex"
                justifyContent="flex-end"
                alignItems="center">
                <Typography onClick={handleClearCkeckBox} style={styles.clearText}>
                  Clear
                </Typography>
              </Grid>
            )}
          </Grid>
          <Grid item>
            <Grid container>
              {categoryData.map((item, index) => (
                <Grid container key={index} p={1}>
                  <Grid item key={index}>
                    <Checkbox
                      isOn={category?.findIndex((id) => item?.id === id) !== -1}
                      onToggle={() => handleCheckBox(item)}
                    />
                  </Grid>
                  <Grid item display="flex" alignItems="center">
                    <Typography style={styles.textName}>{item?.name}</Typography>
                  </Grid>
                </Grid>
              ))}
              {!categoryData?.length > 0 && (
                <Grid container spacing={2} mt={1}>
                  {LoaderArray?.map((_, i) => (
                    <React.Fragment key={i}>{checkDataFetching()}</React.Fragment>
                  ))}
                </Grid>
              )}
              {/* Future use */}
              {/* <Grid container>
                <Grid item pt={1.5} mb={1} xs={9}>
                  <Typography style={styles.headingText}>Filter by Cost</Typography>
                </Grid>
                {selectedValue && (
                  <Grid
                    item
                    pt={1.5}
                    pr={1.5}
                    xs={3}
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="center">
                    <Typography onClick={handleClearSelection} style={styles.clearText}>
                      Clear
                    </Typography>
                  </Grid>
                )}
              </Grid>
              {filterByCost.map((item, index) => (
                <Grid container key={index}>
                  <Grid item key={index}>
                    <Radio
                      color="primary"
                      checked={selectedValue === item.id}
                      onChange={() => handleRadioChange(item.id, item)}
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 20
                        }
                      }}
                    />
                  </Grid>
                  <Grid item display="flex" alignItems="center">
                    <Typography style={styles.textName}>{item?.name || ""}</Typography>
                  </Grid>
                </Grid>
              ))} */}
            </Grid>
          </Grid>
        </Grid>
      </SectionContainer>
    </div>
  )
}

export default SideSection
const LoaderArray = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
