import styled from "@emotion/styled"
import { Button, Grid, Link, Typography } from "@mui/material"

export const MiddleGrid = styled(Grid)(() => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
}))

export const TextGrid = styled(Link)(() => ({
    backgroundColor: "#FFFFFF",
    color: "#222222",
    height: "35px",
    padding: "0 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    cursor: "pointer",
    font: "normal normal bold 16px/16px Roboto"
}))

export const TagText = styled(Typography)(() => ({
    color: "#FFFFFF",
    padding: "20px 20px",
    font: "normal normal normal 14px/19px Roboto"
}))



export const LoadMoreButton = styled(Button)(() => ({
    border: "1px solid #222222", 
    borderRadius: "2px", 
    backgroundColor: "#FFFFFF", 
    textTransform: "capitalize", 
    cursor: "pointer" 
}))