import express, { Express } from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'

import routerV1 from '@controllers/v1'

const app: Express = express()

app.use(
  cors({
    credentials: true,
  })
)
app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({ message: 'Hello from API!' })
})

app.use('/api/v1', routerV1)

export { app }
