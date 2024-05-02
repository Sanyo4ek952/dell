import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import React from "react";
import {StyledApp} from "./styles/StyledApp";
import {Footer} from "./layout/footer/Footer";

export const socialLinks = [
    "gitHub",
    "twitter",
    "linkedin"
]

export const menuItems = [
    "Home",
    "About",
    "Tech Stack",
    "Projects",
    "Contact",
]

function App() {
    return (
        // eslint-disable-next-line react/jsx-no-undef
        <StyledApp bgcolor={'black'} className="App">
            <Header/>
            <Main/>
            <Footer/>
        </StyledApp>
    );
}

export default App;


