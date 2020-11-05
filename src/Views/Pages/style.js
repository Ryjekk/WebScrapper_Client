import styled from 'styled-components'
import {COLORS, QUERIES} from "../../Styles";

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
