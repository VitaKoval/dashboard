import styled from "styled-components";

export const Label = styled.label`
padding: 8px 24px;
font-size: 14px;
line-height: 1.43;

display: inline-flex;
align-items: center;
cursor: pointer;

&:hover,
&:focus {
    background-color: var(--color-hover);
    border-radius: 4px;
}

 &::after {
          content: 'ff';
          width: 20px;
          height: 20px;

          border: 1px solid red;
          margin-left: auto;
      }

`
export const Input = styled.input`
margin-left: auto;
position: absolute;

  z-index: -1;
  opacity: 0;

  &:checked {
    ${Label}::after {
     
    background-color: var(--color-hover);
    border-radius: 4px;
  }
  } 
`