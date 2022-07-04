

import { AddAccountRepository } from "../../../data/protocols/db/account/add-account-repository";
import { CheckAccountByEmailRepository } from "../../../data/protocols/db/account/check-account-by-email-repository";
import { LoadAccountByEmailRepository } from "../../../data/protocols/db/account/load-account-by-email-repository";
import { UpdateAccessTokenRepository } from "../../../data/protocols/db/account/update-access-token-repository";
import { AddAccount } from "../../../domain/usecases/add-account";
import { User } from "./models/user-model";

export class AccountPostgresRepository implements AddAccountRepository, CheckAccountByEmailRepository,LoadAccountByEmailRepository,UpdateAccessTokenRepository  {
  async updateAccessToken(id: string, token: string):Promise<void> {
    await User.update({ accessToken: token }, {
      where: {
        id: id
      }
    });
  }
  async loadByEmail(email: string):Promise<LoadAccountByEmailRepository.Result> {
     const [result] =  await User.findAll({
      where: {
        email: email,
      }
    });
    
    return result && {
      id: result.dataValues.id,
      firstName:result.dataValues.firstName,
      lastName: result.dataValues.lastName,
      password: result.dataValues.password
    }
  }
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