
import { VeterinarioModel } from "../models/veterinarioModel"

export class VeterinarioService {

  async create(nome: string, cmrv: string, especialidade: string) {
    const veterinario = await VeterinarioModel.create({ nome, cmrv, especialidade })
    if (!veterinario) {
      return { error: 'Veterinario não consta no banco de dados para Cadastro!' }
    } else {
      return veterinario
    }
  }

  async findAll() {
    const veterinario = await VeterinarioModel.findAll()
    if (!veterinario) {
      return { error: 'Não Encontrado nenhum Veterinario no cadastro!' }
    } else {
      return veterinario
    }
  }

  async findBYId(id: number) {
    const veterinario = await VeterinarioModel.findByPk(id)
    if (!veterinario) {
      return { error: 'Não Encontrado nenhum Veterinario no cadastro!' }
    } else {
      return veterinario
    }
  }

  async update(id: number, nome: string, cmrv: string, especialidade: string) {
    const veterinario = await VeterinarioModel.findByPk(id)
    if (veterinario) {
      veterinario.nome = nome
      veterinario.cmrv = cmrv
      veterinario.especialidade = especialidade
      await veterinario.save()
    }
    if (!veterinario) {
      return { error: 'Não Encontrado nenhum Veterinario no cadastro!' }
    } else {
      return veterinario
    }
  }

  async deletar(id: number) {
    const veterinario = await VeterinarioModel.findByPk(id)
    if (veterinario) {
      veterinario.destroy()
      return 'Veterinario Excluido com sucesso!'
    } else {
      return 'Veterinario não encontrado no banco de dados!'
    }
  }

}

