import React from 'react';
import {WelcomeBox, WelcomeCont, WelcomeHeading} from './style';
import {Paragraph} from "../../../Styles";


function WelcomePageParallax() {
    return (
        <WelcomeCont>
            <WelcomeBox>
                <WelcomeHeading>Hello</WelcomeHeading>
                <Paragraph>
                    Welcome to WebScrapper which is scrapping www.nts.com
                    <br/>
                    This page was made in learning purposes
                    <br/>
                    Made during Hackathon 2020 at SALT in Stockholm
                </Paragraph>
            </WelcomeBox>
        </WelcomeCont>
    );
}

export default WelcomePageParallax;
