
import { Request, Response } from "express"

import { EnfermidadeService } from "../services/enfermidadeService"

const service = new EnfermidadeService()

export class EnfermidadeController{

 async findAll(req: Request, res: Response){
  const enfermidade = await service.findAll()
  if (!enfermidade) {
    res.status(404)
    return { Error: 'Nenhuma enfermidade Encontrada!' }
  } else {
    res.status(200).json({ Enfermidades: enfermidade })
  }
 }

 async findByPk(req: Request, res: Response){
  let id = parseInt(req.params.id)
  const enfermidade = await service.findByPk(id)
  if (!enfermidade) {
    res.status(404)
    return { Error: 'Nenhuma enfermidade Encontrada!' }
  } else {
    res.status(200).json({ Enfermidade: enfermidade })
  }
 }

 async create(req: Request, res: Response){
  let { descricao, datahora } = req.body
  const enfermidade = await service.create(descricao, datahora)
  if (!enfermidade) {
    res.status(404)
    return { Error: 'Nenhuma enfermidade Cadastrada!' }
  } else {
    res.status(201).json({ Cadastro: enfermidade })
  }
 }

 async update(req: Request, res: Response){
  let id = parseInt(req.params.id)
  let { descricao, datahora } = req.body
  const enfermidade = await service.update(id, descricao, datahora)
  if (!enfermidade) {
    res.status(404)
    return { Error: 'Nenhuma enfermidade Encontrada!' }
  } else {
    res.status(200).json({ Alteração: enfermidade })
  }
 }

 async deletar(req: Request, res: Response){
  let id = parseInt(req.params.id)
  const enfermidade = await service.deletar(id)
  if (!enfermidade) {
    res.status(404)
    return { Error: 'Nenhuma enfermidade Encontrada!' }
  } else {
    res.status(200).json({ Exclusão: enfermidade })
  }
 }

}

