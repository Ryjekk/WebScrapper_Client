import React, {useEffect, useState} from "react";
import {CenterBox, Container, Inner, MediumHeading, Paragraph, SmallHeading} from "../../Styles";
import {ScheduleWrapper} from './style';
import NavBar from "../../Components/NavBar";
import {FetchSchow} from './../../Helpers/fetcher';

function Shows() {
    const [shows, setShows] = useState([]);

    useEffect( () => {
        const fetchOnce = async () => {
            const dataArray = await FetchSchow()
            setShows(dataArray);
        }
        fetchOnce()
    }, [])

    const plan = shows.map(el => (
        <>
            <MediumHeading>{el.day}:</MediumHeading>
            {el.shows.map(el => (
                <ScheduleWrapper>
                    <p style={{color: "pink"}}>{el.time}</p>
                    <SmallHeading style={{color: "dimgray", paddingLeft: "20px"}}>{el.artist}</SmallHeading>
                    <Paragraph><a href={el.link}>Link</a></Paragraph>
                </ScheduleWrapper>
            ))}
        </>
    ))

    return (
        <Container>
            <NavBar/>
            <Inner>
                <CenterBox>
                    <MediumHeading>Shows Schedule</MediumHeading>
                </CenterBox>
                {plan}
            </Inner>
        </Container>
    );
}

export default Shows;
