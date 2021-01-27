import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  padding: 0.3rem;
`;

export const Content = styled.div`
  flex: 1;
  padding: 1rem 2.3rem;

  display: grid;
  grid-template-columns: 2.7fr 1fr;
  column-gap: 2rem;
`;
