import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  align-items: ${(props) => props.align || "stretch"};
  justify-content: ${(props) => props.justify || "stretch"};
  flex-grow: ${(props) => props.flexGrow};
  width: ${(props) => props.width};
  height: ${({ height }) => height};
  overflow: ${(props) => props.overflow};
  position: ${(props) => props.position};
  gap: ${(props) => props.gap + "px"};
  transform: ${(props) => props.transform};
`;
