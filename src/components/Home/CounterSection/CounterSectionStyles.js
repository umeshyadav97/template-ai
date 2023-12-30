import { useTheme } from "@mui/material"

export const useStyles = () => {
  const theme = useTheme()
  return {
    counter_container: {
      background: "#FFFAF5"
    },
    counter_box: {
      display: "flex",
      justifyContent: "center",
      gap: "100px",
      alignItems: "center",
      padding: "30px 0",
      "@media (max-width: 1020px)": {
        padding: "30px 30px",
        gap: "70px"
      },
      "@media (max-width: 800px)": {
        gap: "30px"
      },
      "@media (max-width: 600px)": {
        flexDirection: "column"
      }
    },
    text_box: {
      display: "flex",
      gap: "60px",
      "@media (max-width: 1020px)": {
        gap: "40px"
      }
    },
    divider: {
      color: theme.palette.text.primary_500,
      borderWidth: "2px",
      borderColor: theme.palette.text.primary_500,
      borderRadius: "40px"
    },
    play_box: {
      display: "flex",
      justifyContent: "center",
      gap: "8px",
      alignItems: "center"
    }
  }
}
