import { IConnection } from '../../atoms/connections';
import { ConnectionStore } from '../../store/connnections';

export function updateConnection(
  id: string,
  newConnection: IConnection
): IConnection[] {
  const currentConnections = ConnectionStore.get('connections') as Array<
    IConnection
  >;

  const foundIndex = currentConnections.findIndex(
    (findConnection) => findConnection.id === id
  );

  currentConnections[foundIndex] = newConnection;

  console.log(currentConnections);

  ConnectionStore.set('connections', currentConnections);

  return currentConnections;
}
