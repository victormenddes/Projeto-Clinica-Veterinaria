

import { AnimalModel } from "../models/animalModel"

import { ModelResponsavel } from "../models/responsavelModel"

import { VeterinarioModel } from "../models/veterinarioModel"

export class AnimalService {

  async create(sexo: string, especie: string, fkresponsavel: number, fkveterinario: number) {
    const animal = await AnimalModel.create({ sexo, especie, fkresponsavel, fkveterinario })
    if (!animal) {
      return {error: 'Animal Não Cadastrado! '}
    } else {
      return animal
    }
  }

  async findAll() {
    const animal = await AnimalModel.findAll({
      include: [
        {
          model: ModelResponsavel,
          as: 'responsavel',
          attributes: ['nome', 'cpf', 'telefone']
        },
        {
          model: VeterinarioModel,
          as: 'veterinario',
          attributes: ['nome', 'cmrv', 'especialidade']
        }
      ],
      attributes: {exclude: ['fkresponsavel', 'fkveterinario']}
  })
    if (!animal) {
      return {error: 'Nenhum Animal Cadastrado ate o momento'}
    } else {
      return animal
    }
  }

  async findByPK(id: number) {
    const animal = await AnimalModel.findByPk(id, {
      include: [
        {
          model: ModelResponsavel,
          as: 'responsavel',
          attributes: ['nome', 'cpf', 'telefone']
        },
        {
          model: VeterinarioModel,
          as: 'veterinario',
          attributes: ['nome', 'cmrv', 'especialidade']
        }
      ],
      attributes: {exclude: ['fkresponsavel', 'fkveterinario']}
  })
    if (!animal) {
      return {error: 'Animal Não Encontrado! '}
    } else {
      return animal
    }
  }
  
  async update(id: number, sexo: string, especie: string, fkresponsavel: number, fkveterinario: number) {
    const animal = await AnimalModel.findByPk(id)
    if (animal) {
      animal.sexo = sexo
      animal.especie = especie
      animal.fkresponsavel = fkresponsavel
      animal.fkveterinario = fkveterinario
      await animal.save()
    }
    if (!animal) {
      return {error: 'Animal Não Encontrado para Alteração! '}
    } else {
      return animal
    }
  }

  async deletar(id: number) {
    const animal = await AnimalModel.findByPk(id)
    if (animal) {
      animal.destroy()
      return 'Animal Excluido com sucesso!'
    } else {
      if (!animal) {
        return {error: 'Animal Não Encontrado! '}
      } 
    }
  }

}

