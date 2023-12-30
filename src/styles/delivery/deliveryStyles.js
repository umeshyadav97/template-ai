import { useTheme } from "@mui/material"

export const useStyles = () => {
  const theme = useTheme()
  return {
    header_box: {
      margin: "50px 30px"
    },
    box_flex: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    },
    box_margin: {
      marginTop: "8px"
    },
    platform_box: {
      display: "flex",
      gap: "24px",
      marginTop: "24px",
      flexWrap: "wrap"
    },
    logo_box: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      padding: "24px",
      border: "1px solid",
      borderColor: theme.palette.background.secondary,
      borderRadius: "8px",
      backgroundColor: theme.palette.background.secondary,
      height: "100px",
      width: "100px"
    },
    logo_box_1: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      padding: "16px",
      border: "1px solid",
      borderColor: theme.palette.background.secondary,
      borderRadius: "8px",
      backgroundColor: theme.palette.background.secondary,
      height: "100px",
      width: "100px",
      cursor: "pointer"
    },
    disable_platform: {
      backgroundColor: theme.palette.background.gray3
    },
    bg_blue: {
      backgroundColor: theme.palette.background.blue3
    },
    bg_light_blue: {
      backgroundColor: theme.palette.background.secondary
    },
    margin_typo: {
      marginTop: "24px"
    },
    phase_box_container: {
      display: "flex",
      gap: "24px",
      flexWrap: "wrap",
      alignItems: "flex-start",
      marginTop: "24px"
    },
    phase_box: {
      border: "2px solid",
      borderRadius: "4px",
      width: "253px",
      height: "auto",
      "&:hover": {
        boxShadow: "0px 0px 5px 4px #f2f2f2"
      }
    },
    active_phase: {
      borderColor: theme.palette.text.primary_500
    },
    inActive_phase: {
      borderColor: theme.palette.text.gray3
    },
    phase_box_one: {
      display: "flex",
      // alignItems: "center",
      justifyContent: "space-between",
      // flexDirection: "column",
      // backgroundColor: theme?.palette?.background?.gray,
      padding: "16px 18px"
    },
    phase_inner_box: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginTop: "20px"
    },
    estimated_wrapper: {
      padding: "16px 24px"
    },
    platform_wrapper: {
      padding: "16px 24px"
    },
    platform_inner_wrapper: {
      display: "flex",
      justifyContent: "space-between"
    },
    platform_box_wrapper: {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap"
    },
    platform_logo_box: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      border: "1px solid",
      borderColor: theme.palette.background.secondary,
      borderRadius: "8px",
      backgroundColor: theme.palette.background.secondary,
      padding: "8px",
      height: "50px",
      width: "50px",
      cursor: "pointer"
    },
    logo_text: {
      fontSize: "5.5px",
      fontWeight: "400",
      lineHeight: "7.8px",
      color: theme.palette.text.gray6
    },
    speed_box: {
      display: "flex",
      alignItems: "center",
      gap: "5px"
    },
    toolTipBox: {
      backgroundColor: theme.palette.background.gray2,
      padding: "16px"
    },
    advanceText: {
      fontFamily: "Inter medium",
      fontWeight: "500"
    },
    header: {
      fontFamily: "Inter SemiBold",
      fontSize: "3.6rem",
      lineHeight: "4.4rem"
    },
    headingText: {
      fontFamily: "Inter Bold",
      fontSize: "18px",
      lineHeight: "28px"
    },
    descpText: {
      fontFamily: "Inter Regular",
      fontSize: "14px",
      lineHeight: "28px",
      textAlign: "center"
    }
  }
}
