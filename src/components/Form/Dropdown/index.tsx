import React, { useEffect, useRef } from 'react';

import Dropdown, {
  IDropdownHandles,
  IDropdownProps,
} from '@components/Dropdown';
import { useField } from '@unform/core';

import { Container } from './styles';

interface IFormDropdownProps extends IDropdownProps {
  name: string;
  label: string;
}

const FormDropdown: React.FC<IFormDropdownProps> = ({
  name,
  label,
  ...rest
}) => {
  const dropdownRef = useRef<IDropdownHandles>(null);
  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: dropdownRef.current,
      getValue: (ref: IDropdownHandles) => {
        return ref.selected.value;
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <p>{label}</p>
      <Dropdown ref={dropdownRef} {...rest} />
    </Container>
  );
};

export default FormDropdown;
