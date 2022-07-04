import { Controller } from "../../../presentation/protocols/controller"
import { DeleteAccountByIdController } from "../../../presentation/controllers/delete-account-by-id-controller"
import { makeDbDeleteAccountById } from "../usecases/delete-account-by-id-factory"
import { makeDbCheckAccountById } from "../usecases/check-account-by-id-factory"

export const makeDeleteAccountByIdController = (): Controller => {
  const controller = new DeleteAccountByIdController(makeDbDeleteAccountById(),makeDbCheckAccountById())
  return controller
}
