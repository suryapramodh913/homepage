import React from "react"
import { useRouter } from "next/router";
import { ContentCard, ImageBox, LinkText, SubTitleText, TitleText } from "./Style";
import { useMediaQuery } from "@mui/material";

const CardItem = (props: any) => {
    const matches = useMediaQuery('(min-width:780px)');
    const router = useRouter()

    const handleNavigation = (item: any) => {
        router.push(item?.navigationUrl)
    }

    return (
        <React.Fragment>
            <ImageBox component={"img"} alt={props?.altText} src={props?.desktopImg} />
            <ContentCard matches={matches}>
                <TitleText>{props?.title}</TitleText>
                <SubTitleText>{props?.subTitle}</SubTitleText>
                <LinkText onClick={() => handleNavigation(props)}>{props?.linkText}</LinkText>
            </ContentCard>
        </React.Fragment>

    )
}

export default CardItem;


