import styled from "styled-components";

export const TopContainer = styled.div`
display: flex;
justify-content: space-between;

margin-bottom: 16px;
`

export const TopTitle = styled.h2`
font-weight: var(--fw-medium);
font-size: 18px;
line-height: 1.33;

margin: 0 auto 0 0;
`

export const TopText = styled.p`
margin: 0 16px 0 0;
font-size: 12px;
line-height: 1.33;
color: var(--color-secondary);

`
export const ChoiceDataType = styled.p`
display: flex;
align-items: center;
justify-content: center;

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

export const ChartStatsContainer = styled.div`
margin-right: 21px;
flex-grow: 5;
display: flex;
align-items: center;
justify-content: center;

height: 248px;

`

export const LegendContainer = styled.div`
margin-right: 24px;
flex-grow: 1;
`

export const LocationContainer = styled.div`
flex-grow: 1;
`
