
import { Request, Response } from "express"

import { LaboratorioService } from "../services/laboratorioService"


const service = new LaboratorioService()

export class LaboratorioController {

  async findAll(req: Request, res: Response) {
    const laboratorio =  await service.findAll()
    if (!laboratorio) {
      res.status(404)
      return { Error: 'Laboratorio não encontrado na base de dados!' }
    } else {
      res.status(200).json({ Laboratorios: laboratorio })
    }
  }

  async findByPk(req: Request, res: Response) {
    let id  = parseInt(req.params.id)
    const laboratorio =  await service.findByPk(id)
    if (!laboratorio) {
      res.status(404)
      return { Error: 'Laboratorio não encontrado na base de dados!' }
    } else {
      res.status(200).json({ Laboratorio: laboratorio })
    }
  }

  async create(req: Request, res: Response) {
    let { nome, endereco, telefone, fkveterinario } = req.body
    const laboratorio =  await service.create(nome, endereco, telefone, fkveterinario)
    if (!laboratorio) {
      res.status(404)
      return { Error: 'Laboratorio não Cadastrado!' }
    } else {
      res.status(201).json({ Cadastro: laboratorio })
    }
  }

  async update(req: Request, res: Response) {
    let id = parseInt(req.params.id)
    let { nome, endereco, telefone, fkveterinario } = req.body
    const laboratorio =  await service.update(id, nome, endereco, telefone, fkveterinario)
    if (!laboratorio) {
      res.status(404)
      return { Error: 'Laboratorio não Alterado!' }
    } else {
      res.status(200).json({ Alteração: laboratorio })
    }
  }

  async deletar(req: Request, res: Response) {
    let id = parseInt(req.params.id)
    const laboratorio =  await service.deletar(id)
    if (!laboratorio) {
      res.status(404)
      return { Error: 'Falha ao excluir Laboratorio!' }
    } else {
      res.status(200).json({ Exclusão: laboratorio })
    }
  }

}

