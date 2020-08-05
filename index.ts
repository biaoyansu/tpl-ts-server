const http = require('http')

// 创建一个 server 对象
const server = http.createServer((request, response) => { // 每一条请求都会调用这个函数
  response.end('Yo, world~')
})

// 监听端口，不然无法与客户端通信
const hostname = 'localhost'
const port = 8080
server.listen(port, hostname)
console.log(`Server is alive at: http://${hostname}:${port}`)
