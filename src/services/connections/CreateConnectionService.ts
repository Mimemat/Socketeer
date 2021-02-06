import { IConnection } from '../../atoms/connections';
import { ConnectionStore } from '../../store/connnections';

export function createConnection(connection: IConnection): IConnection[] {
  const currentConnections = ConnectionStore.get('connections');

  const updatedConnections = [...currentConnections, connection];

  ConnectionStore.set('connections', updatedConnections);

  return updatedConnections;
}
