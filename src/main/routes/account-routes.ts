
import {makeLoadAccountByIdController} from "../factories/controllers/load-account-by-id-controller-factory"
import { adaptRoute } from '../adapters/express-route-adapter'
import {auth} from "../middlewares/auth"
import { Router } from 'express'
import { makeDeleteAccountByIdController } from "../factories/controllers/delete-account-by-id-controller-factory"

export default (router: Router): void => {
  router.get('/user/:accountId',auth, adaptRoute(makeLoadAccountByIdController()))
  router.delete('/user/:accountId',auth, adaptRoute(makeDeleteAccountByIdController()))
}
