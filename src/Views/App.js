import React, {useState, createContext} from 'react'
import {Container, Inner} from "../Styles";
import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";
import Card from "../Components/Card";
import {FetchData} from "../Helpers/fetcher";

export const myContext = createContext();

function App() {
    const [query, setQuery] = useState();
    const [data, setData] = useState();

    const getQuery = (e) => {
        const q = e.target.value;
        setQuery(q)
    }

    const getData = async query => {
        const dataArray = await FetchData(query)
        setData(dataArray);
    }

    return (
        <myContext.Provider value={data}>
            <Container>
                <NavBar/>
                <Inner>
                    <SearchBar getQuery={getQuery} getData={getData}/>
                    <Card/>
                </Inner>
            </Container>
        </myContext.Provider>
  );
}

export default App;
