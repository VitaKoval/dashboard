import styled from "styled-components";
import { css } from "styled-components";
import defaultImg from "../../images/default-image-game.png";

export const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;

  font-size: 13px;
  line-height: 1.54;
  color: var(--color-primary);

  height: 72px;
  padding: 16px 32px;

  /* outline: 1px solid yellow; */
  

  ${(props) =>
    props.header &&
    css`
      font-weight: var(--fw-medium);
      font-size: 11px;
      line-height: 1.09;
      color: var(--color-secondary);

      height: auto;
      padding: 16px 32px 8px 32px;
    `}

  &:hover, 
    &:focus {
    background-color: rgba(255, 255, 255, 0.06);
  }
`;

export const TableCell = styled.div`
  flex-grow: ${(props) => props.flexGrow};
  flex-basis: 0;

  text-align: ${(props) => props.center && "center"};
  min-width: ${props => props.width + 'px' || '100%'};

  /* outline: 1px solid red; */
  
`;

export const CellData = styled.span`

`

export const Image = styled.img.attrs((props) => ({
  src: props.src || defaultImg,
  alt: "Image game",
  width: "28px",
  height: "40px",
}))`
  margin-right: 16px;
`;
