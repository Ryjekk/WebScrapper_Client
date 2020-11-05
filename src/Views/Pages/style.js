import styled from 'styled-components'
import {QUERIES} from "../../Styles";

export const ScheduleWrapper = styled.div`
  margin:0 60px;
  padding-left: 10px;
  border-bottom: 1px groove grey;
  
  @media (${QUERIES.medium}) {
      display: flex;
      justify-content: space-between;
    }
`;
