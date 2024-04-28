import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {StyleContainer} from "../../styles/StyleContainer";
import {itemsMenu, socialLink} from "../../App";
import SocialList from "../../components/social-list/SocialList";
import {FlexWrapper} from "../../components/FlexWrapper";


export const Header = () => {
    return (
        <StyledHeader>
            <StyleContainer>
                <FlexWrapper justify={'space-between'}
                rowGap={"20"}
                columnGap={'20'}>
                    <Logo viewBox={"0 0 97  59"}
                          iconId='logoGrey'
                          width={'97'}
                          height={"59"}/>
                    <HeaderMenu>
                        <Menu items={itemsMenu}/>
                        <SocialList socialLink={socialLink}/>
                    </HeaderMenu>
                </FlexWrapper>
            </StyleContainer>
        </StyledHeader>
    )
        ;
};

const StyledHeader = styled.header`
    background-color: #000;
    width: 100%;
    padding: 30px 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;

`
const HeaderMenu=styled.div`
    flex: 0 1 728px;
    display: flex;
    gap: 15px;
    justify-content: space-between;
    align-items: center;
`