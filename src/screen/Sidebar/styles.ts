import { ResizableBox } from 'react-resizable';

import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled(ResizableBox).attrs({
  resizeHandles: ['e'],
  axis: 'x',
})`
  background-color: ${(props) => props.theme.backgrounds.dark};
  border: 1px solid ${(props) => lighten(0.1, props.theme.backgrounds.ligth)};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.6rem 1rem;

  margin-bottom: 0.6rem;

  svg {
    width: 16px;
    height: 16px;
    color: ${(props) => props.theme.colors.green};
  }

  svg:hover {
    cursor: pointer;
    color: ${(props) => lighten(0.2, props.theme.colors.green)};
  }
`;
