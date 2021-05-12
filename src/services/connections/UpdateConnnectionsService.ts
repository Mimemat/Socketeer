import { IConnection } from '@atoms/connections';

import { ConnectionStore } from '../../store/connections';

export function updateConnection(
  id: string,
  updatedConnection: Omit<IConnection, 'id'>
): IConnection[] {
  const currentConnections = ConnectionStore.get(
    'connections'
  ) as Array<IConnection>;

  const foundIndex = currentConnections.findIndex(
    (findConnection) => findConnection.id === id
  );

  currentConnections[foundIndex] = {
    id,
    ...updatedConnection,
  };

  ConnectionStore.set('connections', currentConnections);

  return currentConnections;
}
