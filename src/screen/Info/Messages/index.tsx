import React from 'react';

import { useWs } from '../../../contexts/ws';

import { Container, Title, Content } from './styles';

const Messages: React.FC = () => {
  const { msgs } = useWs();

  return (
    <Container>
      <Title>Data log</Title>
      <Content>
        {msgs.map((msg, index) => (
          <p key={index}>{`[${msg.sentAt}] ${msg.data}`}</p>
        ))}
      </Content>
    </Container>
  );
};

export default Messages;
