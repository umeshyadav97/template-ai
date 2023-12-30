import { Grid, Skeleton } from "@mui/material"
import React from "react"

const BaseLoader = () => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Grid item sx={{ borderRadius: "4px", border: "1px solid #D0D5DD", padding: "8px" }}>
        <Grid container xs={12} mb={2} justifyContent="space-between" alignItems="center">
          <Grid container xs={10} md={9} lg={10} alignItems="center">
            <Skeleton variant="rounded" width={40} height={40} />
            <Grid item direction="row" mx={1} xs={9} md={8} lg={9}>
              <Skeleton variant="rectangle" width={100} height={18} />
              <Skeleton variant="text" sx={{ fontSize: "25px" }} />
            </Grid>
          </Grid>
          <Skeleton variant="circular" width={40} height={40} />
        </Grid>
        <Grid container xs={12} mb={2} justifyContent="center" alignItems="baseline">
          <Skeleton variant="rounded" width={103} height={151} />
          <div className="dark">
            <Skeleton variant="rounded" width={73} height={101} />
          </div>
          <Skeleton variant="rounded" width={1000} height={2} />
        </Grid>
        <Grid item xs={12}>
          <Grid item xs={12} mb={0.5} className="dark">
            <Skeleton variant="rounded" width={125} height={18} />
          </Grid>
          <Grid container xs={12}>
            <Skeleton variant="rounded" width={1000} height={18} />
          </Grid>
          <Grid container mt={2}>
            <Grid container mb={1} xs={12}>
              <Skeleton variant="rounded" width={1000} height={2} />
            </Grid>
            <Skeleton variant="rounded" width={35} height={18} />
          </Grid>
          <Grid container xs={12} mt={0.5} alignItems="center" justifyContent="space-between">
            <Grid container xs={8}>
              <Grid item className="dark" mr={0.5}>
                <Skeleton variant="rounded" width={47} height={28} />
              </Grid>
              <Grid item>
                <Skeleton variant="rounded" width={104} height={28} />
              </Grid>
            </Grid>
            <Grid item xs={4} display="flex" justifyContent="flex-end">
              <Skeleton variant="rounded" width={109} height={40} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default BaseLoader
