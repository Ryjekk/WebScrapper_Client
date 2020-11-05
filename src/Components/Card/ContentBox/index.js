// contain

// top row place date music and heart ---> content HEAD
// bottotm row artist name /// maybe content Artist

import React from 'react';
import TagBox from '../TagBox'
import {TopRow, BottomRow, ContentWrapper, TopWrapper, IconDiv} from "./style";
import {Paragraph} from "../../../Styles";

import musicIcon from '../../../Assets/Icons/goOut.svg'

const ContentBox = props => {
    const {place, date, artist} = props;
    return (
        <ContentWrapper>
            <TopWrapper>
                <TopRow>
                    <Paragraph>{date}</Paragraph>
                    <Paragraph>{place}</Paragraph>
                    <IconDiv><img src={musicIcon}/></IconDiv>
                </TopRow>
                <BottomRow>{artist}</BottomRow>
            </TopWrapper>
            <TagBox/>
        </ContentWrapper>
    )
}

export default ContentBox;
