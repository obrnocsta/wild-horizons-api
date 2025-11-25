import http from 'node:http'
import { getDataFromDatabase } from './database/database.js'

const port = 8000

const server = http.createServer(async (req, res) => {
  const data = await getDataFromDatabase()

  if (req.url === '/api' && req.method === 'GET') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
  } else {
    res.statusCode = 404
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'not found', message: 'The requested route does not exist' }))
  }
})

server.listen(port, () => {
  console.log(`server is running on: http://localhost:${port}`)
})