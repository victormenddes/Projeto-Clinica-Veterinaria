
import { Model, DataTypes } from "sequelize"

import { conexao } from "../instances/pg"


export interface VeterinarioInstance extends Model {
  id: number,
  nome: string,
  cmrv: string,
  especialidade: string
}

export const VeterinarioModel = conexao.define<VeterinarioInstance>('veterinario', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER
  },

  nome: {
    type: DataTypes.STRING,
    allowNull: true
  },

  cmrv: {
    type: DataTypes.STRING,
    allowNull: true
  },

  especialidade: {
    type: DataTypes.STRING,
    allowNull: true
  }
},

{
  tableName: 'veterinario',
  timestamps: false
}

)

