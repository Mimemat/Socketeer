import { atom } from 'recoil';

import { ConnectionStore } from '../store/connections';

export interface IHeader {
  id: string;
  key: string;
  value: string;
}

export interface IConnection {
  id: string;
  name: string;
  url: string;
  type: 'ws' | 'io';
  headers: IHeader[];
}

export const connectionAtom = atom<IConnection[]>({
  key: 'connections',
  default: ConnectionStore.get('connections'),
});

export const selectedConnectionAtom = atom<IConnection | undefined>({
  key: 'selectedConnection',
  default: undefined,
});
