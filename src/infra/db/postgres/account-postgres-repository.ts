import { resolve } from "path";
import { AddAccountRepository } from "../../../data/protocols/db/account/add-account-repository";
import { CheckAccountByEmailRepository } from "../../../data/protocols/db/account/check-account-by-email-repository";
import { AddAccount } from "../../../domain/usecases/add-account";

export class AccountPostgresRepository implements AddAccountRepository, CheckAccountByEmailRepository  {
  async checkByEmail(email: string):Promise<boolean>{
    return Promise.resolve(true)
  }
  async add(data: AddAccount.Params): Promise<boolean>{
    return Promise.resolve(true)
  }
  
}