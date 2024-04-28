import React from 'react';
import AboutMe from "./about-me/AboutMe";
import {Skills} from "../skills/Skills";
import {Project} from "./project/Project";
import {Email} from "./email/Email";

export const Main = () => {
    return (
        <div>
            <AboutMe marginTop="150" marginBottom="200"/>
            <Skills id="skill" marginBottom={"205"} />
            <Project/>
            <Email/>
        </div>
    );
};



