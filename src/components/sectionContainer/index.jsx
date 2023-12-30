import { styled } from "@mui/system"

const SectionContainer = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "auto 1fr" // 2-column grid on larger screens
  }
}))

export default SectionContainer
