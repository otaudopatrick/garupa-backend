import { DbLoadAccountByToken } from "../../../data/usecases/db-load-account-by-token"
import { LoadAccountByToken } from "../../../domain/usecases/load-account-by-token"
import { JwtAdapter } from "../../../infra/cryptography/jwt-adapter"
import { AccountPostgresRepository } from "../../../infra/db/postgres/account-postgres-repository"
import env from "../../config/env"

export const makeDbLoadAccountByToken = (): LoadAccountByToken => {
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  const ccountByIdPostgresRepository = new AccountPostgresRepository()
  return new DbLoadAccountByToken(jwtAdapter,ccountByIdPostgresRepository)
}