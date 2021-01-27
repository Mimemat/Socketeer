import { atom } from 'recoil';

export interface IConnection {
  id: string;
  name: string;
  url: string;
  type: 'ws' | 'io';
}

export const connectionAtom = atom<IConnection[]>({
  key: 'connections',
  default: [],
});

export const selectedConnectionAtom = atom<IConnection | undefined>({
  key: 'selectedConnection',
  default: undefined,
});
