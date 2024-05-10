import React, {useState} from 'react';
import {Container} from "../../../../styles/Container";
import {Title} from "../../../../components/Tiltle";
import {Project} from "./project/Project";
import image2 from "../../../../assets/image/project-image/prohect3.png"
import image2Webp from "../../../../assets/image/project-image/prohect3.webp"
import Tvintos from "../../../../assets/image/project-image/Tvintos.png"
import TvintosWebp from "../../../../assets/image/project-image/Tvintos.webp"
import marcetMils from "../../../../assets/image/project-image/market-mils.png"
import marcetMilsWebp from "../../../../assets/image/project-image/market-mils.webp"
import ELEAN from "../../../../assets/image/project-image/Screenshot_3.png"
import ELEANWebp from "../../../../assets/image/project-image/Screenshot_3.webp"
import {S} from "./Project_Styles"
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {TabMenu, TabsStatusType} from "../../../../components/tab-menu/TabMenu";
import {ScrollToTop} from "../../../../components/ScrollToTop";

const tabsItems: Array<{ title: string, status: "all" | "React" | "Landing page" | "Spa" }> = [
    {title: "All", status: "all"},
    {title: "Landing page", status: "Landing page"},
    {title: "React", status: "React"},
    {title: "Spa", status: "Spa"},
]


const projects = [
    {
        srcImage: ELEAN,
        srcImageWebp: ELEANWebp,
        srcProject: "https://sanyo4ek952.github.io/Elean_full/home.html",
        title: "ELEAN",
        subtext: "Tech stack :",
        techStack: "HTML , JavaScript, SASS",
        text: "Сегодня ELEAN - это первый в России магазин готового женского смокинга. У нас каждая женщина может подобрать для себя образ со смокингом, такой же как у голливудских див и звезд светской хроники.  Костюм со смокингом ELEAN - выбор звёзд эстрады и кино, телеведущих, fashion-стилистов, успешных женщин-руководителей, представительниц научной и деловой элиты. История бренда началась задолго до первого показа, который состоялся 12 марта 2016 года, с мечты автора коллекции, Елены Писаревой о собственном бренде элегантной одежды и продолжалась долгие 30 лет накопления профессионального опыта. Вся первая коллекция была выполнена из 100% натурального шелка, в нее вошли жентсвенные платья и костюмы.",
        type: "Spa"
    },
    {
        srcImage: marcetMils,
        srcImageWebp: marcetMilsWebp,
        srcProject: "https://sanyo4ek952.github.io/market_mils_drill_shop/",
        title: "Market-Mils",
        subtext: "Tech stack :",
        techStack: "HTML , JavaScript, SASS",
        text: "Мощная функциональная платформа для любых интернет-проектов, бесплатное обучение специалистов, активное сообщество разработчиков и менеджеров. Миссия нашей компании заключается в создании современной и востребованной продукции для наших заказчиков.",
        type: "React"
    },
    {
        srcImage: Tvintos,
        srcImageWebp: TvintosWebp,
        srcProject: "https://sanyo4ek952.github.io/Tvintos/",
        title: "Tvintos",
        subtext: "Tech stack :",
        techStack: "HTML , JavaScript, SASS",
        text: "Интернет магазин АО СИЗ ТВИНТОС",
        type: "Landing page"
    },
    {
        srcImage: image2,
        srcImageWebp: image2Webp,
        srcProject: "#",
        title: "Projects Tile goes here",
        subtext: "Tech stack :",
        techStack: "HTML , JavaScript, SASS, React",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        type: "Landing page"
    },
    {
        srcImage: image2,
        srcImageWebp: image2Webp,
        srcProject: "#",
        title: "Projects Tile goes here",
        subtext: "Tech stack :",
        techStack: "HTML , JavaScript, SASS, React",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        type: "React"
    },
    {
        srcImage: image2,
        srcImageWebp: image2Webp,
        srcProject: "#",
        title: "Projects Tile goes here",
        subtext: "Tech stack :",
        techStack: "HTML , JavaScript, SASS, React",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        type: "spa"
    }

]
export const Projects: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredWorks = projects
    if (currentFilterStatus === "Landing page") {
        filteredWorks = projects.filter(project => project.type === "Landing page")
    }
    if (currentFilterStatus === "React") {
        filteredWorks = projects.filter(project => project.type === "React")
    }
    if (currentFilterStatus === "Spa") {
        filteredWorks = projects.filter(project => project.type === "Spa")
    }

    function changeFilterStatus(value: TabsStatusType | "Spa") {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Project>

            <Container>
                <Title marginBottom={"115px"} mainTitle="Projects" subTitle={'Things I’ve built so far'}/>
                <TabMenu
                    currentFilterStatus={currentFilterStatus} changeFilterStatus={changeFilterStatus}
                    tabsItems={tabsItems}/>
                <FlexWrapper justify={"space-around"}>
                    {filteredWorks.map((project) => {
                            return (
                                <Project
                                    srcProject={project.srcProject}
                                    image={project.srcImage}
                                    imageWebp={project.srcImageWebp}
                                    title={project.title}
                                    subtext={project.subtext}
                                    techStack={project.techStack}
                                    text={project.text}/>
                            )
                        }
                    )
                    }
                </FlexWrapper>
            </Container>
        </S.Project>
    );
};
