

import { AddAccountRepository } from "../../../data/protocols/db/account/add-account-repository";
import { CheckAccountByEmailRepository } from "../../../data/protocols/db/account/check-account-by-email-repository";
import { CheckAccountByIdRepository } from "../../../data/protocols/db/account/check-account-by-id-repository";
import { DeleteAccountByIdRepository } from "../../../data/protocols/db/account/delete-account-by-id-repository";
import { LoadAccountByEmailRepository } from "../../../data/protocols/db/account/load-account-by-email-repository";
import { LoadAccountByIdRepository } from "../../../data/protocols/db/account/load-account-by-id-repository";
import { LoadAccountByTokenRepository } from "../../../data/protocols/db/account/load-account-by-token-repository";
import { UpdateAccessTokenRepository } from "../../../data/protocols/db/account/update-access-token-repository";
import { AddAccount } from "../../../domain/usecases/add-account";
import { User } from "./models/user-model";

export class AccountPostgresRepository implements AddAccountRepository, CheckAccountByEmailRepository,LoadAccountByEmailRepository,UpdateAccessTokenRepository, LoadAccountByIdRepository,CheckAccountByIdRepository,DeleteAccountByIdRepository,LoadAccountByTokenRepository  {
  async loadByToken(token: string) :Promise<LoadAccountByTokenRepository.Result>{
    const  [result] =  await User.findAll({
      where: {
        accessToken: token,
      }
    });
    return result && {
      id: result.dataValues.id,
    }
  }
  async delete(id: string):Promise<DeleteAccountByIdRepository.Result>{
    await User.destroy({
      where: {
        id: id,
      }
    });
    return {}
  }
  async checkById(id: string):Promise<boolean>{
    const result =  await User.findAll({
      where: {
        id: id,
      }
    });
    return !result.length ? false : true
  }
  async loadById(id: string):Promise<LoadAccountByIdRepository.Result>{
    const [result] =  await User.findAll({
      where: {
        id: id,
      }
    });
    return result && {
      id: result.dataValues.id,
      firstName:result.dataValues.firstName,
      lastName: result.dataValues.lastName,
      email: result.dataValues.email
    }
  }
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