import React from "react"
import { Box, Grid, useMediaQuery } from "@mui/material";
import { ContentGrid, LinkText, SubTitleText, TitleText } from "./styles";
import { useRouter } from "next/router";

const RenderBannerComponent = (props: any) => {
    const matches = useMediaQuery('(min-width:600px)');
    const router = useRouter()

    const handleNavigation = () => {
        router.push(props?.navigationUrl)
    }

    return (
        <Grid container position={"relative"}>
            <Box component={"img"} borderRadius={matches ? "5px" : "0px"} width={"100%"} height={!matches ? "100%" : props?.columnGrid ? "240px" : "500px"} src={matches ? props?.desktopImg : props?.mobileImg} />
            <ContentGrid flexDirection={"column"} position={"absolute"}
                maxWidth={props?.sidebanner ? "60%" : "50%"}
                $textColor={props?.textColor}
                $verticalAlignment={props?.verticalAlignment}
                $horizontalAlignment={props?.horizontalAlignment}>
                <TitleText $sidebanner={props?.sidebanner} $matches={matches}>
                    {props?.title}
                </TitleText>
                <SubTitleText $sidebanner={props?.sidebanner} $matches={matches}>
                    {props?.subTitle}
                </SubTitleText>
                <LinkText $matches={matches} color={props?.textColor} onClick={handleNavigation} $sidebanner={props?.sidebanner}>
                    {props?.linkText}
                </LinkText>
            </ContentGrid>
        </Grid>
    )
}

export default RenderBannerComponent;


