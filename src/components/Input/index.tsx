import React, { forwardRef } from 'react';

import { Container } from './styles';

interface Props {
  label?: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, ...rest },
  ref
) => {
  return (
    <Container className="input">
      {label && <p>{label}</p>}
      <input ref={ref} {...rest} />
    </Container>
  );
};
export default forwardRef(Input);
