import { useTheme } from "@mui/system"
import { Box, Button, Grid, Typography } from "@mui/material"
import React from "react"
import { useStyles } from "./styles"
import DialogCard from "../Dialog"
import { useSideController } from "./sideview.controller"
// import DropDown from "../dropDown"
import CircularCheckbox from "../circularCheckbox"
import { DaysWeekConverter, formatCurrency } from "@local/helpers/common/common"
import NoData from "@local/assets/images/backgrounds/noData.png"
import Image from "next/image"

const SideView = () => {
  const theme = useTheme()
  const styles = useStyles()
  const {
    isOpen,
    handleOpen,
    handleClose,
    // filterData,
    handleChange,
    selectedFeatureIndex,
    selectedProducts,
    handleShowFeature,
    handleRemoveFeature,
    currency,
    handleOpenPopup,
    handleClosePopUp,
    open,
    product
  } = useSideController()

  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid item xs={7} display="flex" alignItems="center">
          <Typography sx={styles.featureText}>
            Selected features
            <Box component="span" sx={styles.numberBackground}>
              {selectedProducts?.length}
            </Box>
          </Typography>
        </Grid>
        <Grid container xs={5} mt={1} justifyContent="flex-end">
          <Grid item pr={2}>
            <Button
              color="primary"
              onClick={() => handleOpen()}
              sx={{
                color: theme.palette.secondary.default,
                border: "1px solid #D0D5DD",
                height: "30px",
                fontSize: "12px"
              }}>
              Remove All
            </Button>
          </Grid>
          {/* <Grid item xs={6} display="flex" justifyContent="flex-end">
            <DropDown filterData={filterData} />
          </Grid> */}
        </Grid>
      </Grid>
      <Grid container spacing={1} pt={2} pb={18}>
        {selectedProducts?.map((product, index) => (
          <Grid item key={index} xs={12} md={12} display="flex" justifyContent="start" ml={1}>
            <Box
              sx={index === selectedFeatureIndex ? styles.border : styles.box}
              onClick={(e) => handleShowFeature(index, product, e)}
              display="flex"
              justifyContent="center">
              <Box item display="flex" justifyContent="center" alignItems="center">
                <CircularCheckbox
                  key={product.id}
                  isOn={product.id ? true : false}
                  // onToggle={(e) => handleChange(product, e)}
                  onToggle={() => handleOpenPopup(product)}
                />
              </Box>
              <Grid item sx={styles.container}>
                <Typography sx={styles.productName}>{product.name}</Typography>
                <Grid container>
                  <Grid item pr={1}>
                    <Typography sx={styles.priceText}>
                      {formatCurrency(product.price, currency)}
                    </Typography>
                  </Grid>{" "}
                  <Grid item sx={{ borderLeft: "1px solid #DFE0E6", paddingLeft: "10px" }}>
                    <Typography sx={styles.priceText}>
                      {DaysWeekConverter(product.duration)}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        ))}
      </Grid>
      {!(selectedProducts?.length > 0) && (
        <Grid container item justifyContent="center" alignItems="center" sx={{ padding: "3rem" }}>
          <Image src={NoData} width={220} height={220} alt="no data found" />
          <Grid item display="flex" flexDirection="column">
            <Typography variant="p3" sx={{ color: "#475467" }}>
              Looks like there are no feature currently.
            </Typography>
          </Grid>
        </Grid>
      )}
      <DialogCard
        width="xs"
        open={open}
        handleClose={handleClosePopUp}
        title="Are you sure you want to remove this feature?"
        subtitle="You will lose the selected template and you will have to select this feature again.">
        <Grid container>
          <Button
            color="primary"
            sx={{
              color: theme.palette.secondary.default,
              marginRight: "10px",
              border: "1px solid #D0D5DD",
              height: "40px",
              width: "180px"
            }}
            onClick={() => handleClosePopUp()}>
            No,Keep them
          </Button>
          <Button
            sx={{
              color: theme.palette.background.main,
              marginRight: "10px",
              background: theme.palette.secondary.button,
              height: "40px",
              width: "180px",
              "&:hover": {
                color: theme.palette.background.main,
                background: theme.palette.secondary.button
              }
            }}
            onClick={() => handleChange(product)}>
            Yes,Remove them
          </Button>
        </Grid>
      </DialogCard>
      <DialogCard
        width="xs"
        open={isOpen}
        handleClose={handleClose}
        title="Are you sure you want to remove all features?"
        subtitle="You will lose the selected template and you will have to start from scratch selecting features one by one.">
        <Grid container>
          <Button
            color="primary"
            // onClick={() => navigate("/auth/login")}
            // className={navBackground}
            sx={{
              color: theme.palette.secondary.default,
              marginRight: "10px",
              border: "1px solid #D0D5DD",
              height: "40px",
              width: "180px"
            }}
            onClick={() => handleClose()}>
            No,Keep them
          </Button>
          <Button
            sx={{
              color: theme.palette.background.main,
              marginRight: "10px",
              background: theme.palette.secondary.button,
              height: "40px",
              width: "180px",
              "&:hover": {
                color: theme.palette.background.main,
                background: theme.palette.secondary.button
              }
            }}
            onClick={() => handleRemoveFeature()}>
            Yes,Remove them
          </Button>
        </Grid>
      </DialogCard>
    </React.Fragment>
  )
}

export default SideView
