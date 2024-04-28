import styled from "styled-components";

type FlexWrapperProps = {
    direction?: string;
    justify?: string
    align?: string
    wrap?: string
    columnGap?: string
    rowGap?: string
    gap?:string
    flex?: string
}

export const FlexWrapper = styled.div<FlexWrapperProps>`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'center'};
    align-items: ${props => props.align || 'stretch'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    column-gap: ${props => props.columnGap || "0"}px;
    row-gap: ${props => props.rowGap || "0"}px;
    flex: ${props => props.flex || "0 0 basic"};
    
`