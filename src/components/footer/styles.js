export const useStyles = () => {
  return {
    header: {
      color: "#000",
      textAlign: "center",
      fontFamily: "Inter Bold",
      fontSize: "51px",
      fontStyle: "normal",
      lineHeight: "120%",
      letterSpacing: "-1.02px"
    },
    content: {
      color: "#475467",
      textAlign: "center",
      fontFamily: "Inter Regular",
      fontSize: "22px",
      fontStyle: "normal",
      lineHeight: "130%" /* 61.2px */,
      letterSpacing: "-1.02px"
    },
    primary_button: {
      display: "flex",
      minWidth: "140px",
      maxWidth: "324px",
      padding: "12px 20px",
      justifyContent: "center",
      alignItems: "center",
      gap: "8px",
      flex: "1 0 0",
      borderRadius: "4px",
      background: "#000",
      color: "#fff",
      maxHeight: "52px",
      "&:hover": {
        backgroundColor: "#fff",
        color: "#000",
        border: "1px solid #000"
      }
    },
    header_1: {
      color: "#000",
      fontFamily: "Inter Bold",
      fontSize: "24px",
      fontStyle: "normal",
      lineHeight: "3.2rem"
    },
    text: {
      color: "#000",
      fontFamily: "Inter Regular",
      fontSize: "16px",
      fontStyle: "normal",
      lineHeight: "150%"
    },
    bold_content: {
      color: "#000",
      fontFamily: "Inter SemiBold",
      fontSize: "14px",
      lineHeight: "2.4rem"
    },
    link: {
      color: "#000",
      fontFamily: "Inter Regular",
      fontSize: "14px",
      lineHeight: "2.4rem"
    }
  }
}
