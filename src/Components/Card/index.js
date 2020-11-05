// card whih

//pic on left
// <>
// content boc pon ight top
// tags right bottom
// </>


import React from 'react';
import {CenterBox} from "./style";
import ContentBox from "./ContentBox";

const Card = () => {
    return (
        <CenterBox>
            <img src='https://media.ntslive.co.uk/resize/400x400/3d4634ee-324e-4bb4-b562-395422125466_1557360000.jpeg'/>
            <ContentBox place="PPP" date="11.11.11" artist="AAAA"/>
        </CenterBox>
    )
}

export default Card;
