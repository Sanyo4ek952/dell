import React from 'react';
import {StyleContainer} from "../../../../styles/StyleContainer";
import {Title} from "../../../../components/Tiltle";
import {ProjectCart} from "./project-cart/ProjectCart";
import styled from "styled-components";
import image1 from "../../../../assets/image/project-image/prohect2.png"
import image2 from "../../../../assets/image/project-image/prohect3.png"
import image3 from "../../../../assets/image/project-image/prohect4.png"
import image4 from "../../../../assets/image/project-image/prohect1.png"
import {FlexWrapper} from "../../../../components/FlexWrapper";

const projects = [
    {
        srcImage: image1,
        title: "Project Tile goes here",
        subtext: "Tech stack :",
        techStack: "HTML , JavaScript, SASS, React",
        text: "This is  sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    },
    {
        srcImage: image2,
        title: "Project Tile goes here",
        subtext: "Tech stack :",
        techStack: "HTML , JavaScript, SASS, React",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi earum necessitatibus nobis officiis provident ratione veniam vero vitae! Ab aliquid assumenda at expedita ipsum labore quo rem tempore voluptatibus. This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    },
    {
        srcImage: image3,
        title: "Project Tile goes here",
        subtext: "Tech stack :",
        techStack: "HTML , JavaScript, SASS, React",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    },
    {
        srcImage: image4,
        title: "Project Tile goes here",
        subtext: "Tech stack :",
        techStack: "HTML , JavaScript, SASS, React",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    },
    {
        srcImage: image2,
        title: "Project Tile goes here",
        subtext: "Tech stack :",
        techStack: "HTML , JavaScript, SASS, React",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    },
    {
        srcImage: image3,
        title: "Project Tile goes here",
        subtext: "Tech stack :",
        techStack: "HTML , JavaScript, SASS, React",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    }

]
export const Project = () => {
    return (
        <StyledProject>
            <StyleContainer>
                <Title marginBottom={"115px"} mainTitle="Project" subTitle={'Things I’ve built so far'}/>
                <FlexWrapper justify={"space-around"}>
                    {
                        projects.map((project) => {
                                return (
                                    <ProjectCart
                                        image={project.srcImage}
                                        title={project.title}
                                        subtext={project.subtext}
                                        techStack={project.techStack}
                                        text={project.text}/>

                                )
                            }
                        )
                    }
                </FlexWrapper>
            </StyleContainer>
        </StyledProject>
    );
};
const StyledProject = styled.section`
    ${FlexWrapper} {
        gap: 35px;
        flex-wrap: wrap;
    }
`
