import React from "react";
import {Container} from "../../Styles";
import NavBar from "../../Components/NavBar";
import AboutContent from "../../Components/PagesContents/AboutContent";

function About() {
    return (
        <Container>
            <NavBar/>
            <AboutContent/>
        </Container>
    );
}

export default About;
