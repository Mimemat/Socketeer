import React, { useContext, createContext, useCallback, useState } from 'react';

import Ws from 'ws';

export interface IMsg {
  sentAt: string;
  data: string;
}

export interface IWsContext {
  msgs: IMsg[];
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

  const disconnect = useCallback(() => {
    if (ws) {
      ws.close();
      setConnected(false);
    }
  }, []);

  const send = useCallback((data: string) => {
    if (ws) {
      console.log(data);
      ws.send(data);
    }
  }, []);

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
          data: data.toString(),
          sentAt: new Date().toISOString(),
        },
      ]);
    });

    socket.on('error', (error) => {
      setConnected(false);
      console.error(error);
      // TODO: add toasts
    });

    socket.on('close', () => setConnected(false));
  }, []);

  return (
    <WsContext.Provider value={{ connect, disconnect, connected, msgs, send }}>
      {children}
    </WsContext.Provider>
  );
};

export const useWs = (): IWsContext => useContext(WsContext);
