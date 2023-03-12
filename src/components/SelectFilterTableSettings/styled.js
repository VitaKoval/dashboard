import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 24px;
  width: 100%;

  font-size: 14px;
  line-height: 1.43;
  cursor: pointer;
`;

export const CheckBox = styled.span`
  position: relative;
  width: 28px;
  height: 19.6px;

  border-radius: 16px;

  background-color: ${(props) =>
    props.checked ? "var(--color-bg-active)" : "#60677A"};

  &::before {
    content: "";
    position: absolute;
    left: 3px;
    top: 3px;
    width: 14px;
    height: 14px;
    background-color: #ccc;
    border-radius: 7px;

    transition: all 0.3s ease-in-out;

    transform: ${(props) => props.checked && "translateX(9px)"};
  }
`;

export const Input = styled.input`
  position: absolute;

  z-index: -1;
  opacity: 0;
`;
