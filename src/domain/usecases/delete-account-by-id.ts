export interface DeleteAccountById {
  delete: (id:string) => Promise<DeleteAccountById.Result>
}

export namespace DeleteAccountById {
  export type Result = {}
}