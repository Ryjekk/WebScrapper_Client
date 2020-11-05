import styled from 'styled-components';
import { CenterBox } from "../../Styles";
import bg from '../../Assets/img/bg.jpg'

export const Overlay = styled(CenterBox)`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-image: url(${bg});
    background-position: center;
`;

