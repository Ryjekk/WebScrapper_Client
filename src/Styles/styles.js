import styled from 'styled-components';

// Variables
export const COLORS = {
    colorBlack: '#030303',
    colorG4: '#565656',
    colorG3: '#7F8280',
    colorG2: '#A1A1A1',
    colorG1: '#E5E5E5',
    colorWhite: '#E5E7EB',
    colorComplementary: '#7535F5'
}

export const QUERIES = {
    medium: `min-width: 1092px`,
    small: `min-width: 689px`,
    maxWidth: `1500px`
};

// Text
export const Heading = styled.div`
    font-size: 45px;
    width: 100%;
    line-height: 149%;
    align-items: center;
    text-align: center;
    position: relative;
    letter-spacing: 0.1em;

    @media (${QUERIES.medium}) {
        font-size: 72px;
        letter-spacing: .4em;
    }
`;

export const MediumHeading = styled.h3`
    font-size: 34px;
    font-weight: 400;
    letter-spacing: 5px;
`;

export const SmallHeading = styled.h2`
    font-size: 18px;
    max-width: 700px;
    line-height: 149%;
    display: flex;
    text-align: left;
    letter-spacing: 0.1em;
`;

export const Paragraph = styled.p`
    font-size: 14px;
    line-height: 190%;
    letter-spacing: 0.05em;
    white-space: pre-wrap;

    @media (${QUERIES.medium}) {
        font-size: 16px;
        margin-top: 10px;
    }
`;

// Frames
export const Container = styled.div`
    height: 100vh;
    z-index: 3;
`;

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 13%;

    @media (${QUERIES.medium}) {
        padding: 100px 8%;
    }
`;

// Links
export const Options = styled.div`
    text-transform: uppercase;
    color: ${COLORS.colorG3};
    cursor: pointer;
    
    @media (${QUERIES.medium}) {
        font-size: 18px;
    }
`;

export const OptionsLink = styled(Options)`
    text-decoration: underline;
    letter-spacing: 1px;
`;
