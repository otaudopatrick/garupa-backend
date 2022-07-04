export interface DeleteAccountByIdRepository {
  delete: (id: string) => Promise<DeleteAccountByIdRepository.Result>
}

export namespace DeleteAccountByIdRepository {
  export type Result = {}
}