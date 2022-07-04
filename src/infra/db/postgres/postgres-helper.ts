import { Sequelize } from "sequelize"

export const PostgresHelper = {
  client: null as Sequelize,
  uri: null as string,

  async connect(uri: string):Promise<Sequelize> {
    this.uri = uri
    this.client = new Sequelize(uri) as Sequelize
    await this.client.authenticate()
    return this.client
  },

  async disconnect (): Promise<void> {
    await this.client.close()
    this.client = null
  },

  
  map: (data: any): any => {
    const { createdAt,updatedAt, ...rest } = data
    return { ...rest }
  },
}