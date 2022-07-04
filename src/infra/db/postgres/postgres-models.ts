
import { Sequelize } from "sequelize"
import { userModel } from "./models/user-model"

export default (sequelize:Sequelize): void => {
  userModel(sequelize)
}