import React from 'react';
import {Title} from "../../../components/Tiltle";
import {Container} from "../../../styles/Container";
import Icon from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";




export const Skills = () => {
    return (
        <StyleSkills>
            <Container>
                <Title marginBottom={"140px"} mainTitle={"My Tech Stack"}
                       subTitle={" Technologies I’ve been working with recently"}/>
                <FlexWrapper justify={"center"}
                             align={"center"}
                             wrap={"wrap"}
                             columnGap="95"
                             rowGap="55">
                    <Icon iconId={"html"} width={"120px"} height={"120px"} viewBox={"0 0 120 120"}/>
                    <Icon iconId={"css"} width={"120px"} height={"120px"} viewBox={"0 0 120 120"}/>
                    <Icon iconId={"js"} width={"120px"} height={"120px"} viewBox={"0 0 120 120"}/>
                    <Icon iconId={"react"} width={"120px"} height={"120px"} viewBox={"0 0 113 101"}/>
                    <Icon iconId={"redux"} width={"120px"} height={"120px"} viewBox={"0 0 105 100"}/>
                    <Icon iconId={"bootstrap"} width={"120px"} height={"120px"} viewBox={"0 0 90 90"}/>
                    <Icon iconId={"tailwind"} width={"120px"} height={"120px"} viewBox={"0 0 120 120"}/>
                    <Icon iconId={"sass"} width={"120px"} height={"120px"} viewBox={"0 0 117 87"}/>
                    <Icon iconId={"git"} width={"120px"} height={"120px"} viewBox={"0 0 105 105"}/>
                    <Icon iconId={"greensock"} width={"120px"} height={"120px"} viewBox={"0 0 120 120"}/>
                    <Icon iconId={"vscode"} width={"120px"} height={"120px"} viewBox={"0 0 112 112"}/>
                    <Icon iconId={"githubSkill"} width={"120px"} height={"120px"} viewBox={"0 0 88 88"}/>
                </FlexWrapper>
            </Container>
        </StyleSkills>
    );
};

const StyleSkills = styled.section`
    padding: 50px 0;
    `