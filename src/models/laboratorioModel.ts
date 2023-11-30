import { Model, DataTypes } from "sequelize"


import { VeterinarioModel } from "./veterinarioModel"


import { conexao } from "../instances/pg"

export interface LaboratorioInstance extends Model{

  id: number,
  nome: string,
  endereco: string,
  telefone: string,
  fkveterinario: number
}

export const LaboratorioModel = conexao.define<LaboratorioInstance>('laboratorio', {

  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER
  },

  nome: {
    type: DataTypes.STRING,
    allowNull: false
    },

  endereco: {
    type: DataTypes.STRING,
    allowNull: false
    },

  telefone: {
      type: DataTypes.STRING,
      allowNull: false
    },

  fkveterinario: {
    type:DataTypes.INTEGER,
    allowNull: false
  }
},

{
  tableName: 'laboratorio',
  timestamps: false
}

)

// Definindo as chaves estrangeiras e os modelos associados
LaboratorioModel.belongsTo(VeterinarioModel, { foreignKey: 'fkveterinario' })

