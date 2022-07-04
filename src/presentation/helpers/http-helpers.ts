import { ServerError } from '../errors/server-error'
import { HttpResponse } from '../protocols/http'

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack)
})

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const ok = (data: any): HttpResponse => {
  console.log("authenticationModel", data)
  return {
    statusCode: 200,
    body: data
  }
}

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: error
})
