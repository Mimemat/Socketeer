import React, { forwardRef, useRef, RefObject } from 'react';

import { useRecoilState } from 'recoil';

import { connectionAtom, IConnection } from '@atoms/connections';
import Dropdown from '@components/Form/Dropdown';
import Input from '@components/Form/Input';
import Modal, { IModalHandles } from '@components/Modal';
import { updateConnection } from '@services/connections/UpdateConnnectionsService';
import { FormHandles, SubmitHandler } from '@unform/core';

import { Container, Form, InputGroup, SubmitButton } from './styles';

type FormData = {
  name: string;
  url: string;
  type: 'io' | 'ws';
};

type EditModalProps = {
  connection: IConnection;
};

const ConnectionEditModal: React.ForwardRefRenderFunction<
  IModalHandles,
  EditModalProps
> = ({ connection }, ref) => {
  const [__, setConnections] = useRecoilState(connectionAtom);

  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    const { name, url, type } = data;

    // TODO: Add validation

    const newConnections = updateConnection(connection.id, {
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
        <h1>Update Server</h1>

        <Form onSubmit={handleSubmit} ref={formRef}>
          <Input
            defaultValue={connection.url}
            label="URL"
            name="url"
            placeholder="Insert URL"
          />
          <InputGroup>
            <Input
              defaultValue={connection.name}
              label="Name"
              name="name"
              placeholder="Insert name"
            />
            <Dropdown
              label="Type"
              name="type"
              items={[
                { label: 'Websocket', value: 'ws' },
                { label: 'Socket.io', value: 'io' },
              ]}
            />
          </InputGroup>

          <SubmitButton type="submit">Update</SubmitButton>
        </Form>
      </Container>
    </Modal>
  );
};

export default forwardRef(ConnectionEditModal);
