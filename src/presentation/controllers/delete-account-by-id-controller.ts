import { DeleteAccountByIdRepository } from "../../data/protocols/db/account/delete-account-by-id-repository";
import { CheckAccountById } from "../../domain/usecases/check-account-by-id";
import { InvalidParamError } from "../errors/invalid-param-error";
import { forbidden, ok, serverError } from "../helpers/http-helpers";
import { Controller } from "../protocols/controller";
import { HttpResponse } from "../protocols/http";

export class DeleteAccountByIdController implements Controller{
  constructor(
    private readonly deleteAccountByIdRepository:DeleteAccountByIdRepository,
    private readonly checkAccountById: CheckAccountById,
  ){}

  async handle(request: DeleteAccountByIdController.Request) :Promise<HttpResponse> {
    try {
      const {accountId}  = request
      const exists = await this.checkAccountById.checkById(accountId)
      if (!exists) {
        return forbidden(new InvalidParamError('accountId'))
      }
      await this.deleteAccountByIdRepository.delete(accountId)
      return ok()
    } catch (error) {
     return serverError(error) 
    }
  }

}


export namespace DeleteAccountByIdController {
  export type Request = {
    accountId: string
  }
}