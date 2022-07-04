import { DbLoadAccountById } from "../../../data/usecases/db-load-account-by-id"
import { LoadAccountById } from "../../../domain/usecases/load-account-by-id"
import { AccountPostgresRepository } from "../../../infra/db/postgres/account-postgres-repository"

export const makeDbLoadAccountById = (): LoadAccountById => {
  const loadAccountByIdPostgresRepository = new AccountPostgresRepository()
  return new DbLoadAccountById(loadAccountByIdPostgresRepository)
}