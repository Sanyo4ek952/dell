import React from 'react';
import {StyleContainer} from "../../../../styles/StyleContainer";
import {Title} from "../../../../components/Tiltle";
import {ProjectCart} from "./project-cart/ProjectCart";
import styled from "styled-components";
import image1 from "../../../../assets/image/project-image/prohect2.png"
import image2 from "../../../../assets/image/project-image/prohect3.png"
import image3 from "../../../../assets/image/project-image/prohect4.png"
import image4 from "../../../../assets/image/project-image/prohect1.png"


export const Project = () => {
    return (
        <StyleContainer marginBottom={"150"}>
            <Title marginBottom={"115px"} mainTitle="Project" subTitle={'Things I’ve built so far'}/>
            <StyledFlexWrapper>
                <ProjectCart
                    image={image1}
                    title ={"Project Tile goes here"}
                    subtext={"Tech stack : "}
                    techStack={"HTML , JavaScript, SASS, React"}
                    text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                <ProjectCart
                    image={image2}
                    title ={"Project Tile goes here"}
                    subtext={"Tech stack : "}
                    techStack={"HTML , JavaScript, SASS, React"}
                    text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                <ProjectCart
                    image={image3}
                    title ={"Project Tile goes here"}
                    subtext={"Tech stack : "}
                    techStack={"HTML , JavaScript, SASS, React"}
                    text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                <ProjectCart
                    image={image4}
                    title ={"Project Tile goes here"}
                    subtext={"Tech stack : "}
                    techStack={"HTML , JavaScript, SASS, React"}
                    text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                   <ProjectCart
                    image={image2}
                    title ={"Project Tile goes here"}
                    subtext={"Tech stack : "}
                    techStack={"HTML , JavaScript, SASS, React"}
                    text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>

            </StyledFlexWrapper>
        </StyleContainer>
    );
};
const StyledFlexWrapper = styled.div`
/*    display: grid;
    grid-template-columns: repeat(3, 1fr);*/
    gap: 35px;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-around;
    
`