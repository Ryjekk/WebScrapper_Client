import React from 'react';
import {Heading, Inner, Paragraph} from "../../../Styles";
import {AboutWrapper, BannerImg} from './style'
import banner from '../../../Assets/img/banner.jpg'

const AboutContent = () => {
    return (
        <Inner>
            <Heading>About</Heading>
            <AboutWrapper>
                <Paragraph>
                    NTS Radio (also known as NTS Live or simply NTS) is an online radio station and media platform based in the Hackney area of London, England. The station was founded in April 2011 by Femi Adeyemi[1] and produces a diverse range of live radio shows, digital media and live music based events.
                </Paragraph>
                <Paragraph>
                    The Guardian described the radio as "somewhere between BBC 6 Music’s diversity and pirate radio’s DIY spirit"[2] and has built a reputation for championing underground scenes and a leading voice in alternative culture. Music Business Worldwide reported in early 2020 that NTS has 1.5 million monthly listeners.[3]
                </Paragraph>
                <Paragraph>
                    NTS has live stations in London, Manchester, Los Angeles and Shanghai.[4][5][2][6] According to the Institute of Contemporary Arts, "NTS Radio is a family of like-minded and passionate individuals, dedicated to supporting exciting music and culture through online radio and events. NTS uncovers the best of the musical past, celebrates the present and cultivates the future of the underground music scene, and prides itself on being open-minded and experimental".[7]
                </Paragraph>
                <BannerImg src={banner}/>
            </AboutWrapper>
        </Inner>
    )
}

export default AboutContent;
