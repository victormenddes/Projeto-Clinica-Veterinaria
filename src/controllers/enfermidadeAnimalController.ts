
import { Request, Response } from "express"

import { EnfermidadeAnimalService } from "../services/animalEnfermidadeService"



const service = new EnfermidadeAnimalService()

export class EnfermidadeAnimalController{

  async findAll(req: Request, res: Response){
    const enfermidade_animal = await service.findAll()
    if (!enfermidade_animal) {
      res.status(404)
      return { Error: 'Nenhuma enfermidade Encontrada!' }
    } else {
      res.status(200).json({ Enfermidade_Animal: enfermidade_animal })
    }
   }
  
   async findByPk(req: Request, res: Response){
    let id = parseInt(req.params.id)
    const enfermidade_animal = await service.findByPk(id)
    if (!enfermidade_animal) {
      res.status(404)
      return { Error: 'Nenhuma enfermidade Encontrada!' }
    } else {
      res.status(200).json({ enfermidade_animal: enfermidade_animal })
    }
   }
  
   async create(req: Request, res: Response){
    let { fkanimal, fkinfermidade } = req.body
    const enfermidade_animal = await service.create(fkanimal, fkinfermidade)
    if (!enfermidade_animal) {
      res.status(404)
      return { Error: 'Nenhuma Enfermidade e Animal Cadastrado!' }
    } else {
      res.status(201).json({ Cadastro: enfermidade_animal })
    }
   }
  
   async update(req: Request, res: Response){
    let id = parseInt(req.params.id)
    let { fkanimal, fkinfermidade } = req.body
    const enfermidade_animal = await service.update(id, fkanimal, fkinfermidade)
    if (!enfermidade_animal) {
      res.status(404)
      return { Error: 'Nenhum Animal e Enfermidade Encontrado!' }
    } else {
      res.status(200).json({ Alteração: enfermidade_animal })
    }
   }
  
   async deletar(req: Request, res: Response){
    let id = parseInt(req.params.id)
    const enfermidade_animal = await service.deletar(id)
    if (!enfermidade_animal) {
      res.status(404)
      return { Error: 'Nenhuma Enfermidade e Animal Encontrados!' }
    } else {
      res.status(200).json({ Exclusão: enfermidade_animal })
    }
   }

}

