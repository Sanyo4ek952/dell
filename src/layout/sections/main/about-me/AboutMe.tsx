import React from 'react';
import MyPhoto from "./MyPhoto/MyPhoto";
import Text from "./text/Text";
import styled from "styled-components";
import {StyleContainer} from "../../../../styles/StyleContainer";
import {FlexWrapper} from "../../../../components/FlexWrapper";



const AboutMe = () => {
    return (
        <StyledAboutMe>
            <StyleContainer paddingTop={"190"}>
                <FlexWrapper justify={"space-between"}
                align={"center"}>
                    <Text/>
                    <MyPhoto width={350}
                             height={350}/>
                </FlexWrapper>
            </StyleContainer>
        </StyledAboutMe>
    );
};

export default AboutMe;



const StyledAboutMe = styled.section`

    ${FlexWrapper} {
    
        gap: 30px;
        @media (max-width: 620px) {
            flex-direction: column-reverse;
            align-items: center;

        }
    }


`