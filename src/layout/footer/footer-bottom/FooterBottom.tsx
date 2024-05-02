import React from 'react';
import styled from "styled-components";
import {Menu} from "../../../components/menu/Menu";
import {menuItems} from "../../../App";
import {GradientLink} from "../../../styles/GradientLink";

export const FooterBottom = () => {
    return (
        <StyledFooterBottom>
            <Menu items={menuItems}/>
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