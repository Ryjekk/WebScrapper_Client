import React from 'react';
import {ButtonWrapper, Button} from './style'

const DateButton = props => {
    const {date} = props
    return (
        <ButtonWrapper>
            <Button>{date}</Button>
        </ButtonWrapper>
    )
}

export default DateButton;
