import React from 'react';
import styled from "styled-components";
import {StyleContainer} from "../../../../styles/StyleContainer";
import {GradientLink} from "../../../../styles/GradientLink";

export const Email = () => {
    return (
        <StyledEmail>
            <StyleContainer paddingBottom={"0" } paddingTop={"0"}>
                <p>For any questions please mail me:</p>
                <GradientLink href="mailto:anyo4ek952@gmail.com">Sanyo4ek952@gmail.com</GradientLink>
            </StyleContainer>
        </StyledEmail>
    );
};


const StyledEmail = styled.div`
    font-weight: 700;
    font-size: 58px;
    line-height: 70px;
    letter-spacing: -1px;

    p {
        color: rgb(204, 204, 204);
    }
    
    ${StyleContainer} {
        text-align: center;
    }

    @media (max-width: 820px) {
        font-weight: 700;
        font-size: 35px;
        line-height: 50px;
    }
    @media (max-width: 420px) {
        font-weight: 700;
        font-size: 25px;
        line-height: 50px;
    }
`