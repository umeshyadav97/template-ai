import * as React from "react"
import PropTypes from "prop-types"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { Button, Grid, Stack } from "@mui/material"
import Image from "next/image"
import Ent1 from "@local/assets/images/ComponentImage/entrepreneur1.svg"
import Ent2 from "@local/assets/images/ComponentImage/entrepreneur2.svg"

function BusinessType(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

BusinessType.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  }
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: "100%", marginTop: "2.4rem" }}>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Entrepreneur" {...a11yProps(0)} />
          <Tab label="Small business" {...a11yProps(1)} />
          <Tab label="Enterprise" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <BusinessType value={value} index={0}>
        <Grid container>
          <Grid xs={7} item container sx={{ position: "relative" }} justifyContent="center">
            <Image
              src={Ent1}
              alt="view"
              style={{
                height: "60rem",
                width: "60rem",
                maxWidth: "100%",
                marginRight: "1rem",
                position: "relative"
              }}
            />
            <Image
              src={Ent2}
              alt="view"
              style={{
                height: "30rem",
                width: "20rem",
                maxWidth: "100%",
                position: "absolute",
                top: "70%",
                left: "2%"
              }}
            />
          </Grid>
          <Grid
            xs={5}
            item
            sx={{
              display: "flex",
              alignItems: "center"
            }}>
            <Stack>
              <Typography variant="h3">Realize Your Business App Aspirations</Typography>
              <Typography
                variant="p4"
                sx={{ marginTop: "3.2rem", color: "#475467", lineHeight: "2.8rem" }}>
                Embark on a seamless journey to build your dream business app with Strope.ai. Our
                product specialists are dedicated to guiding your project from conception to
                completion. No technical background? No problem. We handle all the complexities,
                ensuring you retain full ownership of your app, including the source code. Start
                with a vision, end with an asset.
              </Typography>
              <Button
                type="submit"
                sx={{
                  padding: "1rem 2.4rem",
                  width: "20rem",
                  color: "#000",
                  border: "2px solid #000",
                  marginTop: "3.2rem"
                }}>
                Learn More
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </BusinessType>
      <BusinessType value={value} index={1}>
        Small business
      </BusinessType>
      <BusinessType value={value} index={2}>
        Enterprise
      </BusinessType>
    </Box>
  )
}
