import { DbDeleteAccountById } from "../../../data/usecases/db-delete-account"
import { DeleteAccountById } from "../../../domain/usecases/delete-account-by-id"
import { AccountPostgresRepository } from "../../../infra/db/postgres/account-postgres-repository"

export const makeDbDeleteAccountById = (): DeleteAccountById => {
  const accountByIdPostgresRepository = new AccountPostgresRepository()
  return new DbDeleteAccountById(accountByIdPostgresRepository)
}