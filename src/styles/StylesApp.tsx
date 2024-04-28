import styled from "styled-components";

type StylesAppTypeProps = {
    bgcolor: string;
}
export const StylesApp = styled.div<StylesAppTypeProps>`
    background-color: ${props => props.bgcolor};
margin: 0 auto;
`
