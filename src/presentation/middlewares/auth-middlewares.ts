
import { LoadAccountByToken } from "../../domain/usecases/load-account-by-token"
import { AccessDeniedError } from "../errors/access-denied-error"
import { forbidden, ok, serverError } from "../helpers/http-helpers"
import { HttpResponse } from "../protocols/http"
import { Middleware } from "../protocols/middleware"

export class AuthMiddleware implements Middleware {
  constructor (
    private readonly loadAccountByToken: LoadAccountByToken,
  ) {}

  async handle (request: AuthMiddleware.Request): Promise<HttpResponse> {
    try {
      const { accessToken } = request
      if (accessToken) {
        const account = await this.loadAccountByToken.load(accessToken)
        if (account) {
          return ok({ accountId: account.id })
        }
      }
      return forbidden(new AccessDeniedError())
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace AuthMiddleware {
  export type Request = {
    accessToken?: string
  }
}