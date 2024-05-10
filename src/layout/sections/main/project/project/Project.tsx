import React from 'react';
import {S} from "../Project_Styles"

type ProjectCartPropsType = {
    title: string,
    text: string
    subtext: string
    techStack?: string
    fontWeight?: string
    image: string
    srcProject: string
    imageWebp: string
}

export const Project: React.FC<ProjectCartPropsType> = (props: ProjectCartPropsType) => {
    return (
        <S.ProjectCart target="_blank" href={props.srcProject}>
            <article>
                <S.ContainerImage>
                    <img src={props.image} alt="Картинка"/>
                    <picture>
                        <source srcSet={props.imageWebp} type="image/webp"/>
                        <source srcSet={props.image} type="image/jpeg"/>
                        <img src={props.image} alt="Мое Фото"/>
                    </picture>
                </S.ContainerImage>
                <S.Body>
                    <S.ProjectTitle>
                        {props.title}
                    </S.ProjectTitle>
                    <S.ProjectText>
                        <p>{props.text}</p>
                        <span><strong>{props.subtext}</strong> <span>{props.techStack}</span></span>
                    </S.ProjectText>
                </S.Body>
            </article>
        </S.ProjectCart>
    );
};


