import { Box, Typography } from "@mui/material"
import React from "react"
import { useStyles } from "./deliveryCommonStyles"
import Logo from "@local/assets/icons/logo.svg"
import Image from "next/image"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
function PricePlan() {
  const classes = useStyles()
  const listArray = ["Ongoing expert support", "Collaboration tools to manage your project"]
  return (
    <Box sx={classes?.plan_wrapper}>
      <Typography variant="h4" fontWeight={600} color={"text.black2"}>
        Other{" "}
        <Typography variant="h4" fontWeight={600} component={"span"} color={"text.blue4"}>
          Strope.ai
        </Typography>{" "}
        services that nurture your idea
      </Typography>
      <Box sx={classes?.price_box}>
        <Box sx={classes?.price_header_box}>
          <Box>
            <Image src={Logo} alt="logo" />
          </Box>
          <Box sx={classes?.check_box}>
            <Typography variant="h7" fontWeight={400} color={"text.primary_500"}>
              INCLUDED
            </Typography>
            <Box>
              <CheckCircleIcon color="primary" sx={{ height: "40px", width: "40px" }} />
              {/* <Image src={checkIcon} alt="check label" /> */}
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography variant="h7" fontWeight={400} color={"text.gray5"}>
            {
              "Your app price includes Studio One for 1 year, which unlocks a dashboard to monitor your build in real-time – approve designs, give feedback and make changes. It’s our way of ensuring ongoing success with your new app. You also get expert support throughout your build and beyond."
            }
          </Typography>
          <Typography
            variant="h7"
            fontWeight={400}
            color={"text.gray5"}
            sx={{ mt: "8px" }}
            component={"div"}>
            Success built-in to every app
          </Typography>
          <ul style={{ paddingTop: "0px" }}>
            {listArray?.map((item, index) => (
              <li key={index} style={classes?.list_text}>
                {item}
              </li>
            ))}
          </ul>
          <Typography
            variant="h7"
            fontWeight={400}
            color={"text.primary_500"}
            sx={{ mt: "8px", cursor: "pointer" }}>
            View more...
          </Typography>
        </Box>
        <Box>
          <Typography sx={classes?.price_text} color={"text.black3"}>
            {"₹0 for 12 months (worth "}{" "}
            <Typography sx={classes?.price_number_text} color={"text.black4"} component={"span"}>
              {"₹ 77,629.97 "}
            </Typography>{" "}
            {"/month)"}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default PricePlan
