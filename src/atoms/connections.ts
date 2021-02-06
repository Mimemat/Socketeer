import { atom } from 'recoil';

import { ConnectionStore } from '../store/connnections';

export interface IConnection {
  id: string;
  name: string;
  url: string;
  type: 'ws' | 'io';
}

export const connectionAtom = atom<IConnection[]>({
  key: 'connections',
  default: ConnectionStore.get('connections'),
});

export const selectedConnectionAtom = atom<IConnection | undefined>({
  key: 'selectedConnection',
  default: undefined,
});
