import { Box, Grid } from "@mui/material";
import React, { useState } from "react"
import TitleComponent from "../../../lib/TitleComponent";
import RenderImage from "../../../lib/renderImage";
import { useRouter } from "next/router";
import Slider from "react-slick";

const CategoryComponent = (props: any) => {
    const router = useRouter()

    var settings = {
        infinite: false,
        dots: false,
        arrows: false,
        slidesToShow: 7,
        slidesToScroll: 1,
        swipeToSlide: true,
        initialSlide: 0,
        touchMove: true,
        swipe: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 7,
                slidesToScroll: 3,
                initialSlide: 0
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                initialSlide: 0
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            }
          ]
    };

    const handleNavigation = (item: any) => {
        router.push(item?.navigationUrl)
    }

    return (
        <Box sx={{ backgroundColor: props?.fillComponent && props?.bgColor ? props?.bgColor : "transparent" }} pl={"16px"} pr={"16px"}>
            <TitleComponent {...props}></TitleComponent>
                <Slider {...settings} className="brandsComponentSlider">
                    {props?.data?.map((item: any) => {
                        return (
                            <Grid key={item?.title} mr={"12px"} ml={"12px"} mt={"12px"} sx={{ cursor: "pointer" }} onClick={() => handleNavigation(item)} id="itemGrid">
                                <Box sx={{ width: "125px", height: "125px", boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)", backgroundColor: props?.itemBgColor, borderRadius: "50%", paddingTop: "15px", "&:hover": {boxShadow: "0.5px 1.5px 9px 7px #dddddd"}  }}>
                                    <Grid className="brandsImageGrid">
                                        <RenderImage src={item?.desktopImg} width="95px" wrapper="div" />
                                    </Grid>
                                </Box>
                            </Grid>
                        )
                    })}
                </Slider>
        </Box>
    )
}

export default CategoryComponent;


