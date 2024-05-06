import React from 'react';
import styled from "styled-components";
import {GradientHoverLink, GradientLink} from "../../styles/GradientLink";
import {NavLink} from "react-router-dom";

type MenuPropsType = {
    items: Array<{title: string, href: string}>
}


export const Menu = ( props:MenuPropsType) => {
    return (
        <StyledMenu>
            <ul>
                {props.items.map((item, key) => {
                        return (
                            <li key={key}>
                                <NavLink to={item.href}>
                                    <GradientHoverLink href="">
                                    {item.title}
                                </GradientHoverLink>
                                </NavLink>
                            </li>
                        )
                    }
                )
                }
            </ul>
        </StyledMenu>
    )

}

const StyledMenu = styled.nav`

    ul {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        column-gap: 50px;
        row-gap: 15px;
        justify-content: center;
        @media (max-width: 768px) {
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
    
}

`

