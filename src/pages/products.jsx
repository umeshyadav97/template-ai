import { Grid, Typography } from "@mui/material"
import React from "react"
import ComingSoon from "@local/assets/icons/coming-soon.svg"
import Image from "next/image"

const Products = () => {
  return (
    <React.Fragment>
      <Grid container flexDirection="column" alignItems="center">
        <Image
          src={ComingSoon}
          alt="comming soon"
          width={700}
          height={360}
          style={{
            maxWidth: "700px",
            maxHeight: "360px",
            width: "100%"
          }}
        />
        <Grid item mt={4}>
          <Typography variant="h2">We Are Coming Soon</Typography>
        </Grid>
        <Grid container mt={2} justifyContent="center">
          <Typography variant="h6" sx={{ textAlign: "center", color: "#475467" }}>
            Exciting things are in progress! We&apos;re crafting something special <br /> just for
            you. Stay tuned for our big reveal
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Products
