import React from "react"
import { styled } from "@mui/system"
import { Button, Container, Grid, Typography, useMediaQuery, useTheme } from "@mui/material"
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import YouTubeIcon from "@mui/icons-material/YouTube"
import { useStyles } from "./styles"
import TextInput from "../Form/TextInput"
import { Form, FormikProvider } from "formik"
import Image from "next/image"
import Nikki from "@local/assets/icons/footer-nikki.svg"
import X from "@local/assets/icons/X.svg"
import classes from "@local/styles/Home.module.css"
import { useRouter } from "next/router"
import { useFooterController } from "./footer.controller"

const FooterDiv = styled("div")(({ theme }) => ({
  padding: "20px 80px 20px 0px",
  display: "grid",
  gridTemplateColumns: "265px 2fr",
  columnGap: "80px",
  backgroundColor: theme.palette.background.primary,
  [theme.breakpoints.down("md")]: {
    columnGap: "40px",
    padding: "20px 40px 20px 0px"
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    rowGap: "20px",
    padding: "0px"
  }
}))

const CustomDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    padding: "0px 16px 20px"
  }
}))

const FooterBottom = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: theme.palette.primary.main,
  padding: "24px 80px",
  [theme.breakpoints.down("sm")]: {
    padding: "20px"
  }
}))

function Footer() {
  const styles = useStyles()
  const theme = useTheme()

  const isMobileScreen = useMediaQuery(theme.breakpoints.down("sm"))
  const router = useRouter()
  const { formik } = useFooterController()

  return (
    <div
      style={{
        display: "flex",
        flex: "auto",
        flexDirection: "column"
      }}>
      <Container maxWidth="xl" sx={{ padding: "0px !important" }}>
        <Grid item style={{ padding: isMobileScreen ? "5rem 0rem" : "8rem 0rem 4rem" }}>
          <Grid item>
            <Typography variant="h2" textAlign={"center"}>
              Stay Updated with Us
            </Typography>
          </Grid>
          <Grid item pt={2}>
            <Typography sx={styles?.content}>Subscribe for latest updates.</Typography>
          </Grid>
          <FormikProvider value={formik}>
            <Form>
              <Grid container pt={5} spacing={3} justifyContent="center" alignItems="flex-start">
                <Grid item xs={10} sm={5} md={4} lg={3} className="footer">
                  <TextInput
                    id="email"
                    type="email"
                    fullWidth
                    value={formik.values.email}
                    placeholder="Enter email ID"
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>
                <Grid container item xs={6} sm={4} md={4} lg={3} justifyContent="center">
                  <Button type="submit" fullWidth sx={styles.primary_button}>
                    Subscribe Now
                  </Button>
                </Grid>
              </Grid>{" "}
            </Form>
          </FormikProvider>
        </Grid>
        <FooterDiv>
          <Grid item sx={{ position: { xs: "relative" } }}>
            <Image src={Nikki} alt="nikki" className={classes.image} />
          </Grid>
          <CustomDiv>
            <Typography style={styles?.header_1} sx={{ marginLeft: { xs: "72px", sm: "0px" } }}>
              Strope.AI
            </Typography>
            <Typography style={styles?.text} sx={{ marginTop: { xs: "16px", sm: "8px" } }}>
              Bespoke mobile and web applications tailored for your business needs. Experience
              seamless digital solutions crafted with precision and user-centric design.
            </Typography>
            <Grid container mt={5} spacing={2} justifyContent="space-between">
              <Grid item xs={3} sm={3} md={2}>
                <Grid item>
                  <Typography sx={styles?.bold_content}>Company</Typography>
                </Grid>
                <Grid item>
                  <Typography sx={styles?.link} mt={2} onClick={() => router.push("/about-us")}>
                    About
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={styles?.link} mt={2} onClick={() => router.push("/faqs")}>
                    FAQs
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={3} sm={3} md={2}>
                <Grid item>
                  <Typography sx={styles?.bold_content}>Product</Typography>
                </Grid>
                <Grid item>
                  <Typography sx={styles?.link} mt={2} onClick={() => router.push("/atelier")}>
                    Strope Atelier
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={3} sm={3} md={2}>
                <Grid item>
                  <Typography sx={styles?.bold_content}>Reach Us</Typography>
                </Grid>
                <Grid item>
                  <Typography sx={styles?.link} mt={2}>
                    Blog
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={styles?.link} mt={2} onClick={() => router.push("/contact-us")}>
                    Contact Us
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={3} sm={3} md={2}>
                <Grid item>
                  <Typography sx={styles?.bold_content}>Social</Typography>
                </Grid>
                <Grid item>
                  <Typography sx={styles?.link} mt={2}>
                    Twitter
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={styles?.link} mt={2}>
                    Instagram
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={styles?.link} mt={2}>
                    Threads
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </CustomDiv>
        </FooterDiv>
      </Container>
      <FooterBottom>
        <Grid container xs={12} sm={6} alignItems="center">
          <Image src={X} alt="x" width={20} height={20} style={{ marginRight: "16px" }} />
          <LinkedInIcon sx={{ fontSize: "24px" }} style={{ marginRight: "16px" }} />
          <YouTubeIcon sx={{ fontSize: "24px" }} style={{ marginRight: "16px" }} />
          <InstagramIcon sx={{ fontSize: "24px" }} style={{ marginRight: "16px" }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h12">@2024 strope.ai ,Inc,All Rights Reserved</Typography>
        </Grid>
      </FooterBottom>
    </div>
  )
}

export default Footer
