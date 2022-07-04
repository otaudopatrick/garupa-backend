
import {makeLoadAccountByIdController} from "../factories/controllers/load-account-by-id-controller-factory"
import { adaptRoute } from '../adapters/express-route-adapter'

import { Router } from 'express'

export default (router: Router): void => {
  router.get('/user/:accountId', adaptRoute(makeLoadAccountByIdController()))
}
