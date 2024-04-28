import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import React from "react";
import {StylesApp} from "./styles/StylesApp";
import {Footer} from "./layout/footer/Footer";

export const socialLink = [
    "gitHub",
    "twitter",
    "linkedin"
]

export const itemsMenu = [
    "Home",
    "About",
    "Tech Stack",
    "Projects",
    "Contact",
]

function App() {
    return (
        // eslint-disable-next-line react/jsx-no-undef
        <StylesApp bgcolor={'black'} className="App">
            <Header/>
            <Main/>
            <Footer/>
        </StylesApp>
    );
}

export default App;


