import React from 'react';
import {DesktopMenu} from "../../header/header-menu/desktop-menu/DesktopMenu";
import {S} from "../Footer_Styles";
import {GradientLink} from "../../../styles/GradientLink";
import {menuItems} from "../../header/Header";

export const FooterBottom:React.FC = () => {
    return (
        <S.FooterBottom>
            <S.Copyright>
                Designed and built by <GradientLink href="">Alexander</GradientLink> with <GradientLink href="">Love</GradientLink> & <GradientLink href="">Coffee</GradientLink>
            </S.Copyright>
        </S.FooterBottom>
    );
};

