import { LoadAccountById } from "../../domain/usecases/load-account-by-id";
import { LoadAccountByIdRepository } from "../protocols/db/account/load-account-by-id-repository";

export class DbLoadAccountById implements LoadAccountById {
  constructor (
    private readonly loadAccountByIdRepository: LoadAccountByIdRepository
  ) {}

  async load (id:string): Promise<LoadAccountById.Result> {
    return await this.loadAccountByIdRepository.loadById(id)
  }
}