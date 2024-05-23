import React from 'react';
import MyPhoto from "./MyPhoto/MyPhoto";
import Text from "./text/Text";
import styled from "styled-components";
import {Container} from "../../../../styles/Container";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {ScrollToTop} from "../../../../components/ScrollToTop";


const AboutMe:React.FC = () => {
    return (
        <StyledAboutMe>
            <ScrollToTop/>
            <Container>
                <FlexWrapper justify={"space-between"}
                align={"center"}>
                    <Text/>
                    <MyPhoto width={350}
                             height={350}/>
                </FlexWrapper>
            </Container>
        </StyledAboutMe>
    );
};

export default AboutMe;



const StyledAboutMe = styled.section`

    ${FlexWrapper} {
        height: 100vh;
        gap: 30px;
        @media (max-width: 624px) {
            flex-direction: column-reverse;
            align-items: center;
            height: 100%;
        }
    }


`