import { Connection } from 'mysql2';
import { createConnection } from 'mysql2/promise';

let connection: Connection;

/**
 * 返回数据库连接
 */
export async function create_connection(): Promise<Connection> {
  if ( ! connection) {
    // @ts-ignore
    connection = await createConnection({
      host: '0.0.0.0',
      user: 'root',
      password: '123',
      database: 'mall',
    });
  }

  return connection;
}
