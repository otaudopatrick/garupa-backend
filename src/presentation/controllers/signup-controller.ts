
import { AddAccount } from '../../domain/usecases/add-account'
import { Authentication } from '../../domain/usecases/authentication'
import { EmailInUseError } from '../errors/emial-in-use-error'
import { badRequest, forbidden, ok, serverError } from '../helpers/http-helpers'
import { Controller } from '../protocols/controller'
import { HttpResponse } from '../protocols/http'
import { Validation } from '../protocols/validation'

export class SignUpController implements Controller {
  constructor (
    private readonly validation:Validation,
    private readonly addAccount: AddAccount,
    private readonly authentication: Authentication
  ) {}

  async handle (request: SignUpController.Request):Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }
      const { firstName, lastName, email, password } = request
      const isValid = await this.addAccount.add({
        firstName,
        lastName,
        email,
        password
      })
      if (!isValid) {
        return forbidden(new EmailInUseError())
      }
      const authenticationModel  = await this.authentication.auth({ 
        email,
        password
      })
      return ok(authenticationModel)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace SignUpController {
  export type Request = {
    firstName: string,
    lastName: string,
    email: string
    password: string
    passwordConfirmation: string
  }
}
