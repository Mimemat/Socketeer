import React, { memo, useEffect, useRef } from 'react';

import { useField } from '@unform/core';

import { Container } from './styles';

interface Props {
  label: string;
  name: string;
}
type InputProps = JSX.IntrinsicElements['input'] & Props;

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current,
    });
  }, [fieldName, registerField]);
  return (
    <Container className="input">
      <p>{label}</p>
      <input
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
    </Container>
  );
};
export default memo(Input);
