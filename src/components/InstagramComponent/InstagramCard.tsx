import { Box, Grid } from "@mui/material";
import React, { useState } from "react"
import { useRouter } from "next/router";
import { MiddleGrid, TagText, TextGrid } from "./style";

const InstagramCard = (props: any) => {
    const router = useRouter()
    const [display, setDisplay] = useState<any>(null)

    const showButton = (e: any, index: number) => {
        e.preventDefault()
        setDisplay(index)
    }

    const hideButton = (e: any, index: number) => {
        e.preventDefault()
        setDisplay(null)
    }

    const handleNavigation = () => {
        router.push(props?.navigationUrl)
    }


    return (
        <Grid item lg={3} sm={12} md={3} xs={12} pr={2}
            onMouseEnter={(e) => showButton(e, props?.index)}
            onMouseLeave={(e) => hideButton(e, props?.index)} position={"relative"}>
            <Box component={"img"} src={props?.desktopImg} width={"100%"} sx={{ opacity: props?.index === display ? 0.7 : "unset", position: "relative" }} />
            {props?.index === display && <MiddleGrid>
                <TextGrid onClick={handleNavigation}>{props?.title}</TextGrid>
                <TagText>{props?.tagLink}</TagText>
            </MiddleGrid>}
        </Grid>

    )
}

export default InstagramCard;


