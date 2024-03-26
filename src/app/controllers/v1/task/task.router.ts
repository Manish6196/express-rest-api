import express, { Router } from 'express'
import {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} from './task.controller'

const taskRouter: Router = express.Router()

taskRouter.route('/').get(getTasks).post(createTask)

taskRouter.route('/:userId').get(getTask).patch(updateTask).delete(deleteTask)

export { taskRouter }
