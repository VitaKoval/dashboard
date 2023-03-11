import styled from "styled-components";

export const Container = styled.div`
padding: 24px 32px 16px 32px;
`

export const TitleCardHeader = styled.h2`
font-weight: var(--fw-medium);
font-size: 18px;
line-height: 1.33;

margin: 0 auto 0 0;
`

export const TextCardHeader = styled.p`
margin: 0 16px 0 0;
font-size: 12px;
line-height: 1.33;
color: var(--color-secondary);

`
export const SelectedFilter = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 0;

font-size: 13px;
line-height: 1.54;

stroke: var(--color-primary);
cursor: pointer;

&:hover,
&:focus {
color: #76B2EA;
stroke: #76B2EA;
}
`

export const Icon = styled.div`
margin-right: 8px;
`

export const Select = styled.div`

`
