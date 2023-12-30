import { Tooltip } from "@mui/material"
import { styled } from "@mui/system"

export const LightTooltip = styled(Tooltip)(() => ({
  tooltipPlacementTop: {
    backgroundColor: "#616161",
    border: "1px solid #DFE7F5",
    fontSize: "5.6rem",
    fontWeight: "500",
    lineHeight: "3.4rem",
    fontFamily: "Inter Regular",
    maxWidth: "max-content",
    display: "flex",
    justifyContent: "center",
    color: "#ffffff",
    padding: 10,
    width: "280px",
    boxShadow: "none"
  },
  arrow: {
    color: "#616161",
    marginLeft: 8
  },
  content: {
    cursor: "pointer"
  }
}))
