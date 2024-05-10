import styled from "styled-components";
import {them} from "./Them";

export const GradientHoverLink = styled.a `
    position: relative;

    &:after {
        content: "";
        display: flex;
        width: 100%;
        height: 0.1em;
        background-image: ${them.color.mainGradient};
        position: absolute;
        bottom: 2px;
        left: 0;
        transform: scaleX(0);
        transition: 0.3s ease-in-out;
    }

    &:hover {
        text-decoration: underline;
        background-image: ${them.color.mainGradient};
        -webkit-background-clip: text;
        color: transparent;

        &:after {
            transform: scaleX(1);
        }
    }
`
export const GradientLink = styled.a`
    background-image: ${them.color.mainGradient};
    -webkit-background-clip: text;
    color: transparent;
    position: relative;
    @media ${them.media.tablet} {
        &:after {
            content: "";
            display: flex;
            width: 100%;
            height: 0.1em;
            background-image: ${them.color.mainGradient};
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

    }
`