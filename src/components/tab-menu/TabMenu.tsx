import React from 'react';
import styled, {css} from "styled-components";
import {them} from "../../styles/Them";

export type TabsStatusType = "all" | "React" | "Landing page"| "Spa"
type TabMenuPropsType = {
    tabsItems: Array<{ title:string,status:TabsStatusType }>
    changeFilterStatus :(value:TabsStatusType)=>void
    currentFilterStatus:string
}
export const TabMenu = (props: TabMenuPropsType) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.tabsItems.map((item, index) => (
                    <ListItem key={index}>
                        <Link active={props.currentFilterStatus === item.status} as={"button"} onClick={()=>{props.changeFilterStatus(item.status)}}>{item.title}</Link>
                    </ListItem>

            ))}
        </ul>
</StyledTabMenu>
)
    ;
};

const StyledTabMenu = styled.nav`
ul{
    display: flex;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    margin: 0 auto 40px;
}
`
const ListItem = styled.li``
const Link = styled.a<{ active: boolean }>`
    &:after {
content: "";
        transform: scaleX(0);
        transition: 0.3s ease-in-out;
    }
${props=>props.active && css<{active?: boolean}>`
    background-image: ${them.color.mainGradient};
    -webkit-background-clip: text;
    color: transparent;
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
        transform: scaleX(1);
        transition: 0.3s ease-in-out;
    }
`}
`