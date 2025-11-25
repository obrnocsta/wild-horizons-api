import http from 'node:http'
import { getDataFromDatabase } from './database/database.js'
import { sendJSON } from './utils/sendJSON.js'
import { filterData } from './utils/filterData.js'
import { filterQueryData } from './utils/filterQueryData.js'

const port = 8000

const server = http.createServer(async (req, res) => {
  let data = await getDataFromDatabase()

  const path = new URL(req.url, `http://${req.headers.host}`)

  if (path.pathname === '/api' && req.method === 'GET') {
    data = filterQueryData(data, path)
    sendJSON(res, 200, data)

  } else if (req.url.startsWith('/api/continent') && req.method === 'GET') {
    data = filterData(req, data, 'continent')
    sendJSON(res, 200, data)

  } else if (req.url.startsWith('/api/country') && req.method === 'GET') {
    data = filterData(req, data, 'country')
    sendJSON(res, 200, data)

  } else {
    const message = { error: 'not found', message: 'The requested route does not exist' }
    sendJSON(res, 404, message)
  }
})

server.listen(port, () => {
  console.log(`server is running on: http://localhost:${port}`)
})