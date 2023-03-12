import styled from "styled-components";

import tablerCheck from '../../images/tabler_check.svg'

export const Label = styled.label`
padding: 12px px;
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
          content: '';
          width: 20px;
          height: 20px;

          margin-left: auto;
      }
`
export const Input = styled.input`
margin-left: auto;
position: absolute;

  z-index: -1;
  opacity: 0;

  &:checked{
    &+${Label}::after {
      background-image: url(${tablerCheck});
      background-repeat: no-repeat;
      background-size: contain;
    }
  } 
`

