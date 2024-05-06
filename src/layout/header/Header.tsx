import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../styles/Container";
import {menuItems, socialLinks} from "../../App";
import SocialList from "../../components/social-list/SocialList";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";
import {MobileMenu} from "../../components/menu/mobile-menu/MobileMenu";


export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'}>
                    <Logo viewBox={"0 0 97  59"}
                          iconId={'logoGrey'}
                          width={'97'}
                          height={"59"}/>
                    <HeaderMenu>
                        <Menu items={menuItems}/>
                        <MobileMenu items={menuItems}/>
                        <SocialList socialLinks={socialLinks}/>
                    </HeaderMenu>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
        ;
};

const StyledHeader = styled.header`
    background-color: ${theme.color.mainBG};
    width: 100%;
    padding: 30px 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
    ${FlexWrapper}{
        gap: 20px;
    }

`
const HeaderMenu=styled.div`
    flex: 0 1 728px;
    display: flex;
    gap: 15px;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
`