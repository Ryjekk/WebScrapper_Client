import styled from 'styled-components'
import {COLORS} from "../../../Styles";

export const TagBox = styled.div`
  display: flex;
`;

export const TagInner = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${COLORS.colorG3};
  padding: 3px;
  font-family: Arial;
  font-size: 11px;
  margin: 2px 5px;
`;
