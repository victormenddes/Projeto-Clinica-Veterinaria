

import { ConsultaModel } from "../models/consultaModel"

import { AnimalModel } from "../models/animalModel"

import { VeterinarioModel } from "../models/veterinarioModel"

export class ConsultaService {

  async create(descricaoproblema: string, data: Date, hora: string,fkanimal: number, fkveterinario: number) {
    const consulta = await ConsultaModel.create({ descricaoproblema, data, hora, fkanimal, fkveterinario })
    if (!consulta) {
      return {error: 'Consulta Não Cadastrada! '}
    } else {
      return consulta
    }
  }

  async findAll() {
    const consulta = await ConsultaModel.findAll({
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
        }
      ],
      attributes: {exclude: ['fkranimal', 'fkveterinario']}
  })
    if (!consulta) {
      return {error: 'Nenhuma Consulta Cadastrada ate o momento'}
    } else {
      return consulta
    }
  }

  async findByPK(id: number) {
    const consulta = await ConsultaModel.findByPk(id, {
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
        }
      ],
      attributes: {exclude: ['fkranimal', 'fkveterinario']}
  })
    if (!consulta) {
      return {error: 'Consulta Não Encontrado! '}
    } else {
      return consulta
    }
  }
  
  async update(id: number, descricaoproblema: string, data: Date, hora: string,fkanimal: number, fkveterinario: number) {
    const consulta = await ConsultaModel.findByPk(id)
    if (consulta) {
      consulta.descricaoproblema = descricaoproblema
      consulta.data = data
      consulta.hora = hora
      consulta.fkanimal = fkanimal
      consulta.fkveterinario = fkveterinario
      await consulta.save()
    }
    if (!consulta) {
      return {error: 'Consulta Não Encontrada para Alteração! '}
    } else {
      return consulta
    }
  }

  async deletar(id: number) {
    const consulta = await ConsultaModel.findByPk(id)
    if (consulta) {
      consulta.destroy()
      return 'Animal Excluido com sucesso!'
    } else {
      if (!consulta) {
        return {error: 'Consulta Não Encontrada! '}
      } 
    }
  }

}

