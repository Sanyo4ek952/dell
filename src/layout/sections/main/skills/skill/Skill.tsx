import React from 'react';
import styled from "styled-components";

type SkillPropsType ={
    skillName?: string,
    imageUrl?: string,
}
export const Skill = (props:SkillPropsType) => {
    return (
        <StyledSkill>
            <img src={props.imageUrl} alt=""/>
            <SkillTitle>{props.skillName}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`

`
const SkillTitle = styled.h3`

`
