import React from 'react';
import styled from "styled-components";
import {GradientHoverLink, GradientLink} from "../../styles/GradientLink";

type MenuPropsType = {
    items: Array<string>
}


export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu>
            <ul>
                {props.items.map((item, key) => {
                        return (
                            <li key={key}>
                                <GradientHoverLink href="">
                                    {item}
                                </GradientHoverLink>
                            </li>
                        )
                    }
                )
                }
            </ul>
            <button><span></span></button>
        </StyledMenu>
    )
}

const StyledMenu = styled.nav`

ul{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 50px;
    row-gap: 15px;
    justify-content: center;
    @media (max-width: 440px) {
        display: none;

    }
}
    ${GradientLink} {
        font-weight: 500;
        font-size: 20px;
        line-height: 1.3;

        &:hover {
            text-decoration: underline;
            color: rgb(231, 15, 170)
        }
    }

    button {
        height: 20px;

        & span {
            display: inline-block;
            background-color: white;
            width: 30px;
            height: 2px;
            position: relative;

            &::before,
            &::after {
                content: "";
                display: inline-block;
                background-color: white;
                width: 30px;
                height: 2px;
                position: absolute;
                left: 0;
            }

            &::after {
                top: -8px;
            }

            &::before {
                bottom: 16px;
            }
        }

        @media (min-width: 440px) {
            display: none;

        }
    }
    
`

