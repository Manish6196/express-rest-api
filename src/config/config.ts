import 'dotenv/config'

export const ENV = process.env.NODE_ENV
export const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8080
export const MONGO_URL = process.env.MONGO_URL || ''
