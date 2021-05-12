import React, { RefObject, useCallback, useRef, useState } from 'react';
import { FiCheck, FiPlus, FiXCircle } from 'react-icons/fi';

import { useRecoilState } from 'recoil';
import { v4 as uuid } from 'uuid';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import {
  connectionAtom,
  IHeader,
  selectedConnectionAtom,
} from '@atoms/connections';
import Input from '@components/Form/Input';
import Modal, { IModalHandles } from '@components/Modal';
import { updateConnection } from '@services/connections/UpdateConnnectionsService';

import {
  Container,
  InputGroup,
  Button,
  DoubleButtonContainer,
  SubmitButton,
} from './styles';

const HeadersModal: React.ForwardRefRenderFunction<IModalHandles> = (
  _,
  ref
) => {
  const [selectedConnection, setSelectedConnection] = useRecoilState(
    selectedConnectionAtom
  );
  const [__, setConnections] = useRecoilState(connectionAtom);
  const formRef = useRef<FormHandles>(null);
  const [headers, setHeaders] = useState<IHeader[]>(
    selectedConnection?.headers || []
  );

  const handleRemoveHeader = useCallback((id: string) => {
    setHeaders((oldState) => oldState.filter((header) => header.id !== id));
  }, []);

  const handleAddHeader = useCallback(() => {
    setHeaders((oldState) => [
      ...oldState,
      { id: uuid(), key: 'new', value: 'header' },
    ]);
  }, []);

  const handleSubmit = useCallback(() => {
    if (selectedConnection) {
      const data = formRef?.current?.getData() || [];

      let headersData: IHeader[] = [];

      Object.keys(data).forEach((key): void => {
        const [prefix, id] = key.split(':');
        if (prefix === 'k')
          headersData = [
            ...headersData,
            { id, key: data[key], value: data[`v:${id}`] },
          ];
      });

      const connectionData = {
        ...selectedConnection,
        headers: headersData,
      };

      const newConnections = updateConnection(
        selectedConnection.id,
        connectionData
      );
      console.log(newConnections, connectionData);

      setSelectedConnection(connectionData);
      setConnections(newConnections);
    }
    (ref as RefObject<IModalHandles>)?.current?.toggle(false);
  }, [selectedConnection]);

  return (
    <Modal ref={ref}>
      <Container>
        <Form ref={formRef} onSubmit={handleSubmit}>
          {headers.map((value) => (
            <InputGroup key={value.id}>
              <FiXCircle onClick={() => handleRemoveHeader(value.id)} />
              <Input defaultValue={value.key} name={`k:${value.id}`} />
              <Input defaultValue={value.value} name={`v:${value.id}`} />
            </InputGroup>
          ))}
        </Form>
        <DoubleButtonContainer>
          <Button onClick={handleAddHeader}>
            <FiPlus />
          </Button>
          <SubmitButton onClick={handleSubmit}>
            <FiCheck />
          </SubmitButton>
        </DoubleButtonContainer>
      </Container>
    </Modal>
  );
};

export default React.forwardRef(HeadersModal);
