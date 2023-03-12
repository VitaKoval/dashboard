import styled from "styled-components";

export const Container = styled.div`
  flex: ${(props) => props.flex};
  border-radius: 4px;
  background-color: var(--color-bg-card);
  height: ${(props) => props.height + "px" || "100%"};
  width: 100%;
`;
