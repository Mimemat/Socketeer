import React, { createContext, useState, useContext, useCallback } from 'react';

import { v4 as uuid } from 'uuid';

import ToastContainer from '@components/ToastContainer';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  description: string;
}

interface IToastShow {
  (message: Omit<ToastMessage, 'id'>): string;
}

interface IToastHide {
  (id: string): void;
}

interface ToastContext {
  addToast: IToastShow;
  removeToast: IToastHide;
}

const ToastContext = createContext<ToastContext | null>(null);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const removeToast = useCallback((id) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  const addToast = useCallback<IToastShow>((message) => {
    const id = uuid();

    setMessages((state) => [...state, { ...message, id }]);

    return id;
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <ToastContainer toasts={messages} />
      {children}
    </ToastContext.Provider>
  );
};

function useToast(): ToastContext {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
