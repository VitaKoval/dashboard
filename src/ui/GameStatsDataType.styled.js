import styled from "styled-components";

const handleColortype = (color) => {
  switch (color) {
    case "green":
      return "#3CDC86";
    case "blue":
      return "#18A0FB";
    case "red":
      return "#ED2D95";
    case "orange":
      return "#F4A732";
    case "violet":
      return "#9B53F8";
    default:
      return "none";
  }
};

export const CheckBox = styled.div`
fill: ${(props) => handleColortype(props.fill)};
stroke: ${(props) => handleColortype(props.stroke)};
margin-right: 16px;
`
export const DataTitle = styled.p`
font-size: 13px;
line-height: 1.54;
margin: 0;
`

export const Specification = styled.p`
font-size: 11px;
line-height: 1.09;
color: var(--color-secondary);
margin: 0;


 `
