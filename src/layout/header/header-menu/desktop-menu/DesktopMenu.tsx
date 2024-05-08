import React from 'react';
import {MenuList} from "../MenuList";
import {S} from "../Menu_Styles";

type MenuPropsType = {
    items: Array<{ title: string, href: string }>
}

export const DesktopMenu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
    return (
        <S.DesktopMenu>
            <MenuList items={props.items}/>
        </S.DesktopMenu>
    )

}


