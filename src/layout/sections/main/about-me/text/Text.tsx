import React from 'react';
import styled from "styled-components";

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
    font-weight: 700;
    font-size: 58px;
    line-height: 70px;
    letter-spacing: 1px;

    p > span {
        background-image: linear-gradient(90.00deg, rgb(19, 176, 245), rgb(231, 15, 170));
        -webkit-background-clip: text;
        color: transparent;
    }
    @media (max-width: 620px)  {
text-align: center;

    }
`