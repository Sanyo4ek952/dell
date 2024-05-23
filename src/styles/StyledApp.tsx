import styled from "styled-components";
import {them} from "./Them";
import {adaptiveFont} from "./GlobalSyles";

type StylesAppTypeProps = {
    bgcolor: string;
}
export const StyledApp = styled.div<StylesAppTypeProps>`
    background-color: ${them.color.mainBG};
    margin: 0 auto;
    display: flex;
    flex-direction: column;
min-height: 100vh;
    main:first-child {
       

        flex: 1 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
         @media (max-width: 624px) {
        padding: ${adaptiveFont(120, 90)} 0 ${adaptiveFont(50, 25)};
        }
    }

    &:first-child {
        
    }
`
