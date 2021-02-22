import { ContextMenu, MenuItem } from 'react-contextmenu';

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

  transition: background-color 0.2s;

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

  &:hover {
    ${(props) =>
      !props.isSelected &&
      css`
        background-color: ${(prps) =>
          lighten(0.03, prps.theme.backgrounds.dark)};
      `}
  }
`;

export const ConnectionMenu = styled(ContextMenu)`
  width: 10rem;
  z-index: 1;
  padding: 0.5rem 0;

  background: ${(props) => props.theme.backgrounds.dark};
  border: 1px solid ${(props) => props.theme.backgrounds.ligth};
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  > div {
    display: flex;
    align-items: center;
    padding: 0.3rem 0.6rem;

    justify-content: space-between;
    cursor: pointer;

    transition: background 0.2s;
    :hover {
      background: ${(props) => lighten(0.01, props.theme.backgrounds.dark)};
    }
  }
`;

export const DeleteMenuItem = styled(MenuItem)`
  color: #e96379;
`;
