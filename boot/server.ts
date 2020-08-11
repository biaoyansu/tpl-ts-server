import { app_config } from '../config/app';
import { parse_request, parse_route } from '../net/request';

const http = require('http');

/**
 * 创建 Server
 */
export async function create_server() {
  // 创建一个 server 对象
  const server = http.createServer(async (request, response) => { // 每一条请求都会调用这个函数
    parse_request(request);
    const body = await parse_route(request, response);
    response.end(body);
  });
  return server;
}

/**
 * 启动 Server
 */
export async function boot() {
  const server = await create_server();
  // 监听端口，不然无法与客户端通信
  const { host, port } = app_config;
  server.listen(port, host);
  console.log(`Server is alive at: http://${host}:${port}`);
}
