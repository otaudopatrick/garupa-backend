import { CheckAccountById } from "../../domain/usecases/check-account-by-id";
import { LoadAccountById } from "../../domain/usecases/load-account-by-id";
import { InvalidParamError } from "../errors/invalid-param-error";
import { forbidden, ok, serverError } from "../helpers/http-helpers";
import { Controller } from "../protocols/controller";
import { HttpResponse } from "../protocols/http";

export class LoadAccountByIdController implements Controller{
  constructor(
    private readonly loadAccountById:LoadAccountById,
    private readonly checkAccountById: CheckAccountById
  ){}

  async handle(request: LoadAccountByIdController.Request) :Promise<HttpResponse> {
    try {
      const {accountId}  = request

      const exists = await this.checkAccountById.checkById(accountId)
      if (!exists) {
        return forbidden(new InvalidParamError('accountId'))
      }
      const accountResult = await this.loadAccountById.load(accountId)
      return ok(accountResult)
    } catch (error) {
     return serverError(error) 
    }
  }

}


export namespace LoadAccountByIdController {
  export type Request = {
    accountId: string
  }
}