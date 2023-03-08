import styled from 'styled-components';

export const GameStatsContainer = styled.div`
flex-grow: 3;
padding: 24px 32px 20px 32px;
border-radius: 4px;
background-color: var(--color-bg-card);

height: 344px;


&:not(:last-child) {
    margin-right: 16px;
}
`

export const GameStatsLocationContainer = styled.div`
flex-grow: 1;
padding: 24px 32px 32px 32px;
border-radius: 4px;
background-color: var(--color-bg-card);
`

