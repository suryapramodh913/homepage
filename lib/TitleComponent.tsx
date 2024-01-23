import { Grid } from "@mui/material";
import { LinkText, TitleText } from "./style";
import React from "react";
import RenderImage from "./renderImage";

const TitleComponent = (props: any) => {
    return (
        <React.Fragment>
            {(props?.title || props?.linktext) &&
                <Grid display="flex" justifyContent={"space-between"} mb={"20px"}>
                    <Grid display="flex">
                    {props?.titleTextLogo && <RenderImage src={props?.titleTextLogo} width="30px" wrapper="div"/>}
                    <TitleText  dangerouslySetInnerHTML={{
                    __html: props?.title,
                  }}></TitleText>
                  </Grid>
                    {props?.linktext && <LinkText href={props?.linkTextUrl}>{props?.linktext}</LinkText>}
                </Grid>
            }
        </React.Fragment>
    )
}

export default TitleComponent;


