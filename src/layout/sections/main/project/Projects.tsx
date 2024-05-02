import React from 'react';
import {Container} from "../../../../styles/Container";
import {Title} from "../../../../components/Tiltle";
import {Project} from "./project/Project";
import styled from "styled-components";
import image2 from "../../../../assets/image/project-image/prohect3.png"
import image2Webp from "../../../../assets/image/project-image/prohect3.webp"
import image3 from "../../../../assets/image/project-image/prohect4.png"
import image3Webp from "../../../../assets/image/project-image/prohect4.webp"
import image4 from "../../../../assets/image/project-image/prohect1.png"
import image4Webp from "../../../../assets/image/project-image/prohect1.webp"
import ELEAN from "../../../../assets/image/project-image/Screenshot_3.png"
import ELEANWebp from "../../../../assets/image/project-image/Screenshot_3.webp"

import {FlexWrapper} from "../../../../components/FlexWrapper";

const projects = [
    {
        srcImage: ELEAN,
        srcImageWebp: ELEANWebp,
        srcProject:"https://sanyo4ek952.github.io/Elean_full/home.html",
        title: "ELEAN",
        subtext: "Tech stack :",
        techStack: "HTML , JavaScript, SASS",
        text: "This is  sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    },
    {
        srcImage: image2,
        srcImageWebp: image2Webp,
        srcProject:"#",
        title: "Projects Tile goes here",
        subtext: "Tech stack :",
        techStack: "HTML , JavaScript, SASS, React",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi earum necessitatibus nobis officiis provident ratione veniam vero vitae! Ab aliquid assumenda at expedita ipsum labore quo rem tempore voluptatibus. This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    },
    {
        srcImage: image3,
        srcImageWebp: image3Webp,
        srcProject:"#",
        title: "Projects Tile goes here",
        subtext: "Tech stack :",
        techStack: "HTML , JavaScript, SASS, React",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    },
    {
        srcImage: image4,
        srcImageWebp: image3Webp,
        srcProject:"#",
        title: "Projects Tile goes here",
        subtext: "Tech stack :",
        techStack: "HTML , JavaScript, SASS, React",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    },
    {
        srcImage: image2,
        srcImageWebp: image2Webp,
        srcProject:"#",
        title: "Projects Tile goes here",
        subtext: "Tech stack :",
        techStack: "HTML , JavaScript, SASS, React",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    },
    {
        srcImage: image4,
        srcImageWebp: image4Webp,
        srcProject:"#",
        title: "Projects Tile goes here",
        subtext: "Tech stack :",
        techStack: "HTML , JavaScript, SASS, React",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    }

]
export const Projects = () => {
    return (
        <StyledProject>
            <Container>
                <Title marginBottom={"115px"} mainTitle="Projects" subTitle={'Things I’ve built so far'}/>
                <FlexWrapper justify={"space-around"}>
                    {
                        projects.map((project) => {
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
        </StyledProject>
    );
};
const StyledProject = styled.section`
    padding: 50px 0;
    ${FlexWrapper} {
        
        gap: 35px;
        flex-wrap: wrap;
    }
`
