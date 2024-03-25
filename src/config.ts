import dotenv from 'dotenv'
dotenv.config()

const config = {
  PORT: process.env.PORT ? parseInt(process.env.PORT) : 8080,
}

export default config
