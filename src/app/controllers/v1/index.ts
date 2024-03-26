import express, { Router } from 'express'
import { ENV } from '@config/env'
import { IRoute } from '@lib/interfaces'
import { taskRouter } from './task'

const router = express.Router()

const defaultIRoute: IRoute[] = [
  {
    path: '/auth',
    router: taskRouter,
  },
  {
    path: '/tasks',
    router: taskRouter,
  },
]

const devIRoute: IRoute[] = [
  // IRoute available only in development mode
  {
    path: '/docs',
    router: taskRouter,
  },
]

defaultIRoute.forEach(route => {
  router.use(route.path, route.router)
})

/* istanbul ignore next */
if (ENV === 'development') {
  devIRoute.forEach(route => {
    router.use(route.path, route.router)
  })
}

export default router
