import React from 'react';
import {Container} from "../../../../styles/Container";
import {GradientLink} from "../../../../styles/GradientLink";
import {S} from "./Contact_Styles"
import {ScrollToTop} from "../../../../components/ScrollToTop";

export const Contacts: React.FC = () => {
    return (
        <S.Email>
            <ScrollToTop/>
            <Container>
                <p>For any questions please mail me:</p>
                <GradientLink href="mailto:anyo4ek952@gmail.com">Sanyo4ek952@gmail.com</GradientLink>
            </Container>
        </S.Email>
    );
};

