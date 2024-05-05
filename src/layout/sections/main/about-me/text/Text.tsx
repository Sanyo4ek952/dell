import React from 'react';
import styled from "styled-components";
import {Themes} from "../../../../../styles/Themes";
import {adaptiveFont} from "../../../../../styles/GlobalSyles";
const Text = () => {
    return (
        <StyledText>
            <p>Hi 👋,</p>
            <p>My name is</p>
            <p><span>Alexander</span></p>
            <h1>I'm a frontend developer</h1>
        </StyledText>
    );
};

export default Text;


const StyledText = styled.div`


    //font-size: calc( (100vw - 320px)/(1280 - 320) * (58 - 35) + 35px);
    //font-size: calc( (min(100vw, 1210px) - 480px)/(1210 - 480) * (58 - 40) + 40px);
    font-size: ${adaptiveFont(  58,40,)};
    font-weight: 700;
    line-height: 1.4;
    letter-spacing: 1px;

    p > span {
        background-image: ${Themes.color.mainGradient};
        -webkit-background-clip: text;
        color: transparent;
    }

    @media (max-width: 620px) {
        text-align: center;

    }
`