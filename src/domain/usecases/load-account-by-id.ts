export interface LoadAccountById {
  load: (id:string) => Promise<LoadAccountById.Result>
}

export namespace LoadAccountById {
  export type Result = {
    id: string,
    firstName:string,
    lastName: string,
    email: string
  }
}