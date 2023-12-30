import React from "react"
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  IconButton,
  Divider,
  Button,
  useTheme
} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import CheckIcon from "@mui/icons-material/Check"
import { useStyles } from "./templateStyles"
import Image from "next/image"
import { AmountWithSymboal } from "@local/helpers/currencyHelper/currency"
const TemplateGrid = ({ template, isSelected, onSelect, handleView }) => {
  //   const [isSelected, setIsSelected] = useState(false)
  const classes = useStyles()
  const handleClick = () => {
    onSelect(template)
  }

  const theme = useTheme()

  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Card sx={classes.card}>
        <CardContent>
          <Box sx={classes.card_header}>
            <Box sx={classes.card_logo_box}>
              {/* <CardMedia
                    component="img"
                    alt={template.templateName}
                    image={template?.templateLogolURL}
                  /> */}
              <Box sx={classes?.logo_box}>
                <Image
                  src={template?.logo_url}
                  alt={"logo"}
                  style={classes.logo_img}
                  width={40}
                  height={40}
                />
              </Box>
              <Box>
                <Typography variant="p3" color="text.gray">
                  BUILD AN APP LIKE
                </Typography>
                <Typography variant="h6">{template?.name}</Typography>
              </Box>
            </Box>
            <Box>
              <IconButton
                sx={{
                  borderRadius: "50%",
                  border: "1px solid #EAECF0",
                  backgroundColor: isSelected ? theme.palette.primary.main : "#FFFFFF",
                  padding: "6px"
                }}
                disableRipple
                onClick={handleClick}>
                {isSelected ? (
                  <CheckIcon sx={{ color: "text.white", width: "2.5rem", height: "2.5rem" }} />
                ) : (
                  <AddIcon sx={{ color: "text.gray4", width: "2.5rem", height: "2.5rem" }} />
                )}
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ margin: "16px 0px" }}>
            <CardMedia
              component="img"
              alt={template?.name}
              image={template?.thumbnail_url}
              style={classes.thumbnail}
            />
            <Divider sx={{ borderColor: "text.gray3" }} />
          </Box>
          <Box>
            <Typography variant="p3" color="text.gray4">
              INCLUDED FEATURES
            </Typography>
            <Typography variant="p3" component={"div"} color="text.black" sx={{ mt: "4px" }}>
              {template?.features?.slice(0, 4).map((item, index, array) => (
                <React.Fragment key={item?.feature?.id}>
                  {item?.name}
                  {index !== array.length - 1 && "\u00A0\u00A0"}
                </React.Fragment>
              ))}
              {template?.features.length > 4 && (
                <span style={{ color: theme.palette.primary.main, paddingLeft: "5px" }}>
                  +{template?.features.length - 4} other features
                </span>
              )}
            </Typography>
          </Box>
          <Divider sx={{ borderColor: "text.gray2", mt: "16px" }} />
          <Box sx={classes.card_price_box}>
            <Box>
              <Typography variant="p3" color="text.gray">
                FROM
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "4px",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                <Typography sx={classes.price_text} color="text.black">
                  {AmountWithSymboal(template?.amount, true, true)}
                </Typography>
                <Typography
                  variant="p3"
                  color="text.gray"
                  style={{ whiteSpace: "pre-line", lineHeight: "12px" }}>
                  per{"\n"} platform
                </Typography>
              </Box>
            </Box>
            <Box>
              <Button sx={classes.card_button} onClick={() => handleView(template)}>
                View Details
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default TemplateGrid
