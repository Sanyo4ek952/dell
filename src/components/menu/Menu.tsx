import React from 'react';
import styled from "styled-components";

type MenuPropsType = {
    items: Array<string>
}


export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu>
            {props.items.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href="">
                                {item}
                            </a>
                        </li>
                    )
                }
            )
            }
        </StyledMenu>
    )
}

const StyledMenu = styled.nav`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 50px;
    row-gap: 15px;
    justify-content: center;

    a {
        font-weight: 500;
        font-size: 20px;
        line-height: 1.3;
        color: #a7a7a7;
        &:hover{
            text-decoration: underline;
            color: rgb(231, 15, 170)
        }
    }
`
