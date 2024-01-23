import styled from "@emotion/styled"
import { Box, Link } from "@mui/material"

export const TitleText = styled(Box)(() => ({
  "& > h2,h3,h4,h5,h6,div": {
    font: "normal normal normal 24px/28px Zilla Slab",
    // display: "flex",
    alignItems: "center",
    letterSpacing: "0px",
    color: "#222222",
    opacity: 1
  },
  "& > b": {
    font: "normal normal bold 24px/28px Zilla Slab",
    display: "flex",
    alignItems: "center",
    letterSpacing: "0px",
    color: "#222222",
    opacity: 1
  }
}))

export const LinkText = styled(Link)(() => ({
    textAlign: "right",
    font: "normal normal bold 14px/28px Roboto",
    color: "#A02817",
    textDecoration: "none",
    "&:hover": {
        textDecoration: "underline",
    }
}))
