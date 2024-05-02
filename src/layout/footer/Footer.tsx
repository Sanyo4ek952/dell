import React from 'react';
import styled from "styled-components";
import {Container} from "../../styles/Container";
import {FooterTop} from "./footer-top/FooterTop";
import {FooterBottom} from "./footer-bottom/FooterBottom";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FooterTop/>
                <FooterBottom/>
            </Container>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`

`
