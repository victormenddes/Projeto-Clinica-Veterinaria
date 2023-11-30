
import { Model, DataTypes } from "sequelize"

import { conexao } from "../instances/pg"


export interface ResponsavelInstance extends Model {
  id: number,
  nome: string,
  cpf: string,
  telefone: string
}

export const ModelResponsavel = conexao.define<ResponsavelInstance>('responsavel', {

  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: true,
    type: DataTypes.INTEGER
  },

  nome: {
    type: DataTypes.STRING,
    allowNull: true
  },

  cpf: {
    type: DataTypes.STRING,
    allowNull: true
  },

  telefone: {
    type: DataTypes.STRING,
    allowNull: true
  }
},

{
  tableName: 'responsavel',
  timestamps: false
}

)

