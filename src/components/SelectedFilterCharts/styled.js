import styled from "styled-components";
import img from '../../images/Radio.svg'

export const Label = styled.label`
padding: 8px 24px;
font-size: 14px;
line-height: 1.43;

display: inline-flex;
align-items: center;
cursor: pointer;


&::before {
  content: '';
  display: inline-block;
  width: 24px;
  height: 24px;
  
  border: 2px solid rgba(96, 103, 122, 1);
  border-radius: 50%;
  margin-right: 16px;
  padding: 2px;

  background-position: center center;
  background-size: 50% 50%;

}
`
export const Input = styled.input`
/* margin-right: 16px; */
position: absolute;
  z-index: -1;
  opacity: 0;
`

