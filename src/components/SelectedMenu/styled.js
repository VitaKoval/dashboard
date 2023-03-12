import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 27px;
  right: 0;
  z-index: 5;
  width: ${(props) => props.width + "px" || "100%"};

  display: ${(props) => (props.isOpen ? "block" : "none")};

  padding: 8px;
  background-color: var(--color-bg-card);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4), 0px 2px 4px rgba(0, 0, 0, 0.25),
    0px 8px 48px rgba(0, 0, 0, 0.6), 0px 2px 4px rgba(36, 38, 53, 0.08),
    0px 4px 12px rgba(36, 38, 53, 0.1), 0px 16px 24px rgba(55, 58, 83, 0.16);
  border-radius: 8px;
`;
