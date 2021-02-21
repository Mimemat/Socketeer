import { shade } from 'polished';
import styled from 'styled-components';

import Button from '@components/Button';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  flex: 1;

  padding: 1rem;

  display: flex;
  flex-direction: column;

  h1 {
    margin: auto auto 2rem;
  }
`;

export const Form = styled(Unform)`
  flex: 1;

  display: flex;
  flex-direction: column;

  .input {
    margin-top: 1rem;
  }
`;

export const InputGroup = styled.div`
  margin-top: 1rem;
  display: grid;
  align-items: center;

  grid-template-columns: 2fr 1fr;
  grid-column-gap: 1rem;

  .input {
    margin-top: 0 !important;
  }
`;

export const SubmitButton = styled(Button)`
  height: 60px;
  width: 60%;
  margin-top: 2rem;

  align-self: center;
  background-color: ${(props) => shade(0.2, props.theme.colors.green)};
`;
