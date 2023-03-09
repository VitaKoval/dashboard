import styled from "styled-components";

export const WrapperContainer = styled.div`
padding: ${props => props.box ? '8px 0 8px 0' : '16px 48px 20px 32px'};
height: ${props => props.height};


outline: 1px solid red;
`