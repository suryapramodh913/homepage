import React from "react"
import { useRouter } from "next/router";
import { ContentCard, LinkText, SubTitleText, TitleText } from "./Style";
import { Box, useMediaQuery } from "@mui/material";

const CardItem = (props: any) => {
    const matches = useMediaQuery('(min-width:780px)');
    const router = useRouter()

    const handleNavigation = (item: any) => {
        router.push(item?.navigationUrl)
    }

    return (
        <React.Fragment>
            <Box component={"img"} alt={props?.altText} src={props?.desktopImg} sx={{
                width: "100%",
                borderTopRightRadius: "5px",
                borderTopLeftRadius: "5px"
            }} />
            <ContentCard $matches={matches}>
                <TitleText>{props?.title}</TitleText>
                <SubTitleText>{props?.subTitle}</SubTitleText>
                <LinkText onClick={() => handleNavigation(props)}>{props?.linkText}</LinkText>
            </ContentCard>
        </React.Fragment>

    )
}

export default CardItem;


