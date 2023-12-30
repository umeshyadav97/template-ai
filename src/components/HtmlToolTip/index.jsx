import { Tooltip, styled, tooltipClasses } from "@mui/material"

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#475467",
    color: "#EAECF0",
    maxWidth: 317
    // fontSize: theme.typography.pxToRem(12),
    // border: "1px solid #dadde9"
  }
}))

export default HtmlTooltip
