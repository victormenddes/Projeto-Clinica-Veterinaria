
import { Request, Response } from "express"

import { ServiceResponsavel } from "../services/serviceResponsavel"


const service = new ServiceResponsavel()


export class ControllerResponsavel {

  async findAll(req: Request, res: Response) {
    const responsavel = await service.findAll()
    try {
      res.status(200).json({ Responsavel_Pelo_Animal: responsavel})
    } catch (error) {
      res.status(404).json({ Error: 'Responsavel não encontrado!'})
    }
  }

  async findByPk(req: Request, res: Response) {
    const id = parseInt(req.params.id)
    const responsavel = await service.findByPk(id)
    if (!responsavel) {
      res.status(404)
      return new Error('Responsavel não encontrado!')
    } else {
      return res.status(200).json({ Responsavel_Pelo_Animal: responsavel})
    }
  }

  async create(req: Request, res: Response) {
    let { nome, cpf, telefone } = req.body
    const responsavel = await service.create(nome, cpf, telefone)
    if (!responsavel) {
      res.status(404)
      return new Error('Responsavel não Cadastrado!')
    } else {
      return res.status(200).json({ Cadastro: responsavel})
    }
  }

  async update(req: Request, res: Response) {
    let id = parseInt(req.params.id)
    let { nome, cpf, telefone } = req.body
    const responsavel = await service.update(id, nome, cpf, telefone)
    if (responsavel) {
      return res.status(200).json({ Alteração: responsavel})
    } else {
      res.status(404)
      return new Error('Responsavel não Encontrado Para Possivel Alteração!')
    }
  }

  async deletar(req: Request, res: Response) {
    let id = parseInt(req.params.id)
    const responsavel = await service.deletar(id)
    try {
      res.status(200).json({ Excluido: responsavel})
    } catch (error) {
      res.status(404).json({ Error: 'Responsavel não encontrado!'})
    }
  }

}


