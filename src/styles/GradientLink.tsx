import styled from "styled-components";

export const GradientHoverLink = styled.a`
    position: relative;

    &:after {
        content: "";
        display: flex;
        width: 100%;
        height: 0.1em;
        background-image: linear-gradient(90.00deg, rgb(19, 176, 245), rgb(231, 15, 170));
        position: absolute;
        bottom: 2px;
        left: 0;
        transform: scaleX(0);
        transition: 0.3s ease-in-out;
    }

    &:hover {
        text-decoration: underline;
        background-image: linear-gradient(90.00deg, rgb(19, 176, 245), rgb(231, 15, 170));
        -webkit-background-clip: text;
        color: transparent;

        &:after {
            transform: scaleX(1);
        }
    }
`
export const GradientLink = styled.a`
    background-image: linear-gradient(90.00deg, rgb(19, 176, 245), rgb(231, 15, 170));
    -webkit-background-clip: text;
    color: transparent;
    position: relative;

    &:after {
        content: "";
        display: flex;
        width: 100%;
        height: 0.1em;
        background-image: linear-gradient(90.00deg, rgb(19, 176, 245), rgb(231, 15, 170));
        position: absolute;
        bottom: 2px;
        left: 0;
        transform: scaleX(0);
        transition: 0.3s ease-in-out;

    }

    &:hover {
        text-decoration: underline;
        &:after {

            transform: scale(1);

        }
    }
`