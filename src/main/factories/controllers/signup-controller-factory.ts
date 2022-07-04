import { SignUpController } from '../../../presentation/controllers/signup-controller'
import { Controller } from '../../../presentation/protocols/controller'
import { makeDbAddAccount } from '../usecases/add-account-factory'
import { makeSignUpValidation } from './signup-validation-factory'

export const makeSignUpController = (): Controller => {
  const controller = new SignUpController(makeSignUpValidation(), makeDbAddAccount())
  return controller
}
