import http from 'node:http'

const port = 8000

const server = http.createServer(async (req, res) => {
  res.end('server on')
})

server.listen(port, () => {
  console.log(`server is running on: http://localhost:${port}`)
})