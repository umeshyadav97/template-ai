import { useTheme } from "@emotion/react"
import ContactusForm from "@local/components/contactusForm"
import { useContactUsController } from "@local/controllers/privateControllers/contactus.controller"
import { Grid, Typography } from "@mui/material"
import Head from "next/head"
import Image from "next/image"
import React from "react"
import styles from "@local/styles/ContatcUs.module.css"
import ConatctUsImage from "@local/assets/icons/contatcus-icon.svg"
import CalendarIcon from "@local/assets/icons/calender.svg"
import VideoTag from "@local/assets/icons/videotag.svg"
import ConatctSideIcon from "@local/assets/icons/contactside-icon.svg"

const ContatcUs = () => {
  const theme = useTheme()
  const { formik } = useContactUsController()
  return (
    <React.Fragment>
      <Head>
        <title>Strope.AI - Contact Us</title>
      </Head>

      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        className={styles.container}
        sx={{
          background: theme.palette.background.contctus
        }}>
        <Grid
          item
          display="flex"
          justifyContent="center"
          alignItems="center"
          className={styles.formGrid}
          pb={2}
          px={2}>
          <Grid container>
            <Grid item xs={12} sm={6} pt={2}>
              <Grid item>
                <Typography variant="h3">Get in touch & build your business </Typography>
              </Grid>
              <Grid item py={1}>
                <Typography variant="p2">
                  Get the best value for your investment with our competitive pricing and
                  transparent cost structure.
                </Typography>
              </Grid>
              <Grid item>
                <ContactusForm formik={formik} />
              </Grid>
            </Grid>
            <Grid item sm={6} sx={{ display: { xs: "none", sm: "flex" } }}>
              <Image
                src={ConatctUsImage}
                alt={"alt"}
                width={100}
                height={100}
                className={styles.imageContainer}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container pb={2} pt={3}>
        <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
          <Grid container>
            <Grid
              item
              sm={6}
              pt={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ display: { xs: "none", sm: "flex" } }}>
              <Image
                src={ConatctSideIcon}
                alt={"alt"}
                width={100}
                height={100}
                className={styles.imageContainer1}
              />
            </Grid>
            <Grid item sm={6} xs={12} p={2}>
              <Grid item py={3}>
                <Typography variant="h14" sx={{ color: theme.palette.primary.main }}>
                  Live chat with our expert
                </Typography>
              </Grid>
              <Grid item pb={2}>
                <Typography variant="p6">How do start live chat?</Typography>
              </Grid>
              <Grid item>
                <Typography variant="p2">
                  Click chat, agree to terms, share name/email, match with expert, ask questions,
                  get answers.
                </Typography>
              </Grid>
              <Grid item py={3}>
                <Grid container spacing={2}>
                  <Grid item>
                    {" "}
                    <Image src={CalendarIcon} alt={"alt"} width={36} height={36} />
                  </Grid>
                  <Grid item display="flex" alignItems="center">
                    <Typography variant="p6">Request a Free demo from an expert</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container spacing={2}>
                  <Grid item>
                    {" "}
                    <Image src={VideoTag} alt={"alt"} width={36} height={36} />
                  </Grid>
                  <Grid item display="flex" alignItems="center">
                    <Typography variant="p6">Watch a 2-min Builder ai demo</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default ContatcUs
