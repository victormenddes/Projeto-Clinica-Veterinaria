

import { Request, Response } from "express"

import { ConsultaService } from "../services/consultaService"

const service = new ConsultaService()

export class ConsultaController {

  async findAll(req: Request, res: Response) {
    const consulta = await service.findAll()
    if (!consulta) {
      res.status(404)
      return {error: 'Nenhum Consulta Encontrada!'}
    } else {
      res.status(200).json({ Consulta: consulta })
    }
  }

  async findByPk(req: Request, res: Response) {
    let id = parseInt(req.params.id)
    const consulta = await service.findByPK(id)
    if (!consulta) {
      res.status(404)
      return {error: 'Nenhum Animal Encontrado!'}
    } else {
      res.status(200).json({ Consulta: consulta })
    }
  }

  async create(req: Request, res: Response) {
    let { descricaoproblema, data, hora, fkanimal, fkveterinario } = req.body
    const consulta = await service.create(descricaoproblema, data, hora, fkanimal, fkveterinario)
    if (!consulta) {
      res.status(404)
      return {error: 'Nenhuma Consulta Cadastrada!'}
    } else {
      res.status(200).json({ Cadastro: consulta })
    }
  }

  async update(req: Request, res: Response) {
    let id = parseInt(req.params.id)
    let { descricaoproblema, data, hora, fkanimal, fkveterinario } = req.body
    const consulta = await service.update(id, descricaoproblema, data, hora, fkanimal, fkveterinario)
    if (!consulta) {
      res.status(404)
      return {error: 'Consulta não Encontrado para Alteração!'}
    } else {
      res.status(200).json({ Alteração: consulta })
    }
  }

  async deletar(req: Request, res: Response) {
    let id = parseInt(req.params.id)
    const consulta = await service.deletar(id)
    if (!consulta) {
      res.status(404)
      return {error: 'Consulta não Encontrado para Exclusão!'}
    } else {
      res.status(200).json({ Exclusão: 'Consulta Excluida com sucesso!' })
    }
  }

}

