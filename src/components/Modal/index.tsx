import React, {
  useState,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from 'react';
import ReactModal from 'react-modal';

import { Container } from './styles';

export interface IModalHandles {
  toggle(value?: boolean): void;
}

const Modal: React.ForwardRefRenderFunction<
  IModalHandles,
  { children?: React.ReactNode }
> = ({ children }, ref) => {
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
