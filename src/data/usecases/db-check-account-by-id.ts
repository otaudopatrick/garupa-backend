import { CheckAccountById } from '../../domain/usecases/check-account-by-id'
import { CheckAccountByIdRepository } from '../protocols/db/account/check-account-by-id-repository'

export class DbCheckAccountById implements CheckAccountById {
  constructor (private readonly checkSurveyByIdRepository: CheckAccountByIdRepository) {}

  async checkById (id: string): Promise<CheckAccountById.Result> {
    return this.checkSurveyByIdRepository.checkById(id)
  }
}