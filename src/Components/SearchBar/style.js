import styled from 'styled-components';
import {COLORS} from "../../Styles";

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;


export const FormInput = styled.input`
    color: ${COLORS.colorG3};
    padding: 10px 0;
    font-size: 16px;
    margin: 15px 0 15px 0;
    border: none;
    border-bottom: 1px solid ${COLORS.colorG4};
    outline: none;
    background: rgba(255,255,255, .01);
    border-radius: 5px;
    padding-left: 15px;
    width: 100%;
    
    &::after {
        color: orangered;
        content: "*";
        opacity: 1;
        margin: -15px 0 0 4px;
    }
`;
