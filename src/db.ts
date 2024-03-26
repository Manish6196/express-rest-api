import { MONGO_URL } from './config'
import mongoose from 'mongoose'

export const connectDB = async () => {
  await mongoose.connect(MONGO_URL)
  console.log('Connected to DB!')
}
