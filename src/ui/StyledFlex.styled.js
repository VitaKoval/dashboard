import styled from "styled-components";

export const StyledFlex = styled.div`
display: flex;
flex-direction: ${props => props.column ? 'column' : 'row'};
align-items: ${props => props.center ? 'center' : 'stretch'};
justify-content: ${props => props.center ? 'center' : 'stretch'};
flex-grow: ${props => props.flexGrow};
width: ${props => props.width};
height: ${({ height }) => height};
`