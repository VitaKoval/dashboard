import styled from "styled-components";

export const BlockDashboardContainer = styled.div`
  padding: 24px 32px 20px 32px;
  border-radius: 4px;
  background-color: var(--color-bg-card);
  height: ${props => props.height || '100%'} ;
  width: 100%;
`;
