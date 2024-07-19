import { Request, Response } from 'express'
import * as service from '../services/players-services'
import { StatisticsModel } from '../models/statistics-model'

export const getPlayer = async (req: Request, res: Response) => {
  // Vamos criar uma chamada para o nosso service
  const HttpResponse = await service.getPlayerDataService()

  res.status(HttpResponse.statusCode).json(HttpResponse.body)
}

export const getPlayerById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)

  const httpResponse = await service.getPlayerByIdService(id)
  res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const postPlayer = async (req: Request, res: Response) => {
  const bodyValue = req.body

  const httpResponse = await service.createPlayerService(bodyValue)

  if (httpResponse) {
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
  //else{
  //   const response = noContent()
  //   res.status((await response).statusCode).json((await response).body)
  // }
}

export const deletePlayer = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const httpResponse = await service.deletePlayerService(id)

  res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const updatePlayers = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const bodyValue: StatisticsModel = req.body
  const httpResponse = await service.updatePlayerService(id, bodyValue)
  res.status(httpResponse.statusCode).json(httpResponse.body)
}
