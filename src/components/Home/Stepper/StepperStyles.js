// import { useTheme } from "@mui/material"

export const useStyles = () => {
  //   const theme = useTheme()
  return {
    stepper_container: {
      padding: "8rem",
      "@media (max-width: 600px)": {
        padding: "4rem 5rem"
      }
    },
    title_box: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      gap: "15px",
      alignItems: "center"
    },
    step_container: {
      marginTop: "9rem",
      display: "flex",
      gap: "40px",
      "@media (max-width: 960px)": {
        flexDirection: "column-reverse"
      },
      "@media (max-width: 600px)": {
        marginTop: "3rem",
        gap: "20px"
      }
    },
    step_index_container: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      paddingLeft: "39px"
    },
    step_index_box: {
      border: "1px solid #EAECF0",
      maxWidth: "403px",
      maxHeight: "132px",
      padding: "16px 28px",
      cursor: "pointer",
      position: "relative",
      "&:hover": {
        boxShadow: "0px 0px 4px 4px rgba(0, 0, 0, 0.06)"
      },
      "@media (max-width: 1020px)": {
        maxHeight: "100%"
      },
      "@media (max-width: 960px)": {
        maxWidth: "100%"
      }
    },
    step_circle_box: {
      position: "absolute",
      borderRadius: "70px",
      backgroundColor: "#F9FAFB",
      boxShadow: "0px 4px 6px 0px rgba(0, 0, 0, 0.06)",
      width: "60px",
      height: "60px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      left: -45,
      top: 5
    },
    progress_box: {
      height: "auto",
      width: "5px",
      background: "#D0D5DD",
      display: "flex",
      justifyContent: "center",
      borderRadius: "10px",
      "@media (max-width: 960px)": {
        width: "auto",
        height: "5px",
        justifyContent: "flex-start",
        alignItems: "center"
      }
    },
    img_container: {
      padding: "23px 40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "@media (max-width: 600px)": {
        padding: "0px"
      }
    },
    img: {
      maxHeight: "462px",
      maxWidth: "724px",
      height: "100%",
      width: "100%"
    }
  }
}
