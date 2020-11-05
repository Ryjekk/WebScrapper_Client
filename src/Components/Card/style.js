import styled from "styled-components";
import {COLORS, QUERIES} from "../../Styles";

export const CenterBox = styled.div`
    display: flex;
    flex-direction: column;
    //justify-content: center;
    //align-items: center;
    //flex-direction: column;
    margin: 0 auto;
    background-color: rgba(12, 12, 12, .7);
    padding: 20px 10px;
    border: 1px solid ${COLORS.colorG4};
   
    @media (${QUERIES.medium}) {
        flex-direction: row;
        width: 50%;
        padding: 10px 10px 7px 10px;
        //padding: 50px 0;
    }
`;
