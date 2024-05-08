import React from 'react';
import {NavLink} from "react-router-dom";
import {GradientHoverLink} from "../../../styles/GradientLink";

type MenuPropsType = {
    items: Array<{ title: string, href: string }>
}
export const MenuList: React.FC< MenuPropsType > = (props: MenuPropsType) => {
    return (
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
    );
};


