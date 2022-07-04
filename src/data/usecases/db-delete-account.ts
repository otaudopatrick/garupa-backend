import { DeleteAccountById } from "../../domain/usecases/delete-account-by-id";
import { DeleteAccountByIdRepository } from "../protocols/db/account/delete-account-by-id-repository";


export class DbDeleteAccountById implements DeleteAccountById {
  constructor (
    private readonly deleteAccountByIdRepository: DeleteAccountByIdRepository
  ) {}

  async delete(id: string):Promise<DeleteAccountById.Result>{
    return this.deleteAccountByIdRepository.delete(id)
  }
}