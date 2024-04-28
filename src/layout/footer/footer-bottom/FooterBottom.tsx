import React from 'react';
import styled from "styled-components";
import {Menu} from "../../../components/menu/Menu";
import {itemsMenu} from "../../../App";

export const FooterBottom = () => {
    return (
        <StyledFooterBottom>
            <Menu items={itemsMenu}/>
            <StyledCopyright>
                Designed and built by <a href="">Alexander</a> with <a href="">Love</a> & <a href="">Coffee</a>
            </StyledCopyright>
        </StyledFooterBottom>
    );
};

const StyledFooterBottom = styled.div`
display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 35px;
    min-height: 100px;
`

const StyledCopyright = styled.p`
a{
    color:rgb(19, 176, 245);
}
    a:hover{
        text-decoration: underline;
    }
`