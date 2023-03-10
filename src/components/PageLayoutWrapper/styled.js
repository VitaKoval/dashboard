import styled from "styled-components";

export const Container = styled.div`
  padding: ${(props) => (props.box ? "8px 0 8px 0" : "16px 48px 20px 32px")};
  height: ${(props) => props.height};
`;
