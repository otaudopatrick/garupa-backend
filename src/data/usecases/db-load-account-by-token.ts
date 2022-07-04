import { Console } from "console"
import { LoadAccountByToken } from "../../domain/usecases/load-account-by-token"
import { Decrypter } from "../protocols/cryptography/decrypter"
import { LoadAccountByTokenRepository } from "../protocols/db/account/load-account-by-token-repository"



export class DbLoadAccountByToken implements LoadAccountByToken {
  constructor (
    private readonly decrypter: Decrypter,
    private readonly loadAccountByTokenRepository: LoadAccountByTokenRepository
  ) {}

  async load (accessToken: string): Promise<LoadAccountByToken.Result> {
    let token: string
    try {
      token = await this.decrypter.decrypt(accessToken)
    } catch (error) {
      return null
    }
    if (token) {
      const account = await this.loadAccountByTokenRepository.loadByToken(accessToken)
      if (account) {
        return account
      }
    }
    return null
  }
}