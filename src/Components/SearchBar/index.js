import React from 'react';
import DateButton from "../UI/DateButtons";
import {SearchBox, FormInput} from './style'
// includes data button
// btn search btn

const SearchBar = () => {
    return (
        <SearchBox>
            <DateButton date='<<XXX'/>
            <form>
                <FormInput type="text"/>
            </form>
            <DateButton date='YYY>>'/>
        </SearchBox>
    )
}

export default SearchBar;
