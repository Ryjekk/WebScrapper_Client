import styled from 'styled-components';
import {QUERIES, MediumHeading, ParallaxBox, CenterBox} from '../../../Styles';

export const WelcomeCont = styled(ParallaxBox)`
    width: 100vw;
    height: 100vh;
    padding: 100px 0 50px 0;
   
    @media (${QUERIES.medium}) {
        padding: 100px 0;
    }
`;

export const WelcomeBox = styled(CenterBox)`
    flex-direction: column;
    background-color: rgba(12, 12, 12, .7);
    padding: 25px 10px;

    @media (${QUERIES.medium}) {
        width: 50%;
        padding: 50px 0;
    }
`;

export const WelcomeHeading = styled(MediumHeading)`
    margin-bottom: 0;
`;

