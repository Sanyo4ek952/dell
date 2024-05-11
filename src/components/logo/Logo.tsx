import React from 'react';
import Icon from "../icon/Icon";
import styled from "styled-components";
import { NavLink} from "react-router-dom";
import {animateScroll as scroll} from "react-scroll";
type LogoPropsType = {
    viewBox?: string
    iconId?: string
    width?: string
    height?: string
}

export const Logo = (props: LogoPropsType) => {
    return (
        <StyledIconLink onClick={()=>{scroll.scrollToTop()}} to="">
            <Icon viewBox={props.viewBox}
                  iconId="logoGrey"
                  width={props.width}
                  height={props.height}/>
        </StyledIconLink>
    );
};


const StyledIconLink = styled(NavLink)`
display: flex;
    position: relative;
    z-index: 333;
`

