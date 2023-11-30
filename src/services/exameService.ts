
import { ExameModel } from "../models/exameModel"

import { AnimalModel } from "../models/animalModel"

import { VeterinarioModel } from "../models/veterinarioModel"

import { LaboratorioModel } from "../models/laboratorioModel"

export class ExameService {

  async findAll() {
    const exame = await ExameModel.findAll({
      order: [['id', 'ASC']],
      include: [
        {
          model: AnimalModel,
          as: 'animal',
          attributes: ['sexo', 'especie']
        },

        {
          model: VeterinarioModel,
          as: 'veterinario',
          attributes: ['nome', 'especialidade']
        },

        {
          model: LaboratorioModel,
          as: 'laboratorio',
          attributes: ['nome', 'endereco', 'telefone']
        }

        
      ],
      attributes: {exclude: ['fkanimal', 'fkveterinario', 'fklaboratorio']}
    })
    if (!exame) {
      return { Error: 'Exames não encontrados na base de dados!' }
    } else {
      return exame
    }
  }

  async findByPk(id: number) {
    const exame = await ExameModel.findByPk(id,{
      include: [
        {
          model: AnimalModel,
          as: 'animal',
          attributes: ['sexo', 'especie']
        },

        {
          model: VeterinarioModel,
          as: 'veterinario',
          attributes: ['nome', 'especialidade']
        },

        {
          model: LaboratorioModel,
          as: 'laboratorio',
          attributes: ['nome', 'endereco', 'telefone']
        }

        
      ],
      attributes: {exclude: ['fkanimal', 'fkveterinario', 'fklaboratorio']}
    })
    if (!exame) {
      return { Error: 'Exame não encontrado na base de dados!' }
    } else {
      return exame
    }
  }
  
  async create(tipo: string, data: Date, resultado: string, fkanimal: number, fkveterinario: number, fklaboratorio: number) {
    const exame = await ExameModel.create({ tipo, data, resultado, fkanimal, fkveterinario, fklaboratorio})
    if (!exame) {
      return { Error: 'Exame não Cadastrado!' }
    } else {
      return exame 
    }
  }

  async update(id: number, tipo: string, data: Date, resultado: string, fkanimal: number, fkveterinario: number, fklaboratorio: number) {
    const exame = await ExameModel.findByPk(id)
    if (exame) {
      exame.tipo = tipo
      exame.data = data
      exame. resultado = resultado
      exame.fkanimal = fkanimal
      exame.fkveterinario = fkveterinario
      exame.fklaboratorio = fklaboratorio
      await exame.save()
    }
    if (!exame) {
      return { Error: 'Exame não Alterado!' }
    } else {
      return exame 
    }
  }

  async deletar(id: number) {
    const exame = await ExameModel.findByPk(id)
    if (exame) {
      exame.destroy()
    }
    if (!exame) {
      return { Error: 'Falha ao excluir Exame!' }
    } else {
      return 'Exame Excluido com sucesso!'
    }
  }

}

