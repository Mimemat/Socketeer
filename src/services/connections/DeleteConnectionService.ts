import { ConnectionStore } from 'store/connections';

import { IConnection } from '@atoms/connections';

export function deleteConnection(id: string): IConnection[] {
  const currentConnections = ConnectionStore.get('connections');

  const updatedConnections = currentConnections.filter(
    (connection) => connection.id !== id
  );

  ConnectionStore.set('connections', updatedConnections);

  return updatedConnections;
}
