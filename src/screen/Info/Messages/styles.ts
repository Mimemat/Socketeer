import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  background-color: ${(props) => props.theme.backgrounds.dark};

  border-radius: 8px;

  height: calc(100vh - 10rem);
  max-height: calc(100vh - 10rem);

  padding: 0.7rem;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => lighten(0.2, props.theme.backgrounds.ligth)};
    border-radius: 4px;
  }

  p {
    font-size: 16px;
    font-weight: 300;
  }
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 500;

  padding: 0px 8px;
  padding-bottom: 4px;
`;
