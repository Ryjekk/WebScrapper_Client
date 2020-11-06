import styled from 'styled-components'
import {COLORS, QUERIES, CenterBox} from "../../Styles";
import bg from '../../Assets/img/lotm-posh-isolation-header.jpg'

// Schows
export const ScheduleWrapper = styled.div`
  margin:0 60px;
  padding-left: 10px;
  border-bottom: 1px groove grey;
  
  @media (${QUERIES.medium}) {
      display: flex;
      justify-content: space-between;
    }
`;

export const DayBox = styled.div`
  display: flex;
  justify-content: space-between; 
  margin: 0 60px;
`;

export const Day = styled.div`
  border: 2px groove grey;
  border-radius: 50%;
  padding: 7px;
   cursor: pointer;
   
   :hover {
    background-color: pink;
    color: ${COLORS.colorBlack};
    border: 2px solid ${COLORS.colorBlack};
   }
   
    @media (${QUERIES.medium}) {
       padding: 25px;
    }
`;

// Posh
export const Back = styled(CenterBox)`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-image: url(${bg});
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: contain; 
`;
