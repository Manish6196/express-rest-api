import express, { Express } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  // Logic to fetch users from the database
  res.json({ users: [] })
})

app.post('/', (req, res) => {
  // Logic to create a new user
  res.json({ message: 'User created successfully' })
})

// Start the server
app.listen(port, () => {
  console.log(`User microservice listening at http://localhost:${port}`)
})
