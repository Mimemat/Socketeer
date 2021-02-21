import React from 'react';
import { FiX } from 'react-icons/fi';
import { useTransition, animated } from 'react-spring';

import { useWs } from '@contexts/ws';

import { Container, Title, Content } from './styles';

const Messages: React.FC = () => {
  const { msgs, clearMsgs } = useWs();

  const transitions = useTransition(msgs, (msg) => msg.id, {
    from: { transform: 'translate3d(0,20px,0)', opacity: 0 },
    enter: { transform: 'translate3d(0,0px,0)', opacity: 1 },
    leave: { transform: 'translate3d(0,20px,0)', opacity: 0 },
    config: {
      duration: 100,
    },
  });

  return (
    <Container>
      <Title>
        Data log{' '}
        <button onClick={clearMsgs}>
          <FiX size={20} />
        </button>
      </Title>
      <Content>
        {transitions.map(({ item, key, props }) => (
          <animated.div style={props} key={key}>
            <p>{`[${item.sentAt}] ${item.data}`}</p>
          </animated.div>
        ))}
      </Content>
    </Container>
  );
};

export default Messages;
