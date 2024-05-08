import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../styles/Container";
import SocialList from "../../components/social-list/SocialList";
import {FlexWrapper} from "../../components/FlexWrapper";
import {MobileMenu} from "./header-menu/mobile-menu/MobileMenu";
import {S} from './Header_Styles'
import {DesktopMenu} from "./header-menu/desktop-menu/DesktopMenu";

export const socialLinks = [
    "gitHub",
    "twitter",
    "linkedin"
]

export const menuItems = [
    {title: "Home", href: "/"},
    {title: "About", href: "/about"},
    {title: "Tech Stack", href: "/skills"},
    {title: "Projects", href: "/projects"},
    {title: "Contact", href: "/contact"},

]

export const Header: React.FC = () =>{
            const [width, setWidth] = React.useState(window.innerWidth);
            const breakpoint = 768;

            React.useEffect(() => {
                const handleWindowResize = () => setWidth(window.innerWidth)
                window.addEventListener("resize", handleWindowResize);

                return () => window.removeEventListener("resize", handleWindowResize);
            }, []);

            return (
        <S.Header>
            <Container>
                <FlexWrapper justify={'space-between'}>
                    <Logo viewBox={"0 0 97  59"}
                          iconId={'logoGrey'}
                          width={'97'}
                          height={"59"}/>
                    <S.HeaderMenu>
                        {width<breakpoint ?<MobileMenu items={menuItems}/>
                                          :<DesktopMenu items={menuItems} />}

                        <SocialList socialLinks={socialLinks}/>
                    </S.HeaderMenu>
                </FlexWrapper>
            </Container>
        </S.Header>
    )
        ;
}
;

