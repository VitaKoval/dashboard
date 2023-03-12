import styled from "styled-components";

export const InputContainer = styled.div`
display: flex;
justify-content: space-between;
`

export const Label = styled.label`
display: inline-flex;
align-items: center;
padding: 8px 24px;
width: 100%;

font-size: 14px;
line-height: 1.43;
cursor: pointer;

/* margin-right: auto; */

&::after {
          content: '';
          width: 28px;
          height: 19.6px;

          margin-left: auto;
         
          border-radius: 16px;
      }

`
export const Input = styled.input`
position: absolute;

  z-index: -1;
  opacity: 0;

  &+${Label}::after {
      background-color: ${props=>props.checked? 'var(--color-bg-active)' :'#60677A'};
    }

`