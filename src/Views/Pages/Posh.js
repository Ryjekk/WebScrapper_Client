import React from 'react';
import {Container, Inner} from "../../Styles";
import NavBar from "../../Components/NavBar";
import {Parallax, ParallaxLayer} from "react-spring/renderprops-addons";
import {Back} from './style'
import PoshCard from "../../Components/PoshCard";
import WelcomePageParallax from "../../Components/WelcomePage/WelcomePageParallax";

const Posh = () => {
    return(
        <Container>
            <NavBar/>
            <Parallax pages={2} className="ClearSearchbar">
                <ParallaxLayer speed={0.5}>
                    <Back/>
                </ParallaxLayer >
            </Parallax>
            <WelcomePageParallax/>
            <Inner>
                <PoshCard/>
            </Inner>

        </Container>
    )
}

export default Posh;
