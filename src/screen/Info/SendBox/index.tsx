import React, { useCallback, useRef } from 'react';
import { FiSend, FiMessageCircle } from 'react-icons/fi';

import { useRecoilState } from 'recoil';

import { selectedConnectionAtom } from '@atoms/connections';
import { IModalHandles } from '@components/Modal';
import { useWs } from '@contexts/ws';

import HeadersModal from '../HeadersModal';

import { Container, Content, Title } from './styles';

const SendBox: React.VFC = () => {
  const [selectedConnection] = useRecoilState(selectedConnectionAtom);

  const contentRef = useRef<HTMLTextAreaElement>(null);
  const modalRef = useRef<IModalHandles>(null);
  const { send, connected } = useWs();

  const handleOpenModal = useCallback(
    () => modalRef?.current?.toggle(true),
    []
  );

  const handleSend = useCallback(() => {
    const data = contentRef.current?.value;

    if (connected && data) {
      send(data);
    }
  }, [connected]);

  return (
    <>
      <Container>
        <Title>
          <p className="send-headers">
            Send data
            <FiMessageCircle
              onClick={handleOpenModal}
              className="headers-svg"
            />
          </p>
          <FiSend className="send-svg" onClick={handleSend} />
        </Title>
        <Content ref={contentRef} />
      </Container>
      <HeadersModal
        key={`HeaderModal:${selectedConnection?.id}`}
        ref={modalRef}
      />
    </>
  );
};

export default SendBox;
