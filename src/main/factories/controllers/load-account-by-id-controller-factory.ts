import { Controller } from "../../../presentation/protocols/controller"
import { LoadAccountByIdController } from "../../../presentation/controllers/load-account-by-id-controller"
import { makeDbLoadAccountById } from "../usecases/load-account-by-id-factory"
import { makeDbCheckAccountById } from "../usecases/check-account-by-id-factory"

export const makeLoadAccountByIdController = (): Controller => {
  const controller = new LoadAccountByIdController(makeDbLoadAccountById(),makeDbCheckAccountById())
  return controller
}
