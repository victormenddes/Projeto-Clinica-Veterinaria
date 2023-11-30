
import { Request, Response } from "express"

import { ExameService } from "../services/exameService"


const service = new ExameService()

export class ExameController {

  async findAll(req: Request, res: Response) {
    const exame =  await service.findAll()
    if (!exame) {
      res.status(404)
      return { Error: 'Exames não encontrados na base de dados!' }
    } else {
      res.status(200).json({ Exames: exame })
    }
  }

  async findByPk(req: Request, res: Response) {
    let id  = parseInt(req.params.id)
    const exame =  await service.findByPk(id)
    if (!exame) {
      res.status(404)
      return { Error: 'Exame não encontrado na base de dados!' }
    } else {
      res.status(200).json({ Exame: exame })
    }
  }

  async create(req: Request, res: Response) {
    let { tipo, data, resultado, fkanimal, fkveterinario, fklaboratorio } = req.body
    const exame =  await service.create(tipo, data, resultado, fkanimal, fkveterinario, fklaboratorio)
    if (!exame) {
      res.status(404)
      return { Error: 'Exame não Cadastrado!' }
    } else {
      res.status(201).json({ Exame: exame })
    }
  }

  async update(req: Request, res: Response) {
    let id = parseInt(req.params.id)
    let { tipo, data, resultado, fkanimal, fkveterinario, fklaboratorio } = req.body
    const exame =  await service.update(id, tipo, data, resultado, fkanimal, fkveterinario, fklaboratorio)
    if (!exame) {
      res.status(404)
      return { Error: 'Exame não Alterado!' }
    } else {
      res.status(200).json({ Alteração: exame })
    }
  }

  async deletar(req: Request, res: Response) {
    let id = parseInt(req.params.id)
    const exame =  await service.deletar(id)
    if (!exame) {
      res.status(404)
      return { Error: 'Falha ao excluir Exame!' }
    } else {
      res.status(200).json({ Exclusão: exame })
    }
  }

}

