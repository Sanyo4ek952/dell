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
        color: blueviolet;
    }
    @media (max-width: 620px)  {
text-align: center;

    }
`