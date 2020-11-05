import styled from "styled-components";
import {QUERIES} from "../../Styles";

export const Box = styled.div`
    margin: 17px;
    padding: 17px 0;
    display: flex;
    flex-direction: column;
    
    @media (${QUERIES.small}) {
        width: 30%;
        max-width: 50%;
        margin: 0 17px;
   }
`;

export const ContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    
   @media (${QUERIES.small}) {
        padding: 0 8%;
        flex-direction: row;
   }
`;

export const Img = styled.img`
    align-self: center;
    height: 300px;
    width: 100%;
    filter: grayscale(60%);
 `;

export const IconDiv = styled.div`
  width: 30px;
  height: 10px;
`;

