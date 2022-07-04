

import { AddAccountRepository } from "../../../data/protocols/db/account/add-account-repository";
import { CheckAccountByEmailRepository } from "../../../data/protocols/db/account/check-account-by-email-repository";
import { AddAccount } from "../../../domain/usecases/add-account";
import { User } from "./models/user-model";

export class AccountPostgresRepository implements AddAccountRepository, CheckAccountByEmailRepository  {
  async checkByEmail(email: string):Promise<boolean>{
   const result =  await User.findAll({
      where: {
        email: email,
      }
    });
    return !result.length ? false : true
  }
  async add(data: AddAccount.Params): Promise<boolean>{
    const {firstName,lastName,email,password} = data
    const result = await User.create({ firstName,lastName,email,password });
    return !result.length ? true : false
  }
}