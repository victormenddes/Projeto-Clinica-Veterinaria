
import { EnfermidadeAnimalModel } from "../models/animaEnfermidadeModel"

import { AnimalModel } from "../models/animalModel"

import { EnfermidadeModel } from "../models/enfermidadeModel"

import { ModelResponsavel } from "../models/responsavelModel"

import { VeterinarioModel } from "../models/veterinarioModel"

export class EnfermidadeAnimalService{

  async findAll(){
    try {
      const enfermidade_animal = await EnfermidadeAnimalModel.findAll({
        include: [
          {
            model: AnimalModel,
            attributes: ['sexo', 'especie'],
            as: 'animal'
          },
          {
            model: EnfermidadeModel,
            attributes: ['descricao', 'datahora'],
            as: 'enfermidade'
          },
          {
            model: ModelResponsavel,
            attributes: ['nome', 'cpf', 'telefone'],
            as: 'responsavel'
          },
          {
            model: VeterinarioModel,
            attributes: ['nome', 'especialidade']
          }
        ],
        attributes: {exclude: ['fkanimal', 'fkinfermidade']}
      })
    if (!enfermidade_animal) {
      return { Error: 'Não encontrado nenhuma Enfermidade e Animal' }
    } else {
      return enfermidade_animal
    }
    
  } catch (error) {
    console.error('Erro ao buscar dados de animal e enfermidade: ' + error);
    throw new Error('Erro ao buscar dados de animal e enfermidade');
  }
   
  
  }

  async findByPk(id: number){
    const enfermidade_animal = await EnfermidadeAnimalModel.findByPk(id, {
      include: [
        {
          model: AnimalModel,
          attributes: ['sexo', 'especie'],
          as: 'animal'
        },
        {
          model: EnfermidadeModel,
          attributes: ['descricao', 'datahora'],
          as: 'enfermidade'
        }
      ],
      attributes: {exclude: ['fkanimal', 'fkinfermidade']}
    })
    if (!enfermidade_animal) {
      return { Error: 'Não encontrado nenhuma Enfermidade e Animal' }
    } else {
      return enfermidade_animal
    }
  }

  async create(fkanimal: number, fkinfermidade: number){
    const enfermidade_animal = await EnfermidadeAnimalModel.create({ fkanimal, fkinfermidade})
    if (!enfermidade_animal) {
      return { Error: 'Enfermidade e Animal não cadastrado!' }
    } else {
      return enfermidade_animal
    }
  }

  async update(id: number, fkanimal: number, fkinfermidade: number){
    const enfermidade_animal = await EnfermidadeAnimalModel.findByPk(id)
    if (enfermidade_animal) {
      enfermidade_animal.fkanimal = fkanimal
      enfermidade_animal.fkinfermidade = fkinfermidade
      await enfermidade_animal.save()
    }
    if (!enfermidade_animal) {
      return { Error: 'Não encontrado nenhuma Enfermidade e Animal' }
    } else {
      return enfermidade_animal
    }
  }

  async deletar(id: number){
    const enfermidade_animal = await EnfermidadeAnimalModel.findByPk(id)
    if (enfermidade_animal) {
      enfermidade_animal.destroy()
      return 'Enfermidade e Animal Excluido com sucesso'
    } else {
      if (!enfermidade_animal) {
        return { Error: 'Não encontrado nenhuma Enfermidade e Animal Para Exclusão' }
      } else {
        return enfermidade_animal
      }
    }
   
  }


}


