import styled from "@emotion/styled"
import { Box, Link, Typography } from "@mui/material"

export const TitleText = styled(Typography)(() => ({
    font: "normal normal bold 20px/24px Zilla Slab",
    letterSpacing: "0px",
    color: "#A02817",
    opacity: 1
}))

export const SubTitleText = styled(Typography)(() => ({
    font: "normal normal normal 14px/18px Roboto",
    letterSpacing: "0px",
    color: "#222222",
    opacity: 1,
    paddingTop: "8px",
    paddingBottom: "8px"
}))

export const LinkText = styled(Link)(() => ({
    font: "normal normal bold 14px/18px Roboto",
    letterSpacing: "0px",
    color: "#A02817",
    opacity: 1,
    cursor: "pointer",
    textDecoration: "none",
    "&:hover": {
        textDecoration: 'underline'
    }
}))

export const ContentCard = styled(Box)<{$matches: any}>(({$matches}) => ({
    backgroundColor: "#FFFFFF",
    minHeight: $matches ? "110px" : "150px",
    padding: "15px",
    borderBottomRightRadius: "5px",
    borderBottomLeftRadius: "5px"
}))