import React, {useState} from 'react';
import {MenuList} from "../MenuList";
import {menuItems} from "../../Header";
import {S} from "../Menu_Styles"

type MenuPropsType = {
    items: Array<{ title: string, href: string }>
}

export const MobileMenu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
    const [menuIsOpen, setmenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {
        setmenuIsOpen(!menuIsOpen);
    }
    return (
        <S.MobileMenu isOpen={menuIsOpen} onClick={() => {
            setmenuIsOpen(!menuIsOpen)
        }}>
            <MenuList items={menuItems}/>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
        </S.MobileMenu>
    )
}


