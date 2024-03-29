import React, { memo, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useTransition } from 'react-spring';

import { ToastMessage } from '@contexts/toast';

import Toast from './Toast';

import { Container } from './styles';

interface ToastContainerProps {
  toasts: ToastMessage[];
}

const ToastContainer: React.VFC<ToastContainerProps> = ({ toasts }) => {
  const visibleToasts = useMemo(() => {
    if (toasts.length > 5) {
      return toasts.slice(toasts.length - 5, toasts.length);
    }

    return toasts;
  }, [toasts]);

  const transitions = useTransition(visibleToasts, (toast) => toast.id, {
    from: { right: '-120%' },
    enter: { right: '0%' },
    leave: { right: '-120%' },
    config: {
      duration: 200,
    },
  });

  return createPortal(
    <Container>
      {transitions.map(({ item, key, props }) => (
        <Toast key={key} style={props} toast={item} />
      ))}
    </Container>,
    document.body
  );
};

export default memo(ToastContainer);
