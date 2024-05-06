import React from 'react';
import styled from "styled-components";
import Icon from "../icon/Icon";
import {theme} from "../../styles/Theme";

const SocialList = (props: { socialLinks: Array<string> }) => {
    return (
        <StyledSocialList>
            <ul>
                {props.socialLinks.map((item, key) => {
                    return (
                        <StyledSocialItem>
                            <StyledSocialLink  href={"#"}>
                                <Icon key={key} iconId={item}/>
                            </StyledSocialLink>
                        </StyledSocialItem>
                )
                })}
                </ul>
        </StyledSocialList>
    );
};

export default SocialList;

const StyledSocialList = styled.nav`

    ul {
        display: flex;
        gap: 20px;
        flex-wrap: nowrap;
    }
    @media ${theme.media.desktop} {
        display: none;
    }
`
const StyledSocialItem = styled.li`

`
const StyledSocialLink = styled.a`
    svg:hover {
        transform: scale(1.2);
    }

`
