import styled from "styled-components";

export const GradientHoverLink = styled.a`
    &:hover {
        text-decoration: underline;
        background-image: linear-gradient(90.00deg, rgb(19, 176, 245), rgb(231, 15, 170));
        -webkit-background-clip: text;
        color: transparent;
    }
`
export const GradientLink = styled.a`
    background-image: linear-gradient(90.00deg, rgb(19, 176, 245), rgb(231, 15, 170));
    -webkit-background-clip: text;
    color: transparent;

    &:hover {
        text-decoration: underline;
    }
`