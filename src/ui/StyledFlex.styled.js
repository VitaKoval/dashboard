import styled from "styled-components";

export const StyledFlex = styled.div`
display: flex;
flex-direction: ${props => props.column ? 'column' : 'row'};
align-items: ${props => props.align || 'stretch'};
justify-content: ${props => props.justify || 'stretch'};
flex-grow: ${props => props.flexGrow};
width: ${props => props.width};
height: ${({ height }) => height};
`