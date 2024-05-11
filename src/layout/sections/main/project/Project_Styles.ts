import styled from "styled-components";
import {them} from "../../../../styles/Them";
import {adaptiveFont} from "../../../../styles/GlobalSyles";
import {FlexWrapper} from "../../../../components/FlexWrapper";

//Projects
const Project = styled.section`
    padding-top: ${adaptiveFont(50, 25)};
    padding-bottom: ${adaptiveFont(50, 25)};

    ${FlexWrapper} {
        gap: 35px;
        flex-wrap: wrap;
    }
`
//Project
const ProjectCart = styled.a`
    flex: 1 1 375px;
    max-width: 500px;
    display: flex;
    border-radius: 20px;
    background-color: rgb(54, 54, 54);
    transition: all 0.3s ease-in;
    position: relative;

    article {
        display: flex;
        width: 100%;
        flex-direction: column;
        position: relative;
        z-index: 3;

    }

    strong {
        display: inline;
    }

    &:hover {

        transition: all 0.3s ease-in-out;
        @media (min-width: 768px) {
            transform: scale(1.05);
            &::before {
                content: "";
                position: absolute;
                inset: -1px; /* управляет расстоянием рассеивания */
                transform: scale(1.02); /* управляет смещением */
                z-index: 0; /* располагает элемент позади основного */
                background: ${them.color.mainGradient} /* здесь находится ваш градиент */;
                filter: blur(10px); /* управляет размытием */
            }
        }

    }

    @media (max-width: 440px) {
        flex: 1 1 280px;
        img {
            width: 100%;
            min-height: 100px;
        }
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

const Body = styled.div`
    padding: 25px 30px;
    gap: 10px;
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    background-color: rgb(54, 54, 54);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    & > *:not(:last-child) {
        margin-bottom: 10px;
    }
`

const ProjectTitle = styled.h4`
    font-size: 28px;
    font-weight: 500;
    line-height: 26px;
    max-height: 54px;
    overflow: hidden;
`

const ProjectText = styled.div`
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
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
    }

    span {
        font-weight: 300;
        font-size: 14px;
    }
`
export const S = {
    Project,
    ProjectCart,
    ContainerImage,
    Body,
    ProjectTitle,
    ProjectText,
}