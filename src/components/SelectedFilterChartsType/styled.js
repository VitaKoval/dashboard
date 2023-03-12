import styled from "styled-components";
import radio from "../../images/Radio.svg";
import radioCheck from "../../images/RadioCheck.svg";

export const Label = styled.label`
  padding: 8px 24px;
  font-size: 14px;
  line-height: 1.43;

  display: inline-flex;
  align-items: center;
  cursor: pointer;

  &::before {
    content: "";
    width: 24px;
    height: 24px;
    background-image: url(${radio});
    background-repeat: no-repeat;
    background-size: contain;

    margin-right: 16px;
  }
`;
export const Input = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;

  &:checked {
    & + ${Label}::before {
      background-image: url(${radioCheck});
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
`;
