import { DbCheckAccountById } from "../../../data/usecases/db-check-account-by-id"
import { CheckAccountById } from "../../../domain/usecases/check-account-by-id"
import { AccountPostgresRepository } from "../../../infra/db/postgres/account-postgres-repository"

export const makeDbCheckAccountById = (): CheckAccountById => {
  const accountByIdPostgresRepository = new AccountPostgresRepository()
  return new DbCheckAccountById(accountByIdPostgresRepository)
}