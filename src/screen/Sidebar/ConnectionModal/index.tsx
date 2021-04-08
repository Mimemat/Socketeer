import React, { forwardRef, useRef, RefObject } from 'react';

import { useRecoilState } from 'recoil';
import { v4 as uuid } from 'uuid';

import { FormHandles, SubmitHandler } from '@unform/core';

import { connectionAtom } from '@atoms/connections';
import Dropdown from '@components/Form/Dropdown';
import Input from '@components/Form/Input';
import Modal, { IModalHandles } from '@components/Modal';
import { createConnection } from '@services/connections/CreateConnectionService';

import { Container, Form, InputGroup, SubmitButton } from './styles';

type FormData = {
  name: string;
  url: string;
  type: 'io' | 'ws';
};

const ConnectionModal: React.ForwardRefRenderFunction<IModalHandles> = (
  _,
  ref
) => {
  const [__, setConnections] = useRecoilState(connectionAtom);

  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    const { name, url, type } = data;

    // TODO: Add validation

    const newConnections = createConnection({
      id: uuid(),
      name,
      url,
      type,
    });

    setConnections(newConnections);

    return (ref as RefObject<IModalHandles>)?.current?.toggle(false);
  };

  return (
    <Modal ref={ref}>
      <Container>
        <h1>New Connection</h1>

        <Form onSubmit={handleSubmit} ref={formRef}>
          <Input label="URL" name="url" placeholder="Insert URL" />
          <InputGroup>
            <Input label="Name" name="name" placeholder="Insert name" />
            <Dropdown
              label="Type"
              name="type"
              items={[
                { label: 'Websocket', value: 'ws' },
                { label: 'Socket.io', value: 'io' },
              ]}
            />
          </InputGroup>

          <SubmitButton type="submit">Create</SubmitButton>
        </Form>
      </Container>
    </Modal>
  );
};

export default forwardRef(ConnectionModal);
