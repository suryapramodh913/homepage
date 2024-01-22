import styled from "@emotion/styled"
import { Link, Typography } from "@mui/material"

export const TitleText = styled(Typography)(() => ({
    font: "normal normal bold 24px/28px Zilla Slab",
    display: "flex",
    alignItems: "center",
    letterSpacing: "0px",
    color: "#222222",
    opacity: 1
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
