import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Logo} from "../../../components/logo/Logo";
import SocialList from "../../../components/social-list/SocialList";
import {socialLinks} from "../../../App";
import styled from "styled-components";
import { BsFillTelephoneFill } from "react-icons/bs";
import {MdEmail} from "react-icons/md";

export const FooterTop = () => {
    return (
        <StyledFooterTop>
                <Logo viewBox={"0 0 97  59"}
                      iconId='logoGrey'
                      width={'97'}
                      height={"59"}/>
                <FlexWrapper justify={"space-between"}                >
                    <StyledContacts>
                        <div>
                            <BsFillTelephoneFill />
                            <a href="tel:+911234509876">+911234509876</a>
                        </div>
                        <div>
                            <MdEmail />
                            <a href="mailto:info@example.com">info@example.com</a>
                        </div>
                    </StyledContacts>
                    <SocialList socialLinks={socialLinks}/>
            </FlexWrapper>
        </StyledFooterTop>
    );
};

const StyledFooterTop = styled.div`
    min-height: 100px;
    display: flex;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(66, 68, 110);

    ${FlexWrapper} {
        gap: 20px;
flex: 0 1 760px;
        @media (max-width: 480px) {
            justify-content: flex-end;
        }
    }

`

const StyledContacts = styled.div`
    display: flex;
    flex: 1 1 auto;
    gap: 10px;
    justify-content: space-around;
flex-wrap: wrap;
    div{
        display: flex;
        gap: 5px;
        align-items: center;
    }
    a:hover{
        text-decoration: underline;
    }
`