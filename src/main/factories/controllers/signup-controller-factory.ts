import { SignUpController } from '../../../presentation/controllers/signup-controller'
import { Controller } from '../../../presentation/protocols/controller'

export const makeSignUpController = (): Controller => {
  const controller = new SignUpController()
  return controller
}
