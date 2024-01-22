import styled from "@emotion/styled"
import { Grid, Link, Typography } from "@mui/material"

export const TitleText = styled(Typography)<{$sidebanner: any; $matches: any}>(({ $sidebanner, $matches }) => ({
    font: !$matches ? "normal normal bold 14px/15px Zilla Slab" : $sidebanner ? "normal normal bold 23px/43px Zilla Slab" : "normal normal bold 30px/73px Zilla Slab",
    letterSpacing: "0px",
    opacity: 1,
}))

export const SubTitleText = styled(Typography)<{$sidebanner: any; $matches: any}>(({  $sidebanner, $matches  }) => ({
    font: !$matches ? "normal normal bold 25px/26px Zilla Slab" : $sidebanner ? "normal normal bold 30px/33px Zilla Slab" : "normal normal bold 41px/43px Zilla Slab",
    letterSpacing: "0px",
    opacity: 1,
    paddingTop: "8px",
    paddingBottom: "32px",
}))

export const LinkText = styled(Link)<{$sidebanner: any; $matches: any}>(({ $sidebanner, $matches }) => ({
    font: !$matches ? "normal normal normal 19px/25px Roboto" : $sidebanner ? "normal normal normal 16px/23px Roboto" : "normal normal normal 26px/34px Roboto",
    letterSpacing: "0px",
    opacity: 1,
    cursor: "pointer",
    textDecoration: "none",
    "&:hover": {
        textDecoration: 'underline'
    }
}))

export const ContentGrid = styled(Grid)<{ $textColor: any; $verticalAlignment: any; $horizontalAlignment: any }>(({ $textColor, $verticalAlignment, $horizontalAlignment }) => ({
    color: $textColor,
    top: $verticalAlignment === "top"
        ? "22px"
        : 'unset',
    textAlign: $horizontalAlignment === "left" ? "left" : "right",
    left: $horizontalAlignment === "left"
        ? "22px"
        : "unset",
    bottom: $verticalAlignment === "bottom"
        ? "22px"
        : 'unset',
    right: $horizontalAlignment === "right"
        ? "22px"
        : "unset"
}))
