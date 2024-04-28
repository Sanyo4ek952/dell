import React from 'react';
import styled from "styled-components";

type TitleTypeProps = {
    mainTitle:string
    subTitle:string
    marginBottom?:string
}
export const Title = (props:TitleTypeProps) => {
    return (
        <StyledTitle marginBottom={props.marginBottom}>
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
    margin-bottom: ${props => props.marginBottom};

    h2 {
        font-weight: 700;
        font-size: 48px;
    }

    h3 {
        font-size: 32px;
        color: rgb(167, 167, 167)
    }
`

