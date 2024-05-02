import React from 'react';
import AboutMe from "./about-me/AboutMe";
import {Skills} from "../skills/Skills";
import {Project} from "./project/Project";
import {Email} from "./email/Email";

export const Main = () => {
    return (
        <main>
            <AboutMe />
            <Skills id="skill"  />
            <Project/>
            <Email/>
        </main>
    );
};



