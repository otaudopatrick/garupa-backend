import { Request, Response } from 'express'
import { Controller } from '../../presentation/protocols/controller'
import { HttpRequest } from '../../presentation/protocols/http'

export const adaptRoute = (controller:Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest:HttpRequest = {
      body: req.body
    }
    const httpRresponse = await controller.handle(httpRequest)
    res.status(httpRresponse.statusCode).send(httpRresponse.body)
  }
}
