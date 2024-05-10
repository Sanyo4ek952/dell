import React from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {them} from "../../../styles/Them";

type MenuPropsType = {
    items: Array<{ title: string, href: string }>
}
export const MenuList: React.FC< MenuPropsType > = (props: MenuPropsType) => {
    return (
        <ul>
            {props.items.map((item, key) => {
                    return (
                        <li key={key}>
                            <StyleNavlink  to={item.href}>
                                    {item.title}
                            </StyleNavlink>
                        </li>
                    )
                }
            )
            }
        </ul>
    );
};


const StyleNavlink = styled(NavLink)`
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
    &.active{
        text-decoration: underline;
        background-image: ${them.color.mainGradient};
        -webkit-background-clip: text;
        color: transparent;
        &:after {
            transform: scaleX(1);
        }
    }
`
