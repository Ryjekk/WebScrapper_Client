import React from 'react';
import DateButton from "../UI/DateButtons";
import {SearchBox, FormInput} from './style'
import {handleEnter} from "../../Helpers/enterHandler";

const SearchBar = props => {
    const {getQuery, getData} = props
    return (
        <SearchBox>
            <DateButton date='<<XXX'/>
            <form>
                <FormInput type="text" onChange={getQuery} onKeyDown={e => handleEnter(e, getData)}/>
            </form>
            <DateButton date='YYY>>'/>
        </SearchBox>
    )
}

export default SearchBar;
