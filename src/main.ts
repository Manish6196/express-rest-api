import http from 'node:http'
import { app } from './app'
import config from './config'

const server = http.createServer(app)

server.listen(config.PORT, () => {
  console.log(`Server listening at http://localhost:${config.PORT}`)
})
