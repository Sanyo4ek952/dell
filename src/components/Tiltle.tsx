import React from 'react';
import styled from "styled-components";
import {adaptiveFont} from "../styles/GlobalSyles";

type TitleTypeProps = {
    mainTitle:string
    subTitle:string
    marginBottom?:string
}
export const Title = (props:TitleTypeProps) => {
    return (
        <StyledTitle >
            <h2>{props.mainTitle}</h2>
            <h3>{props.subTitle}</h3>
        </StyledTitle>
    );
};

type StyledTitleTypeProps = {
    marginBottom?:string
}

const StyledTitle = styled.div<StyledTitleTypeProps>`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 50px;
    line-height: 1.1;
    align-items: center;
    margin-bottom: ${adaptiveFont(100,50)};

    h2 {
        font-weight: 700;
        font-size: ${adaptiveFont(48,36)};
    }

    h3 {
        font-size: ${adaptiveFont(36,20)};
        color: rgb(167, 167, 167)
    }
`

