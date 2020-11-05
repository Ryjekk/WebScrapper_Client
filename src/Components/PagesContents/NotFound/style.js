import styled from 'styled-components';
import {QUERIES, Paragraph} from "../../../Styles";

export const OverlayWrapper = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    height:100vh;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (${QUERIES.medium}) {
        padding: 0;
    }
`;

export const Paragraph404 = styled(Paragraph)`
  text-align: center;
`
