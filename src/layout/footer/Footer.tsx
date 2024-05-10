import React from 'react';
import {S} from "./Footer_Styles";
import {Container} from "../../styles/Container";
import {FooterTop} from "./footer-top/FooterTop";
import {FooterBottom} from "./footer-bottom/FooterBottom";

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FooterTop/>
                <FooterBottom/>
            </Container>
        </S.Footer>
    );
};


