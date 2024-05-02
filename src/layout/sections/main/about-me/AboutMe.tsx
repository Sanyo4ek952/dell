import React from 'react';
import MyPhoto from "./MyPhoto/MyPhoto";
import Text from "./text/Text";
import styled from "styled-components";
import {Container} from "../../../../styles/Container";
import {FlexWrapper} from "../../../../components/FlexWrapper";



const AboutMe = () => {
    return (
        <StyledAboutMe>
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
    padding: 190px 0 50px;

    ${FlexWrapper} {

        gap: 30px;
        @media (max-width: 620px) {
            flex-direction: column-reverse;
            align-items: center;

        }
    }


`