
import { ModelResponsavel } from "../models/responsavelModel"


export class ServiceResponsavel {

  async create(nome: string, cpf: string, telefone: string) {
    const responsavel = await ModelResponsavel.create({nome, cpf, telefone})
    if (!responsavel) {
      return {error: 'Nenhum Responsavel Cadastrado ate o momento'}
    } else {
      return responsavel
    }
  }

  async findAll() {
    const responsavel = await ModelResponsavel.findAll()
    if (!responsavel) {
      return {error: 'Nenhum Responsavel Encontrado no cadastro'}
    } else {
      return responsavel
    }
  }

  async findByPk(id: number) {
    const responsavel = await ModelResponsavel.findByPk(id)
    if (!responsavel) {
      return {error: 'Não encontrado nenhum Responsavel pelo Animal'}
    } else {
      return responsavel
    }
  }

  async update(id: number, nome: string, cpf: string, telefone: string) {
    const responsavel = await ModelResponsavel.findByPk(id)
    if (responsavel) {
      responsavel.nome = nome
      responsavel.cpf = cpf
      responsavel.telefone = telefone
      await responsavel.save()
    }
    if (!responsavel) {
      return {error: 'Nenhum Responsavel Cadastrado ate o momento'}
    } else {
      return responsavel
    }
  }

  async deletar(id: number) {
    const responsavel = await ModelResponsavel.findByPk(id)
    if (responsavel) {
      await responsavel.destroy()
      return 'Responsavel deletado com sucesso!'
    } else {
      return ('Não encontrado Registro para Exclusão')
    }
  }

}


