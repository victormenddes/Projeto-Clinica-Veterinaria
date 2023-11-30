
import { LaboratorioModel } from "../models/laboratorioModel"

import { VeterinarioModel } from "../models/veterinarioModel"

export class LaboratorioService {

  async findAll() {
    const laboratorio = await LaboratorioModel.findAll({
      order: [['id', 'ASC']],
      include: [
        {
          model: VeterinarioModel,
          as: 'veterinario',
          attributes: ['nome', 'especialidade']
        }
      ],
      attributes: {exclude: ['fkveterinario']}
    })
    if (!laboratorio) {
      return { Error: 'Laboratorio não encontrado na base de dados!' }
    } else {
      return laboratorio
    }
  }

  async findByPk(id: number) {
    const laboratorio = await LaboratorioModel.findByPk(id,{
      include: [
        {
          model: VeterinarioModel,
          as: 'veterinario',
          attributes: ['nome', 'especialidade']
        }
      ],
      attributes: {exclude: ['fkveterinario']}
    })
    if (!laboratorio) {
      return { Error: 'Laboratorio não encontrado na base de dados!' }
    } else {
      return laboratorio
    }
  }

  async create(nome: string, endereco: string, telefone: string, fkveterinario: number) {
    const laboratorio = await LaboratorioModel.create({ nome, endereco, telefone, fkveterinario})
    if (!laboratorio) {
      return { Error: 'Laboratorio não Cadastrado!' }
    } else {
      return laboratorio 
    }
  }

  async update(id: number, nome: string, endereco: string, telefone: string, fkveterinario: number) {
    const laboratorio = await LaboratorioModel.findByPk(id)
    if (laboratorio) {
      laboratorio.nome = nome
      laboratorio.endereco = endereco
      laboratorio.telefone = telefone
      laboratorio.fkveterinario = fkveterinario
      await laboratorio.save()
    }
    if (!laboratorio) {
      return { Error: 'Laboratorio não Alterado!' }
    } else {
      return laboratorio 
    }
  }

  async deletar(id: number) {
    const laboratorio = await LaboratorioModel.findByPk(id)
    if (laboratorio) {
      laboratorio.destroy()
    }
    if (!laboratorio) {
      return { Error: 'Falha ao excluir Laboratorio!' }
    } else {
      return 'Laboratorio Excluido com sucesso!'
    }
  }

}

