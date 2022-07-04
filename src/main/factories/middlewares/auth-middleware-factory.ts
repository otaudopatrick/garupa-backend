import { AuthMiddleware } from "../../../presentation/middlewares/auth-middlewares"
import { Middleware } from "../../../presentation/protocols/middleware"
import { makeDbLoadAccountByToken } from "../usecases/load-account-by-token-factory"

export const makeAuthMiddleware = (): Middleware => {
  return new AuthMiddleware(makeDbLoadAccountByToken())
}