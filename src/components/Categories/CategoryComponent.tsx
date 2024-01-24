import { Box, Grid } from "@mui/material";
import React from "react"
import TitleComponent from "../../../lib/TitleComponent";
import RenderImage from "../../../lib/renderImage";
import { TitleText } from "./Styles";
import { useRouter } from "next/router";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const CategoryComponent = (props: any) => {
    const router = useRouter()

    const handleNavigation = (item: any) => {
        router.push(item?.navigationUrl)
    }

    const scrollRight = () => {
        let container = document.getElementById("categoryGrid")
        sideScroll(container, 'right', 25, 100, 10);
    }

    const scrollLeft = () => {
        let container = document.getElementById("categoryGrid")
        sideScroll(container, 'left', 25, 100, 10);
    }

    const sideScroll = (element: any, direction: any, speed: any, distance: any, step: any) => {
        let scrollAmount = 0;
        var slideTimer = setInterval(function () {
            if (direction == 'left') {
                element.scrollLeft -= step;
            } else {
                element.scrollLeft += step;
            }
            scrollAmount += step;
            if (scrollAmount >= distance) {
                window.clearInterval(slideTimer);
            }
        }, speed);
    }

    return (
        <Box sx={{ backgroundColor: props?.fillComponent && props?.bgColor ? props?.bgColor : "transparent" }} pl={"16px"} pr={"16px"}>
            <TitleComponent {...props}></TitleComponent>
            <Grid display={"flex"} alignItems={"center"}>
                <ArrowCircleLeftIcon sx={{ color: "#22222296", fontSize: "32px", cursor: "pointer" }} onClick={scrollLeft} />
                <Grid display={"flex"} sx={{ overflowX: "auto", overflowY: "hidden" }} pb={3} id="categoryGrid">
                    {props?.data?.map((item: any) => {
                        return (
                            <Grid key={item?.title} mr={"12px"} ml={"12px"} sx={{ cursor: "pointer" }} onClick={() => handleNavigation(item)} id="itemGrid">
                                 {/* To increase the box size */}
                                <Box sx={{ width: "90px", height: "90px", backgroundColor: props?.itemBgColor, borderRadius: "50%" }}>
                                    <Grid padding={"15px"} className="section">
                                        {/* To increase the image size */}
                                        <RenderImage src={item?.desktopImg} width="60px" wrapper="div" />
                                    </Grid>
                                </Box>
                                <TitleText textAlign={"center"} width={"70px"}>{item?.title}</TitleText>
                            </Grid>
                        )
                    })}
                </Grid>
                <ArrowCircleRightIcon sx={{ color: "#22222296", fontSize: "32px", cursor: "pointer" }} onClick={scrollRight} />
            </Grid>
        </Box>
    )
}

export default CategoryComponent;


