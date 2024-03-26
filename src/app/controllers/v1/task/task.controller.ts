import { Request, Response } from 'express'

const createTask = () => {}
const getTasks = (req: Request, res: Response) => {
  return res.json(['Task 1', 'Task 2'])
}
const getTask = () => {}
const updateTask = () => {}
const deleteTask = () => {}

export { createTask, getTasks, getTask, updateTask, deleteTask }
