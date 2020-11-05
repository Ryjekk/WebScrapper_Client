import styled from "styled-components";
import {COLORS, QUERIES} from "../../Styles";

export const CenterBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    background-color: rgba(12, 12, 12, .7);
    padding: 20px 10px;
    border: 1px solid ${COLORS.colorG4};
   
    @media (${QUERIES.medium}) {
        flex-direction: row;
        width: 50%;
        padding: 10px;
        //padding: 50px 0;
    }
`;
