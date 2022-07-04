import { LoadAccountById } from "../../domain/usecases/load-account-by-id";
import { InvalidParamError } from "../errors/invalid-param-error";
import { forbidden, ok, serverError } from "../helpers/http-helpers";
import { Controller } from "../protocols/controller";
import { HttpResponse } from "../protocols/http";

export class LoadAccountByIdController implements Controller{
  constructor(
    private readonly loadAccountById:LoadAccountById
  ){}

  async handle(request: LoadAccountByIdController.Request) :Promise<HttpResponse> {
    try {
      const {accountId}  = request
      const accountResult = await this.loadAccountById.load(accountId)
      if(!accountResult){
        return forbidden(new InvalidParamError('accountId'))
      }
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