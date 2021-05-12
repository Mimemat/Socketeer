import { shade } from 'polished';
import styled from 'styled-components';

import ComponentButton from '@components/Button';

export const Container = styled.div`
  flex: 1;

  padding: 0.5rem;

  display: flex;
  flex-direction: column;
`;

export const InputGroup = styled.div`
  margin-top: 1rem;
  display: grid;
  align-items: center;

  grid-template-columns: 0.4fr 1fr 1fr;
  grid-column-gap: 1rem;

  .input {
    margin-top: 0 !important;
  }

  svg {
    color: #e96379;
    font-size: 24px;

    cursor: pointer;

    transition-delay: all 0.2s;

    &:hover {
      filter: brightness(110%);
    }
  }
`;

export const DoubleButtonContainer = styled.div`
  margin: 0 auto;
  margin-top: 0.8rem;
  font-size: 1.5rem;

  padding: 0.4rem 1rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;

  max-width: 6rem;
`;

export const Button = styled(ComponentButton)`
  font-size: 1.5rem;

  background-color: ${(props) => props.theme.backgrounds.dark};

  svg {
    margin-left: 0px;
  }
`;

export const SubmitButton = styled(ComponentButton)`
  font-size: 1.5rem;

  background-color: ${(props) => shade(0.1, props.theme.colors.green)};
  border-radius: 0px 4px 4px 0px;

  svg {
    margin-left: 0px;
  }
`;
