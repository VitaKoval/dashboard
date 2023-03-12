import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-bg-card);
  padding: 14px 18px;
  width: 84px;
  height: 100%;

  position: relative;
`;
export const MenuContainer = styled.div`
  margin-top: 46px;
`;

export const SLinkContainer = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 50%;

  background-color: ${props=> props.isActive ? 'var(--color-bg-active)' :'var(--color-bg-base)'} ;
  stroke: ${props=> props.isActive ? 'var(--color-icon-active)': 'var(--color-icon-base)'} ;

  transition: all 250ms linear;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &:hover,
  &:focus {
    stroke: var(--color-icon-active);

    background-color: var(--color-bg-active);
  }
`

export const SLink = styled(Link).attrs(
  (props) => ({
    to: props.to,
  }))`
display: flex;
  align-items: center;
  justify-content: center;
`
  /* display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 12px;
  border-radius: 50%;

  background-color: var(--color-bg-base);
  stroke: var(--color-icon-base);

  transition: all 250ms linear;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &:hover,
  &:focus {
    stroke: var(--color-icon-active);

    background-color: var(--color-bg-active);
  } */

