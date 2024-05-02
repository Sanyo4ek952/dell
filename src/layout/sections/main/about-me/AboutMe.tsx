import React from 'react';
import MyPhoto from "./MyPhoto/MyPhoto";
import Text from "./text/Text";
import styled from "styled-components";
import {StyleContainer} from "../../../../styles/StyleContainer";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type AboutMeProps = {
    marginTop?: string
    marginBottom?: string
}

const AboutMe = (props: AboutMeProps) => {
    return (
        <StyledAboutMe marginTop={props.marginTop}>
            <StyleContainer paddingTop={"140"}>
                <FlexWrapper justify={"space-between"}>
                    <Text/>
                    <MyPhoto width={350}
                             height={350}/>
                </FlexWrapper>
            </StyleContainer>
        </StyledAboutMe>
    );
};

export default AboutMe;

type StyledAboutMeProps = {
    marginTop?: string
    marginBottom?: string

}

const StyledAboutMe = styled.section<StyledAboutMeProps>`
    margin-top: ${props => props.marginTop || 20}px;
    margin-bottom: ${props => props.marginBottom || 0}px;

${FlexWrapper} {
    gap: 30px;
    @media (max-width: 620px) {
        flex-direction: column-reverse;
        align-items: center;
        margin-top: 140px;
        margin-bottom: 40px;
    }
}


`