
import { Controller } from '../protocols/controller'
import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController implements Controller {
  async handle (request: HttpRequest):Promise<HttpResponse> {
    return new Promise(resolve => resolve({ statusCode: 200, body: null }))
  }
}
