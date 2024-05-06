import './App.css';
import {Header} from "./layout/header/Header";
import {Home} from "./layout/sections/main/Home";
import React from "react";
import {StyledApp} from "./styles/StyledApp";
import {Footer} from "./layout/footer/Footer";
import {Route, Routes} from "react-router-dom";
import {Projects} from "./layout/sections/main/project/Projects";
import AboutMe from "./layout/sections/main/about-me/AboutMe";
import {Skills} from "./layout/sections/main/skills/Skills";
import {Contacts} from "./layout/sections/main/contacts/Contacts";

export const socialLinks = [
    "gitHub",
    "twitter",
    "linkedin"
]

export const menuItems = [
    {title: "Home", href: "/"},
    {title: "About", href: "/about"},
    {title: "Tech Stack", href: "/skills"},
    {title: "Projects", href: "/projects"},
    {title: "Contact", href: "/contact"},

]

function App() {
    return (
        // eslint-disable-next-line react/jsx-no-undef
        <StyledApp bgcolor={'black'} className="App">
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<AboutMe/>}/>
                    <Route path="/skills" element={<Skills/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/contact" element={<Contacts/>}/>
                </Routes>
            </main>
            <Footer/>
        </StyledApp>
    );
}

export default App;


