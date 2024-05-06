import React, {useState} from 'react';
import styled, {css} from "styled-components";
import { GradientLink} from "../../../styles/GradientLink";
import {theme} from "../../../styles/Theme";
import {NavLink} from "react-router-dom";

type MenuPropsType = {
    items: Array<{ title: string, href: string }>
}

export const MobileMenu = (props: MenuPropsType) => {
    const [menuIsOpen, setmenuIsOpen] = useState(false)
    const onBurgerBtnClick = ()=>{
        setmenuIsOpen(!menuIsOpen);
    }
    return (
        <StyledMobileMenu isOpen={menuIsOpen} onClick={()=>{setmenuIsOpen(!menuIsOpen)}}>
            <ul>
                {props.items.map((item, key) => {
                        return (
                            <li key={key}>
                                <NavLink to={item.href}>
                                <GradientLink href="">
                                    {item.title}
                                </GradientLink>
                                </NavLink>
                            </li>
                        )
                    }
                )
                }
            </ul>
            <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </BurgerButton>
        </StyledMobileMenu>
    )
}

const StyledMobileMenu = styled.nav<{ isOpen: boolean }>`

    ul {
        display: flex;
        transform: translateY(-100%);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgb(0, 0, 0);
        color: ${theme.color.mainGradient};
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
        column-gap: 50px;
        gap: 10px;
        justify-content: center;
        transition: all 0.4s ease 0.4s;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            display: flex;
            transform: translateY(0);
            transition: all 0.4s ease ;
        `}
        ${GradientLink} {
            font-weight: 500;
            font-size: 36px;
            line-height: 1.3;
            color: ${theme.color.mainGradient};

        }

        @media ${theme.media.tablet} {
            display: none;
        }

    }

`
const BurgerButton = styled.button<{ isOpen: boolean }>`
    height: 20px;
    width: 20px;
    position: fixed;
    top: 40px;
    right: 40px;

    & span {
        display: block;
        background-color: white;
        width: 30px;
        height: 2px;
        position: relative;
        

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &::before,
        &::after {
            content: "";
            display: inline-block;
            background-color: white;
            width: 30px;
            height: 2px;
            position: absolute;
            left: 0;
            top: 0;
            transition: all 0.3s ease-in-out;
        }

        &::after {
            transform: translateY(8px);
            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: translatey(0px) rotate(45deg);
            `}
        }

        &::before {
            transform: translatey(-8px);
            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: translatey(0px) rotate(-45deg);
            `}
        }
    }

    @media ${theme.media.tablet} {
        display: none;

    }

`

