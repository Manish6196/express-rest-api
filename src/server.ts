import http from 'node:http'
import { app } from './app'
import { PORT } from './config'
import { connectDB } from './utils'

const server = http.createServer(app)

async function startServer() {
  await connectDB()
  server.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
  })
}

startServer()
