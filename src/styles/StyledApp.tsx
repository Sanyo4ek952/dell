import styled from "styled-components";
import {them} from "./Them";

type StylesAppTypeProps = {
    bgcolor: string;
}
export const StyledApp = styled.div<StylesAppTypeProps>`
    background-color: ${them.color.mainBG};
    margin: 0 auto;
    display: flex;
    flex-direction: column;
min-height: 100vh;
    main {
        flex: 1 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    &:first-child {
        
    }
`
