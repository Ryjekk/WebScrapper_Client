import React, {useState, createContext, useEffect} from 'react'
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import {Container, Inner} from "../Styles";
import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";
import WelcomePage from "../Components/WelcomePage";
import WelcomePageParallax from "../Components/WelcomePage/WelcomePageParallax";
import {FetchData} from "../Helpers/fetcher";
import Content from "../Components/Content";

export const myContext = createContext();

function App() {
    const [query, setQuery] = useState();
    const [data, setData] = useState([]);

    const getQuery = (e) => {
        const q = e.target.value;
        setQuery(q)
    }

    const getData = async query => {
        const dataArray = await FetchData(query)
        setData(dataArray);
    }

    useEffect( () => {
        const fetchOnce = async () => {
            const dataArray = await FetchData('')
            setData(dataArray);
        }
        fetchOnce()
    }, [])

    return (
        <myContext.Provider value={data}>
            <Container>
                <NavBar/>
                <Parallax pages={2} className="ClearSearchbar">
                    <ParallaxLayer speed={0.5}>
                        <WelcomePage />
                    </ParallaxLayer >
                </Parallax>
                <WelcomePageParallax/>
                <Inner>
                    <SearchBar getQuery={getQuery} getData={getData}/>
                    <Content/>
                </Inner>
            </Container>
        </myContext.Provider>
  );
}

export default App;
