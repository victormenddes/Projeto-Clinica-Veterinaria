
import { EnfermidadeModel } from "../models/enfermidadeModel"


export class EnfermidadeService{

  async create(descricao: string, datahora: Date){
    const enfermidade = await EnfermidadeModel.create({ descricao, datahora })
    if (!enfermidade) {
      return { Error: 'Enfermidade não cadastrada!' }
    } else {
      return enfermidade
    }
  }

 async findAll(){
    const enfermidade = await EnfermidadeModel.findAll()
    if (!enfermidade) {
      return { Error: 'Não encontrado nenhuma enfermidade' }
    } else {
      return enfermidade
    }
  }

  async findByPk(id: number){
    const enfermidade = await EnfermidadeModel.findByPk(id)
    if (!enfermidade) {
      return { Error: 'Não encontrado nenhuma enfermidade' }
    } else {
      return enfermidade
    }
  }

  async update(id: number, descricao: string, datahora: Date){
    const enfermidade = await EnfermidadeModel.findByPk(id)
    if (enfermidade) {
      enfermidade.descricao = descricao
      enfermidade.datahora = datahora
      await enfermidade.save()
    }
    if (!enfermidade) {
      return { Error: 'Não encontrado nenhuma enfermidade' }
    } else {
      return enfermidade
    }
  }

  async deletar(id: number){
    const enfermidade = await EnfermidadeModel.findByPk(id)
    if (enfermidade) {
      enfermidade.destroy()
      return 'Enfermidade Excluida com sucesso'
    } else {
      return 'Enfermidade Não encontrada para Exclusão'
    }
    if (!enfermidade) {
      return { Error: 'Não encontrado nenhuma enfermidade' }
    } else {
      return enfermidade
    }
  }

}

