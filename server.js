import http from 'node:http'

const port = 8000

const server = http.createServer(async (req, res) => {
  if (req.url === '/api' && req.method === 'GET') {
    res.end('api on')
  }
})

server.listen(port, () => {
  console.log(`server is running on: http://localhost:${port}`)
})