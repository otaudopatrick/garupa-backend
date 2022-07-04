import { Sequelize } from "sequelize/types"
import { userModel } from "./models/user-model"

export default (sequelize:Sequelize): void => {
  userModel(sequelize)
}