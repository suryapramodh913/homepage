import { Box, Grid } from "@mui/material";
import React from "react"
import TitleComponent from "../../../lib/TitleComponent";
import useMediaQuery from '@mui/material/useMediaQuery';
import Slider from "react-slick";
import CardItem from "./CardItem";

const ThreeCardGridComponent = (props: any) => {
    const matches = useMediaQuery('(min-width:780px)');
    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        initialSlide: 0,
        centerMode: true,
        touchMove: true,
        swipe: true,
        centerPadding: "20%"
    };

    return (
        <Box pl={"16px"} pr={"16px"} sx={{ backgroundColor: props?.fillComponent && props?.bgColor ? props?.bgColor : "transparent", padding: props?.bgColor ? "12px" : "0" }}>
            <TitleComponent {...props}></TitleComponent>
            {matches ?
                <Grid container>
                    {props?.data?.map((item: any) => {
                        return (
                            <Grid item lg={4} md={4} key={item?.title} pr={3}>
                                <CardItem {...item} />
                            </Grid>
                        )
                    })}
                </Grid>
                :
                <Slider {...settings} className="card-grid">
                    {props?.data?.map((item: any) => {
                        return (
                            <Grid key={item?.title} pr={3}>
                                <CardItem {...item} />

                            </Grid>
                        )
                    })}
                </Slider>
            }
        </Box>
    )
}

export default ThreeCardGridComponent;


