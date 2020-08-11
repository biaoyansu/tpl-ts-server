import { decode } from 'querystring';
import { route } from './route';

/**
 * 解析请求
 */
export function parse_request(request) {
  const url = request.url; // http://localhost:8080/add?a=1&b=2
  const parts = url.split('?'); // ['/add', 'a=1&b=2']
  const path = parts[0]; // '/add'
  const query: string = parts[1]; // 'a=1&b=2'
  const q: any = decode(query); // 'a=1&b=2' --> {a: 1, b: 2}
  request.$query = q;
  request.$path = path;
}

/**
 * 解析路由
 */
export async function parse_route(request, response) {
  let def: string | Function = route[request.$path];
  let body: string;

  if (def === undefined) {
    response.statusCode = 404;
    body = 'Not found';
  } else {
    switch (typeof def) {
      case 'string':
        body = def;
        break;
      case 'function':
        body = await def(request, response);
        break;
    }
  }

  switch (typeof body) {
    case 'object':
      body = JSON.stringify(body);
      response.setHeader('content-type', 'application/json');
      break;
  }

  return body;
}
