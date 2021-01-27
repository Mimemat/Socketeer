import { lighten } from 'polished';
import styled, { css } from 'styled-components';

interface IContainerProps {
  isSelected: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  padding: 0.3rem 0.6rem;
  width: 100%;

  cursor: pointer;
  font-weight: 500;
  font-size: 14px;

  align-items: center;

  ${(props) =>
    props.isSelected &&
    css`
      background-color: ${(prps) => lighten(0.08, prps.theme.backgrounds.dark)};
    `}
  svg {
    width: 25px;
    height: 25px;
    margin-right: 1.4rem;
  }
`;
