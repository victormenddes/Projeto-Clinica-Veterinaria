
import { VeterinarioService } from "../services/serviceVeterinario"

import { Request, Response } from "express"

const service = new VeterinarioService()


export class VeterinarioController {

  async findAll(req: Request, res: Response) {
    const veterinario = await service.findAll()
    if (!veterinario) {
      res.status(404)
      return { error: 'Não Encontrado nenhum Veterinario no cadastro!' }
    } else {
      res.status(200).json({ Veterinarios: veterinario })
    }
  }

  async findBYId(req: Request, res: Response) {
    let id = parseInt(req.params.id)
    const veterinario = await service.findBYId(id)
    if (!veterinario) {
      res.status(404)
      return { error: 'Veterinario não Encontrado!' }
    } else {
      res.status(200).json({ Veterinario: veterinario })
    }
  }

  async create(req: Request, res: Response) {
    let { nome, cmrv, especialidade } = req.body
    const veterinario = await service.create(nome, cmrv, especialidade)
    if (!veterinario) {
      res.status(404)
      return { error: 'Veterinario não Encontrado para Cadastro!' }
    } else {
      res.status(200).json({ Cadastro: veterinario })
    }
  }

  async update(req: Request, res: Response) {
    let id = parseInt(req.params.id)
    let { nome, cmrv, especialidade } = req.body
    const veterinario = await service.update(id, nome, cmrv, especialidade)
    if (!veterinario) {
      res.status(404)
      return { error: 'Veterinario não Encontrado para Cadastro!' }
    } else {
      res.status(200).json({ Alteração: veterinario })
    }
  }

  async deletar(req: Request, res: Response) {
    let id = parseInt(req.params.id)
    const veterinario = await service.deletar(id)
    if (!veterinario) {
      res.status(404)
      return { error: 'Veterinario não Encontrado para Exclusão!' }
    } else {
      res.status(200).json({ Exclusão: veterinario })
    }
  }


}

