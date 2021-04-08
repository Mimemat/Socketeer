import React, { forwardRef, useRef, RefObject } from 'react';

import { useRecoilState } from 'recoil';

import { FormHandles, SubmitHandler } from '@unform/core';

import {
  connectionAtom,
  IConnection,
  selectedConnectionAtom,
} from '@atoms/connections';
import Dropdown, { IDropdownHandles } from '@components/Dropdown';
import { Container as DropdownContainer } from '@components/Dropdown/styles';
import Input from '@components/Form/Input';
import Modal, { IModalHandles } from '@components/Modal';
import { updateConnection } from '@services/connections/UpdateConnnectionsService';

import { Container, Form, InputGroup, SubmitButton } from './styles';

type FormData = {
  name: string;
  url: string;
};

export const dropdownItems = [
  { label: 'Websocket', value: 'ws' },
  { label: 'Socket.io', value: 'io' },
];

const ConnectionEditModal: React.ForwardRefRenderFunction<
  IModalHandles,
  { connection: IConnection }
> = ({ connection }, ref) => {
  const modalRef = useRef<IDropdownHandles>(null);

  const [__, setConnections] = useRecoilState(connectionAtom);
  const [selectedConnection, setSelectedConnection] = useRecoilState(
    selectedConnectionAtom
  );

  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    if (!selectedConnection) {
      return;
    }

    const { name, url } = data;
    const type = modalRef?.current?.selected.value as 'io' | 'ws';
    const { id } = selectedConnection;

    const newConnections = updateConnection(id, {
      name,
      url,
      type,
    });

    if (selectedConnection.id === connection.id) {
      setSelectedConnection({
        id,
        name,
        url,
        type,
      });
    }
    setConnections(newConnections);

    (ref as RefObject<IModalHandles>)?.current?.toggle(false);
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
            <DropdownContainer>
              <p>Type</p>
              <Dropdown
                ref={modalRef}
                items={dropdownItems}
                defaultValue={dropdownItems.findIndex(
                  (item) => item.value === connection.type
                )}
              />
            </DropdownContainer>
          </InputGroup>

          <SubmitButton type="submit">Update</SubmitButton>
        </Form>
      </Container>
    </Modal>
  );
};

export default forwardRef(ConnectionEditModal);
