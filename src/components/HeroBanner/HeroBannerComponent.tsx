import { Grid } from "@mui/material";
import React, { useState } from "react"
import useMediaQuery from '@mui/material/useMediaQuery';
import RenderBannerComponent from "./RenderBannerComponent";
import Slider from "react-slick";

const HeroBannerComponent = (props: any) => {
    const matches = useMediaQuery('(min-width:600px)');
    const [currentSlide, setCurrentSlide] = useState(0)

    const dataItems = props?.data
    var settings = {
        infinite: false,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        initialSlide: 0,
        touchMove: true,
        swipe: true,
        afterChange: (sliderIndex: number) => setCurrentSlide(sliderIndex),
        appendDots: (dots: any) => {
            return (
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "16px" }}>
                    <ul style={{ textAlign: 'center', paddingLeft: '0%', width: "90px", backgroundColor: "#22222296", borderRadius: "10px", height: "16px" }}>{dots.map((item: any, index: number) => {
                        return (
                            <li key={index}>{item.props.children}</li>
                        );
                    })}</ul>
                </div>
            )
        },
        customPaging: (index: any) => {
            return (
                <button 
                style={index === currentSlide ? {
                    outline: '0',
                    padding: "16px",
                    height: "8px",
                    width: "8px"
                } : {
                    padding: "16px",
                    height: "8px",
                    width: "8px"
                }}>
                    {index + 1}
                </button>
            )
        }
    };

    return (
        <>
            {matches ? <Grid container pl={"16px"} pr={"16px"}>
                {
                    dataItems?.length === 1 ?
                        <Grid item xs={12} lg={12}>
                            <RenderBannerComponent {...dataItems?.[0]} />
                        </Grid>
                        : dataItems?.length === 2 ?
                            <React.Fragment>
                                <Grid item xs={12} lg={8} pr={2}>
                                    <RenderBannerComponent {...dataItems?.[0]} />
                                </Grid>
                                <Grid item xs={12} lg={4}>
                                    <RenderBannerComponent {...dataItems?.[1]} sidebanner={true} />
                                </Grid>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <Grid item xs={12} sm={8} lg={8} pr={2}>
                                    <RenderBannerComponent {...dataItems?.[0]} />
                                </Grid>
                                <Grid item xs={12} sm={4} lg={4}>
                                    <Grid flexDirection={"column"}>
                                        <Grid pb={1}>
                                            <RenderBannerComponent {...dataItems?.[1]} sidebanner={true} columnGrid={true} />
                                        </Grid>
                                        <Grid pt={1}>
                                            <RenderBannerComponent {...dataItems?.[2]} sidebanner={true} columnGrid={true} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </React.Fragment>
                }
            </Grid> :
                <>
                    <Slider {...settings} className="banner">
                        {dataItems?.map((item: any) => {
                            return (
                                <RenderBannerComponent key={item?.title} {...item} />
                            )
                        })}
                    </Slider>
                </>}
        </>

    )
}

export default HeroBannerComponent;


