import React from 'react';
import Icon from "../icon/Icon";
import styled from "styled-components";

type LogoPropsType = {
    viewBox?: string
    iconId?: string
    width?: string
    height?: string
}

export const Logo = (props: LogoPropsType) => {
    return (
        <StyledIconLink href="">
            <Icon viewBox={props.viewBox}
                  iconId="logoGrey"
                  width={props.width}
                  height={props.height}/>
        </StyledIconLink>
    );
};


const StyledIconLink = styled.a`
display: flex;
    
`

