import http from 'node:http'
import { getDataFromDatabase } from './database/database.js'
import { sendJSON } from './utils/sendJSON.js'

const port = 8000

const server = http.createServer(async (req, res) => {
  let data = await getDataFromDatabase()

  if (req.url === '/api' && req.method === 'GET') {
    sendJSON(res, 200, data)

  } else if (req.url.startsWith('/api/continent') && req.method === 'GET') {
    const param = req.url.split('/').pop().replace('%20', ' ')
    data = data.filter(destination => {
      return destination.continent.toLowerCase() === param.toLowerCase()
    })
    sendJSON(res, 200, data)

  } else {
    const message = { error: 'not found', message: 'The requested route does not exist' }
    sendJSON(res, 404, message)
  }
})

server.listen(port, () => {
  console.log(`server is running on: http://localhost:${port}`)
})