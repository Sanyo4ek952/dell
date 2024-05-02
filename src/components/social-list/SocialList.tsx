import React from 'react';
import styled from "styled-components";
import Icon from "../icon/Icon";

const SocialList = (props: { socialLink: Array<string> }) => {
    return (
        <StyledSocialList>
            <ul>
                {props.socialLink.map((item, key) => {
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

    @media (max-width: 600px) {
        display: none;
    }

    ul {
        display: flex;
        gap: 20px;
        flex-wrap: nowrap;
    }
`
const StyledSocialItem = styled.li`

`
const StyledSocialLink = styled.a`
    svg:hover {
        transform: scale(1.2);
    }

`
