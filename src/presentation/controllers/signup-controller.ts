
import { AddAccount } from '../../domain/usecases/add-account'
import { EmailInUseError } from '../errors/emial-in-use-error'
import { badRequest, forbidden, ok, serverError } from '../helpers/http-helpers'
import { Controller } from '../protocols/controller'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { Validation } from '../protocols/validation'

export class SignUpController implements Controller {
  constructor (
    private readonly validation:Validation,
    private readonly addAccount: AddAccount
    
  ) {}

  async handle (request: SignUpController.Request):Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }
      console.log(request)

      const { name, email, password } = request
      const isValid = await this.addAccount.add({
        name,
        email,
        password
      })
      if (!isValid) {
        return forbidden(new EmailInUseError())
      }
      return ok({ ok: 'ok' })
    } catch (error) {

      return serverError(error)
    }
  }
}

export namespace SignUpController {
  export type Request = {
    name: string
    email: string
    password: string
    passwordConfirmation: string
  }
}
