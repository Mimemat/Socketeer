import React, {
  useState,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from 'react';
import ReactModal, { Props } from 'react-modal';

import { Container } from './styles';

type ModalProps = { children?: React.ReactNode } & Omit<Props, 'isOpen'>;

export interface IModalHandles {
  toggle(value?: boolean): void;
}

const Modal: React.ForwardRefRenderFunction<IModalHandles, ModalProps> = (
  { children, ...rest },
  ref
) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = useCallback(
    (value?: boolean) => {
      setIsOpen(value ?? !isOpen);
    },
    [isOpen]
  );

  useImperativeHandle(ref, () => ({
    toggle,
  }));

  return (
    <ReactModal
      {...rest}
      appElement={document.getElementById('modal') as HTMLElement}
      shouldCloseOnEsc={true}
      onRequestClose={() => toggle(false)}
      overlayClassName="modal-overlay"
      className="modal-content"
      isOpen={isOpen}
    >
      <Container>{children}</Container>
    </ReactModal>
  );
};

export default forwardRef(Modal);
