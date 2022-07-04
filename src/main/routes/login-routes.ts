import { makeLoginController } from '../factories/controllers/login-controller-factory'
import { makeSignUpController } from '../factories/controllers/signup-controller-factory'
import { adaptRoute } from '../adapters/express-route-adapter'

import { Router } from 'express'


export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSignUpController()))
  router.post('/login', adaptRoute(makeLoginController()))
}
