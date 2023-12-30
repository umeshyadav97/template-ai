import { Grid, Typography } from "@mui/material"
import Image from "next/image"
import React from "react"
import Banner from "@local/assets/icons/products.svg"
import styles from "@local/styles/Home.module.css"

const PowerfulProducts = () => {
  return (
    <React.Fragment>
      <Grid item className={styles?.product_box}>
        <Grid item xs={11} sm={8} md={6}>
          <Typography variant="h2" sx={{ textAlign: "center" }}>
            Discover how companies build powerful products
          </Typography>
        </Grid>
        <Grid item className={styles.text_box_p1}>
          <Typography className={styles.products_text}>Browse customer stories</Typography>
        </Grid>
        <Grid item sx={{ width: "100%" }}>
          <Image
            src={Banner}
            alt="banner"
            style={{ width: "100%", objectFit: "cover", height: "auto" }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default PowerfulProducts
