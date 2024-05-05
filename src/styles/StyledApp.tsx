import styled from "styled-components";
import {Themes} from "./Themes";

type StylesAppTypeProps = {
    bgcolor: string;
}
export const StyledApp = styled.div<StylesAppTypeProps>`
    background-color: ${Themes.color.mainBG};
margin: 0 auto;
`
