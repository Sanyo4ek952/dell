import styled from "styled-components";
type StyleContainerTypeProps ={
    maxWidth?: string
    paddingBottom?:string
    paddingTop?:string
}



export const StyleContainer = styled.div<StyleContainerTypeProps>`
    max-width: ${props => props.maxWidth ||"1230"}px ;
    padding: ${props =>props.paddingTop || 50}px 15px ${props =>props.paddingBottom || 50}px;
    margin: 0 auto;
    height: 100%;
`


