import React, { useCallback, useRef } from 'react';
import { FiSend } from 'react-icons/fi';

import { useWs } from '../../../contexts/ws';

import { Container, Content, Title } from './styles';

const SendBox: React.FC = () => {
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const { send, connected } = useWs();

  const handleSend = useCallback(() => {
    const data = contentRef.current?.value;

    if (connected && data) {
      send(data);
    }
  }, [connected]);

  return (
    <Container>
      <Title>
        Send data <FiSend onClick={handleSend} />
      </Title>
      <Content ref={contentRef} />
    </Container>
  );
};

export default SendBox;
