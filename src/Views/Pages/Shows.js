import React, {useEffect, useState} from "react";
import {CenterBox, Container, Inner, MediumHeading, Paragraph, SmallHeading} from "../../Styles";
import {ScheduleWrapper, Day, DayBox} from './style';
import NavBar from "../../Components/NavBar";
import {FetchSchow} from './../../Helpers/fetcher';

function Shows() {
    const [shows, setShows] = useState([]);
    const [oryginal, setOryginal] = useState([]);

    useEffect( () => {
        const fetchOnce = async () => {
            const dataArray = await FetchSchow()
            setOryginal(dataArray)
            setShows(dataArray);
        }
        fetchOnce()
    }, [])

    // TODO fix it - remove unecesary state, add button for all days
    const fethWithQuery = (param) => {
        const dataArray = oryginal.find(el => el.day.toLowerCase().includes(param))
        setShows([dataArray]);
    }

    const plan = shows.map(el => (
        <>
            <MediumHeading style={{marginLeft: "20px"}}>{el.day}:</MediumHeading>
            {el.shows.map(el => (
                <ScheduleWrapper>
                    <p style={{color: "pink"}}>{el.time}</p>
                    <SmallHeading style={{color: "dimgray"}}>{el.artist}</SmallHeading>
                    <Paragraph><a href={el.link}>Link</a></Paragraph>
                </ScheduleWrapper>
            ))}
        </>
    ))

    return (
        <Container>
            <NavBar/>
            {/*// TODO Strip it into a component*/}
            <Inner>
                <CenterBox>
                    <MediumHeading>Shows Schedule</MediumHeading>
                </CenterBox>
                {/* TODO Takse it to seperate file + loop*/}
                <DayBox>
                    <Day onClick={() => fethWithQuery('monday')}>MD</Day>
                    <Day onClick={() => fethWithQuery('tuesday')}>TD</Day>
                    <Day onClick={() => fethWithQuery('wednesday')}>WD</Day>
                    <Day onClick={() => fethWithQuery('thursday')}>THD</Day>
                    <Day onClick={() => fethWithQuery('friday')}>FR</Day>
                    <Day onClick={() => fethWithQuery('saturday')}>SAT</Day>
                    <Day onClick={() => fethWithQuery('sunday')}>SUN</Day>
                </DayBox>
                {plan}
            </Inner>
        </Container>
    );
}

export default Shows;
