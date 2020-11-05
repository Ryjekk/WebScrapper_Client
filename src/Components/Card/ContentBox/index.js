import React, {useContext} from 'react';
import TagBox from '../TagBox'
import {TopRow, BottomRow, ContentWrapper, TopWrapper, IconDiv} from "./style";
import {Paragraph} from "../../../Styles";

import musicIcon from '../../../Assets/Icons/goOut.svg'

const ContentBox = props => {

    const {place, date, artist, mixcloud, tags} = props;
    return (
        <ContentWrapper>
            <TopWrapper>
                <TopRow>
                    <Paragraph>{date}</Paragraph>
                    <Paragraph>{place}</Paragraph>
                    <IconDiv>
                        <a href={mixcloud} target="_blank">
                            <img src={musicIcon} />
                        </a>
                    </IconDiv>
                </TopRow>
                <BottomRow>{artist}</BottomRow>
            </TopWrapper>
            <TagBox tags={tags}/>
        </ContentWrapper>
    )
}

export default ContentBox;
