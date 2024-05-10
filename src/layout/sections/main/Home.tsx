import React from 'react';
import AboutMe from "./about-me/AboutMe";
import {Skills} from "./skills/Skills";
import {Projects} from "./project/Projects";
import {Contacts} from "./contacts/Contacts";
import {ScrollToTop} from "../../../components/ScrollToTop";

export const Home:React.FC = () => {
    return (
        <main>
            <ScrollToTop/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <Contacts/>
        </main>
    );
};



