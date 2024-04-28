import React from 'react';
import styled from "styled-components";
import {StyleContainer} from "../../styles/StyleContainer";
import {FooterTop} from "./footer-top/FooterTop";
import {FooterBottom} from "./footer-bottom/FooterBottom";

export const Footer = () => {
    return (
        <StyledFooter>
            <StyleContainer>
                <FooterTop/>
                <FooterBottom/>
            </StyleContainer>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`

`
