
import { badRequest, ok, serverError } from '../helpers/http-helpers'
import { Controller } from '../protocols/controller'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { Validation } from '../protocols/validation'

export class SignUpController implements Controller {
  constructor (
    private readonly validation:Validation
  ) {}

  async handle (httpRequest: HttpRequest):Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest)
      if (error) {
        return badRequest(error)
      }
      return ok({ ok: 'ok' })
    } catch (error) {
      return serverError(error)
    }
  }
}
