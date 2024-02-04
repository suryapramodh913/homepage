import styled from "@emotion/styled"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import Card from '@mui/material/Card';

export const CardLayout = styled(Card)(({ }) => ({
    width: "100%",
    margin: "0 12px",
}))

export const TitleText = styled(Typography)(({ }) => ({
    font: "normal normal bold 16px/16px Roboto",
    letterSpacing: 0,
    color: "#222222",
    opacity: 1
}))

export const CardActionLinks = styled(Link)(({ }) => ({
    width: "50%",
    textAlign: "center",
    textDecoration: "none",
    color: "#B5121B",
    textTransform: "capitalize",
    font: 'normal normal bold 14px/19px Roboto',
    cursor: "pointer"
}))
