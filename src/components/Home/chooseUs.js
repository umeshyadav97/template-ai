import { Grid, Typography, useTheme } from "@mui/material"
import React from "react"
import styles from "@local/styles/Home.module.css"
import RightArrow from "@mui/icons-material/East"
import Vision from "@local/assets/icons/vision-skeleton.svg"
import Solution from "@local/assets/icons/solution-skeleton.svg"
import Scale from "@local/assets/icons/scale-skeleton.svg"
import Code from "@local/assets/icons/code-skeleton.svg"
import Vision1 from "@local/assets/icons/vision-skeleton-1.svg"
import Image from "next/image"

const ChooseUs = () => {
  const theme = useTheme()
  return (
    <React.Fragment>
      <Grid item className={styles.questions_grid}>
        <Grid item className={styles.grid_center}>
          <Grid item>
            <Typography variant="h2">Why Choose Us?</Typography>
          </Grid>
          <Grid item xs={12} sm={10} md={8} lg={5} mt={1.5}>
            <Typography className={styles.questions_sub_header} sx={{ textAlign: "center" }}>
              Our squad possesses experience in fulfilling the intended goals and shape ideas in
              accordance with market demand.
            </Typography>
          </Grid>
        </Grid>
        <Grid item className={styles.choose_grid_box}>
          <Grid item className={styles.choose_grid_lg}>
            {content_1?.map((item, i) => (
              <Grid
                item
                key={i}
                sx={
                  i > 0
                    ? { backgroundColor: theme.palette.background.olive_100 }
                    : { backgroundColor: theme.palette.background.primary }
                }
                className={styles.choose_box_lg}>
                <Grid item>
                  <Typography variant="h3">{item?.title}</Typography>
                </Grid>
                <Grid item mt={1.5}>
                  <Typography variant="p4">{item?.content}</Typography>
                </Grid>
                <Grid container alignItems="center" mt={1.5}>
                  <Typography variant="h7" sx={{ textTransform: "uppercase", marginRight: "10px" }}>
                    Know More
                  </Typography>
                  <RightArrow fontSize="medium" />
                </Grid>
                <Grid item className={styles.grid_center}>
                  <Image src={item?.icon} alt="skeleton" style={{ maxWidth: "100%" }} />
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid item className={styles.choose_grid_sm}>
            {content_2?.map((item, i) => (
              <Grid
                item
                key={i}
                sx={
                  i > 1
                    ? { backgroundColor: theme.palette.background.purple_400 }
                    : i > 0
                    ? { backgroundColor: theme.palette.background.gray3 }
                    : { backgroundColor: theme.palette.background.blush_100 }
                }
                className={styles.choose_box_sm}>
                <Grid item>
                  <Grid item>
                    <Typography variant="h3">{item?.title}</Typography>
                  </Grid>
                  <Grid item mt={1.5}>
                    <Typography variant="p4">{item?.content}</Typography>
                  </Grid>
                  <Grid container alignItems="center" mt={1.5}>
                    <Typography
                      variant="h7"
                      sx={{ textTransform: "uppercase", marginRight: "10px" }}>
                      Know More
                    </Typography>
                    <RightArrow fontSize="medium" />
                  </Grid>
                </Grid>
                <Grid item className={styles.grid_center}>
                  <Image src={item?.icon} alt="skeleton" style={{ maxWidth: "100%" }} />
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default ChooseUs

const content_1 = [
  {
    title: "Realize Your Vision",
    content:
      "Get the best value for your investment with our competitive pricing and transparent cost structure.",
    icon: Vision
  },
  {
    title: "Cost-Effective Solutions",
    content:
      "Get the best value for your investment with our competitive pricing and transparent cost structure.",
    icon: Solution
  }
]

const content_2 = [
  {
    title: "Scale with Confidence",
    content:
      "Our apps are built to grow with your business, ensuring that scalability is never an issue.",
    icon: Scale
  },
  {
    title: "The code is yours.",
    content: "You have ownership of your code, no waiting for changes, flexible scaling.",
    icon: Code
  },
  {
    title: "Realize Your Vision",
    content:
      "Get the best value for your investment with our competitive pricing and transparent cost structure.",
    icon: Vision1
  }
]
