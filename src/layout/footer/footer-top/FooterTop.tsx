import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Logo} from "../../../components/logo/Logo";
import SocialList from "../../../components/social-list/SocialList";
import {S} from "../Footer_Styles";
import {BsFillTelephoneFill} from "react-icons/bs";
import {MdEmail} from "react-icons/md";
import {socialLinks} from "../../header/Header";

export const FooterTop: React.FC = () => {
    return (
        <S.FooterTop>
            <Logo viewBox={"0 0 97  59"}
                  iconId='logoGrey'
                  width={'97'}
                  height={"59"}/>
            <FlexWrapper justify={"space-between"}>
                <S.Contacts>
                    <div>
                        <BsFillTelephoneFill/>
                        <a href="tel:+911234509876">+911234509876</a>
                    </div>
                    <div>
                        <MdEmail/>
                        <a href="mailto:info@example.com">info@example.com</a>
                    </div>
                </S.Contacts>
                <SocialList socialLinks={socialLinks}/>
            </FlexWrapper>
        </S.FooterTop>
    );
};

