import { Box, Grid } from "@mui/material";
import React from "react"
import TitleComponent from "../../../lib/TitleComponent";
import useMediaQuery from '@mui/material/useMediaQuery';
import ServiceCard from "./ServiceCard";

const ServiceComponent = (props: any) => {
    const matches = useMediaQuery('(min-width:780px)');

    return (
        <Box pl={"16px"} pr={"16px"} sx={{ backgroundColor: props?.fillComponent && props?.bgColor ? props?.bgColor : "transparent", padding: props?.bgColor ? "12px 20px 12px 20px" : "0" }}>
            <TitleComponent {...props}></TitleComponent>
            <Grid container={matches ? true : false} display={matches ? "" : "flex"} sx={{overflow: matches ? "unset" : "auto", paddingBottom: matches ? '0' : "24px"}}>
                {props?.data?.map((item: any) => {
                    return (
                        <Grid item lg={3} md={3} key={item?.title} padding={"0 12px"} sx={{minWidth: matches ? "auto" : "300px"}}>
                            <ServiceCard {...item}/>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}

export default ServiceComponent;


