import Store from 'electron-store';

import { IConnection } from '../atoms/connections';

export const ConnectionStore = new Store<{ connections: IConnection[] }>({
  defaults: {
    connections: [],
  },
});
