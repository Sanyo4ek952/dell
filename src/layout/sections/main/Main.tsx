import React from 'react';
import AboutMe from "./about-me/AboutMe";
import {Skills} from "../skills/Skills";
import {Projects} from "./project/Projects";
import {Contacts} from "./contacts/Contacts";

export const Main = () => {
    return (
        <main>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <Contacts/>
        </main>
    );
};



