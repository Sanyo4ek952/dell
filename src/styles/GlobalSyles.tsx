import {createGlobalStyle} from "styled-components";
import {them} from "./Them";

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        border: 0;
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    :focus,
    :active {
        // outline: none;
    }

    a:focus,
    a:active {
        // outline: none;
    }

    html,
    body {

    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        color: ${them.color.mainFont};
        background-color: black;
        position: relative;
        font-size: 18px;
        line-height: 26px;
        //text-rendering: optimizeLegibility;
        -ms-text-size-adjust: 100%;
        -moz-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    input,
    button,
    textarea {
        font-size: inherit;
        line-height: inherit;
    }

    button {
        cursor: pointer;
        color: inherit;
        background-color: transparent;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul, li {
        list-style: none;
    }

    img {
        vertical-align: top;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: inherit;
        font-size: inherit;
    }


`;

export default GlobalStyles;

//Адаптивный шрифт
export const adaptiveFont = (  Fmax:number,Fmin:number  )=>{
    return `calc( (min(100vw, 1200px) - 320px)/(1200 - 320) * (${Fmax} - ${Fmin}) + ${Fmin}px)`

}