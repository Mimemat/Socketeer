import React, { useContext, createContext, useCallback, useState } from 'react';

import { v4 as uuid } from 'uuid';
import Ws from 'ws';

import { useToast } from './toast';

export interface IMsg {
  id: string;
  sentAt: string;
  data: string;
}

export interface IWsContext {
  msgs: IMsg[];
  clearMsgs(): void;
  connect(url: string): void;
  disconnect(): void;
  send(data: string): void;
  connected: boolean;
}

const WsContext = createContext<IWsContext>({} as IWsContext);

export const WsProvider: React.FC = ({ children }) => {
  const [msgs, setMsgs] = useState<IMsg[]>([]);
  const [ws, setWs] = useState<Ws>();
  const [connected, setConnected] = useState<boolean>(false);
  const { addToast } = useToast();

  const clearMsgs = useCallback(() => {
    setMsgs([]);
  }, []);

  const disconnect = useCallback(() => {
    if (ws) {
      ws.close();
      setConnected(false);
    }
  }, [ws]);

  const send = useCallback(
    (data: string) => {
      if (ws) {
        console.log(data);
        ws.send(data);
      }
    },
    [ws]
  );

  const connect = useCallback((url: string): void => {
    const socket = new Ws(url);
    setWs(socket);

    socket.on('open', () => {
      setConnected(true);
      console.log(`${url} connected`);
    });

    socket.on('message', (data) => {
      setMsgs((oldMsgs) => [
        ...oldMsgs,
        {
          id: uuid(),
          data: data.toString(),
          sentAt: new Date().toISOString(),
        },
      ]);
    });

    socket.on('error', (error) => {
      setConnected(false);
      addToast({
        type: 'error',
        title: 'Connection failed',
        description: error.message,
      });
    });

    socket.on('close', () => setConnected(false));
  }, []);

  return (
    <WsContext.Provider
      value={{ connect, disconnect, connected, msgs, send, clearMsgs }}
    >
      {children}
    </WsContext.Provider>
  );
};

export const useWs = (): IWsContext => useContext(WsContext);
