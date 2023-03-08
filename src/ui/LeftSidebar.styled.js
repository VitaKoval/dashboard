import styled from "styled-components";

export const ContainerLeftSidebar = styled.div`
  background-color: var(--color-bg-card);
  padding: 14px 18px;
  width: 84px;
  /* margin-right: 32px; */
`;
export const ListLeftSidebar = styled.ul`
  margin-top: 46px;
`;

export const ItemLeftSidebar = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  background-color: var(--color-bg-base);
  border-radius: 50%;

  stroke: var(--color-icon-base);
  transition: all 250ms linear;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &:hover,
  &:focus {
    stroke: var(--color-icon-active);
    background-color: var(--color-bg-active);
  }
`;
