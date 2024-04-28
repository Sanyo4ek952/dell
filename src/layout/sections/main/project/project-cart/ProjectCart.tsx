import React from 'react';
import styled from "styled-components";

type ProjectCartPropsType = {
    title: string,
    text: string
    subtext: string
    techStack?: string
    fontWeight?: string
    image:string
}

export const ProjectCart = (props: ProjectCartPropsType) => {
    return (
        <StyledProjectCart href="">
            <img src={props.image} alt="Картинка"/>
            <article>
                <StyledProjectTitle>
                    {props.title}
                </StyledProjectTitle>
                <StyledProjectText >
                    <p>{props.text}</p>
                    <b>{props.subtext}</b> <span>{props.techStack}</span>
                </StyledProjectText>
            </article>
        </StyledProjectCart>
    );
};

const StyledProjectCart = styled.a`
    flex: 0 1  375px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
    background: rgb(54, 54, 54);
    transition: all 0.3s ease-in;
    article{
        padding: 25px 30px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    
    img{
    min-height: 260px;
    }
    
    &:hover{
        transform: scale(1.1);
        transition: all 0.3s ease-in-out;
        & h4{
            text-decoration: underline;
        }
    }
    @media (max-width: 440px) {
        flex: 0 1  280px;
        img{
            width: 280px;
            min-height: 100px;
        }
    }
`


const StyledProjectTitle = styled.h4`
    font-size: 28px;
    font-weight: 500;
    line-height: 26px;
`

const StyledProjectText = styled.div`
    font-weight: 300;
    font-size: 18px;
p{
    margin-bottom: 10px;
}
    span {
        font-weight: 300;
        font-size: 14px;
    }
`