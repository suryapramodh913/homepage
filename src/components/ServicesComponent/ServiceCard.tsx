import { Box, Button, Divider, Grid, Link, Typography } from "@mui/material";
import React from "react"
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardActionLinks, CardLayout, TitleText } from "./Styles";
import RenderImage from "../../../lib/renderImage";

const ServiceCard = (props: any) => {
    const matches = useMediaQuery('(min-width:780px)');

    return (
        <CardLayout>
            <CardContent>
                <TitleText gutterBottom variant="h5">
                    {props?.title}
                </TitleText>
                <Grid container pt={2} pb={2} sx={{
                    minHeight: "100px"
                }}>
                    <Grid item xs={3.5}>
                        {/* <Box sx={{ background: "#EFF4F8 0% 0% no-repeat padding-box", height: "59px", width: "59px", borderRadius: "50%" }}> */}
                        <RenderImage src={props?.desktopImg} width="59px" wrapper="div" />
                        {/* </Box> */}
                    </Grid>
                    <Grid item xs={8.5} pt={0.5}>
                        <Typography sx={{ font: "normal normal normal 12px/16px Roboto" }}>{props?.description}</Typography>
                    </Grid>
                </Grid>
                <Typography component={"div"} dangerouslySetInnerHTML={{
                    __html: props?.availableLocationRichText,
                }} paddingBottom={"15px"}></Typography>
            </CardContent>
            <CardActions sx={{ height: "40px", padding: "0px", borderTop: "1.5px solid #ccccccc7" }}>
                <CardActionLinks href={props?.primaryButtonLink}>{props?.primaryButtonText}</CardActionLinks>
                <Divider orientation="vertical" flexItem sx={{ border: "1px solid #ccccccc7" }} />
                <CardActionLinks href={props?.secondaryButtonLink}>{props?.secondaryButtonText}</CardActionLinks>
            </CardActions>
        </CardLayout>
    )
}

export default ServiceCard;


