import styled from 'styled-components';
import {COLORS} from "../../../Styles";

export const ButtonWrapper = styled.div`
  padding: 5px;
`;

export const Button = styled.div`
  letter-spacing: 2px;
  
  :hover{
    color: ${COLORS.colorG2};
    border-bottom: 1px solid ${COLORS.colorG3};
    cursor: pointer;
  }
`;
