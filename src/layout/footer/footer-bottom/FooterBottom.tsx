import React from 'react';
import styled from "styled-components";
import {DesktopMenu} from "../../header/header-menu/desktop-menu/DesktopMenu";
import {GradientLink} from "../../../styles/GradientLink";
import {menuItems} from "../../header/Header";

export const FooterBottom = () => {
    return (
        <StyledFooterBottom>
            <DesktopMenu items={menuItems}/>
            <StyledCopyright>
                Designed and built by <GradientLink href="">Alexander</GradientLink> with <GradientLink href="">Love</GradientLink> & <GradientLink href="">Coffee</GradientLink>
            </StyledCopyright>
        </StyledFooterBottom>
    );
};

const StyledFooterBottom = styled.div`
display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    min-height: 100px;
`

const StyledCopyright = styled.p`
text-align: right;
`