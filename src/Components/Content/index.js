import React, {useContext} from 'react';
import {myContext} from '../../Views/App'
import {Img, ContentWrap, IconDiv, Box} from "./style";
import {Paragraph, SmallHeading } from "../../Styles";
import Tag from "../UI/Tag";
import musicIcon from "../../Assets/Icons/goOut.svg";

const Content = () => {
    const data = useContext(myContext)

    const contentJsx = data.map(el => (
        <Box key={el.id}>
            <Img src={el.img}/>
            <SmallHeading>
                {el.artist[2]}
            </SmallHeading>
            <Paragraph>
                {el.artist[1]} / {el.artist[0]}
            </Paragraph>
            <IconDiv>
                <a href={el.mixcloud} target="_blank">
                    <img src={musicIcon} />
                </a>
            </IconDiv>
            {el.tags.map((el, i) => (
                <Tag tags={el ? el : "NO TAGS"}/>
            ))}
        </Box>
    ))

    return (
        <ContentWrap>
            {contentJsx}
        </ContentWrap>
    )
}

export default Content;
