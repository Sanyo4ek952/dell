import styled from "styled-components";
import {theme} from "./Theme";
import {adaptiveFont} from "./GlobalSyles";

type StylesAppTypeProps = {
    bgcolor: string;
}
export const StyledApp = styled.div<StylesAppTypeProps>`
    background-color: ${theme.color.mainBG};
    margin: 0 auto;
    display: flex;
    flex-direction: column;
min-height: 100vh;
    main {
        padding: ${adaptiveFont(120, 90)} 0 ${adaptiveFont(50, 25)};

        flex: 1 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    &:first-child {
        
    }
`
