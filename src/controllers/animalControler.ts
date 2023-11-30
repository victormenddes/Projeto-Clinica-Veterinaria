
import { Request, Response } from "express"

import { AnimalService } from "../services/animalService"

const service = new AnimalService()

export class AnimalControler {

  async findAll(req: Request, res: Response) {
    const animal = await service.findAll()
    if (!animal) {
      res.status(404)
      return {error: 'Nenhum Animal Encontrado!'}
    } else {
      res.status(200).json({ Animais: animal })
    }
  }

  async findByPk(req: Request, res: Response) {
    let id = parseInt(req.params.id)
    const animal = await service.findByPK(id)
    if (!animal) {
      res.status(404)
      return {error: 'Nenhum Animal Encontrado!'}
    } else {
      res.status(200).json({ Animal: animal })
    }
  }

  async create(req: Request, res: Response) {
    let { sexo, especie, fkresponsavel, fkveterinario } = req.body
    const animal = await service.create(sexo, especie, fkresponsavel, fkveterinario)
    if (!animal) {
      res.status(404)
      return {error: 'Nenhum Animal Cadastrado!'}
    } else {
      res.status(200).json({ Cadastro: animal })
    }
  }

  async update(req: Request, res: Response) {
    let id = parseInt(req.params.id)
    let { sexo, especie, fkresponsavel, fkveterinario } = req.body
    const animal = await service.update(id, sexo, especie, fkresponsavel, fkveterinario)
    if (!animal) {
      res.status(404)
      return {error: 'Animal não Encontrado para Alteração!'}
    } else {
      res.status(200).json({ Alteração: animal })
    }
  }

  async deletar(req: Request, res: Response) {
    let id = parseInt(req.params.id)
    const animal = await service.deletar(id)
    if (!animal) {
      res.status(404)
      return {error: 'Animal não Encontrado para Exclusão!'}
    } else {
      res.status(200).json({ Exclusão: 'Animal Excluso com sucesso!' })
    }
  }

}

