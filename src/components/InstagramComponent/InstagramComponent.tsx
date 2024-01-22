import { Box, Grid, useMediaQuery } from "@mui/material";
import React, { useState } from "react"
import TitleComponent from "../../../lib/TitleComponent";
import InstagramCard from "./InstagramCard";
import { LoadMoreButton } from "./style";

const InstagramComponent = (props: any) => {
    const [items, setItems] = useState(1)
    const matches = useMediaQuery('(min-width:600px)');

    return (
        <Box sx={{ backgroundColor: props?.fillComponent && props?.bgColor ? props?.bgColor : "transparent" }} pl={"16px"} pr={"16px"}>
            <TitleComponent {...props}></TitleComponent>
            {matches ? <Grid container>
                {props?.data?.map((item: any, index: number) => {
                    return (
                        <InstagramCard {...item} index={index} key={item?.title} />
                    )
                })}
            </Grid>
                :
                <Grid container>
                    {props?.data?.slice(0, items)?.map((item: any, index: number) => {
                        return (
                            <InstagramCard {...item} index={index} key={item?.title} />
                        )
                    })}
                    <Grid textAlign={"center"} xs={12} pt={2}>
                        <LoadMoreButton onClick={() => { items >= props?.data?.length ? setItems(1) : setItems(props?.data?.length) }}>{items >= props?.data?.length ? "Load Less" : "Load More"}</LoadMoreButton>
                    </Grid>
                </Grid>
            }
        </Box>
    )
}

export default InstagramComponent;


