
import { Model, DataTypes } from "sequelize"

import { conexao } from "../instances/pg"

export interface EnfermidadeInstance extends Model{

  id: number,
  descricao: string,
  datahora: Date

}

export const EnfermidadeModel = conexao.define<EnfermidadeInstance>('enfermidade', {

  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER
  },

  descricao: {
    type:DataTypes.STRING,
    allowNull: false
  },

  datahora: {
    type:DataTypes.DATE,
    allowNull: false
  }
},

{
  tableName: 'enfermidade',
  timestamps: false
}

)

