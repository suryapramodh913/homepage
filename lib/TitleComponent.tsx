import { Grid } from "@mui/material";
import { LinkText, TitleText } from "./style";
import React from "react";
import RenderImage from "./renderImage";

const TitleComponent = (props: any) => {
    return (
        <React.Fragment>
            {(props?.title || props?.linktext) &&
                <Grid display="flex" justifyContent={"space-between"} mb={"20px"}>
                    <TitleText variant="h5">{props?.titleTextLogo && <RenderImage src={props?.titleTextLogo} width="30px" wrapper="div"/>}{props?.title}</TitleText>
                    {props?.linktext && <LinkText href={props?.linkTextUrl}>{props?.linktext}</LinkText>}
                </Grid>
            }
        </React.Fragment>
    )
}

export default TitleComponent;


