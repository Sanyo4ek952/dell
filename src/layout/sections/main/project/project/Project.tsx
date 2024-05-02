import React from 'react';
import styled from "styled-components";

type ProjectCartPropsType = {
    title: string,
    text: string
    subtext: string
    techStack?: string
    fontWeight?: string
    image: string
    srcProject:string
    imageWebp:string
}

export const Project = (props: ProjectCartPropsType) => {
    return (
        <StyledProjectCart target="_blank" href={props.srcProject}>
            <article>
                <ContainerImage>
                    <img src={props.image} alt="Картинка"/>
                    <picture>
                        <source srcSet={props.imageWebp} type="image/webp"/>
                        <source srcSet={props.image} type="image/jpeg"/>
                        <img src={props.image} alt="Мое Фото"/>
                    </picture>
                </ContainerImage>
                <Body>
                    <StyledProjectTitle>
                        {props.title}
                    </StyledProjectTitle>
                    <StyledProjectText>
                        <p>{props.text}</p>
                        <span><strong>{props.subtext}</strong> <span>{props.techStack}</span></span>
                    </StyledProjectText>
                </Body>
            </article>
        </StyledProjectCart>
    );
};

const StyledProjectCart = styled.a`
    flex: 1 1 375px;

    display: flex;
    border-radius: 20px;
    box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
    background: rgb(54, 54, 54);
    transition: all 0.3s ease-in;

    article {
        display: flex;
        flex-direction: column;
    }
    

    strong {
        display: inline;
    }

    &:hover {
        transform: scale(1.1);
        transition: all 0.3s ease-in-out;

    }

    @media (max-width: 440px) {
        flex: 1 1 280px;
        img {
            width: 100%;
            min-height: 100px;
        }
    }
`
const Body = styled.div`
    padding: 25px 30px;
    gap: 10px;
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;

    & > *:not(:last-child) {
        margin-bottom: 10px;
    }
`
const ContainerImage = styled.div`
    position: relative;
    padding-top: 69%;
    & img {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        object-fit: cover;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
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

    display: flex;
    flex-direction: column;
    flex: 1 0 auto;

    p {
        margin-bottom: 10px;
        flex: 1 0 auto;
        max-height: 200px;
        overflow: hidden;
    }

    span {
        font-weight: 300;
        font-size: 14px;
    }
`