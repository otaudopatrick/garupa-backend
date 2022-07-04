import { DbAuthentication } from "../../../data/usecases/db-authentication"
import { Authentication } from "../../../domain/usecases/authentication"
import { BcryptAdapter } from "../../../infra/cryptography/bcrypt-adapter"
import { JwtAdapter } from "../../../infra/cryptography/jwt-adapter"
import { AccountPostgresRepository } from "../../../infra/db/postgres/account-postgres-repository"
import env from "../../config/env"


export const makeDbAuthentication = (): Authentication => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  const accountPostgresRepository = new AccountPostgresRepository()
  return new DbAuthentication(accountPostgresRepository,bcryptAdapter,jwtAdapter,accountPostgresRepository)
}
