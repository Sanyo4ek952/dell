import styled from "styled-components";
type StyleContainerTypeProps ={
    maxWidth?: string
    marginBottom?:string
}



export const StyleContainer = styled.div<StyleContainerTypeProps>`
    max-width: ${props => props.maxWidth ||"1230"}px ;
    padding: 0 15px;
    margin: 0 auto ${props => props.marginBottom || 0}px;
    height: 100%;
`


