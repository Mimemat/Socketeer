import { animated } from 'react-spring';

import styled, { css } from 'styled-components';

interface ContainerProps {
  type: 'success' | 'error' | 'info';
}

const toastTypes = {
  info: css`
    color: #3172b7;
  `,
  success: css`
    color: ${(props) => props.theme.colors.green};
  `,
  error: css`
    color: #c53030;
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  margin-bottom: 16px;
  width: 320px;
  position: relative;

  padding: 16px 30px 16px 16px;
  margin: 0 24px 8px 0;
  border-radius: 4px;

  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  display: flex;
  ${(props) => toastTypes[props.type]}

  background-color: ${(props) => props.theme.backgrounds.dark};

  &:first-child {
    margin-top: 24px;
  }
  svg {
    margin: 3px 12px 0 0;
  }
  div {
    flex: 1;
    margin-right: 16px;

    strong {
      font-size: 14px;
      font-weight: 500;
    }

    p {
      margin-top: 4px;
      font-size: 12px;
      opacity: 0.7;

      line-height: 18px;
    }
  }
  button {
    background: transparent;

    position: absolute;
    right: 8px;
    top: 18px;

    opacity: 0.6;
    border: 0;
    outline: 0;

    color: inherit;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;
