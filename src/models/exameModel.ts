
import { Model, DataTypes } from "sequelize"

import { conexao } from "../instances/pg"

import { AnimalModel } from "./animalModel"

import { VeterinarioModel } from "./veterinarioModel"

import { LaboratorioModel } from "./laboratorioModel"

export interface ExameInstance extends Model{

  id: number,
  tipo: string,
  data: Date,
  resultado: string,
  fkanimal: number,
  fkveterinario: number,
  fklaboratorio: number
}

export const ExameModel = conexao.define<ExameInstance>('exame', {

  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER
  },

  tipo: {
    type: DataTypes.STRING,
    allowNull: false
    },

  data: {
    type: DataTypes.DATE,
    allowNull: false
    },

  resultado: {
      type: DataTypes.STRING,
      allowNull: false
    },

  fkanimal: {
    type:DataTypes.INTEGER,
    allowNull: false
  },

  fkveterinario: {
    type:DataTypes.INTEGER,
    allowNull: false
  },

  fklaboratorio: {
    type:DataTypes.INTEGER,
    allowNull: false
  }
},

{
  tableName: 'exame',
  timestamps: false
}

)

// Definindo as chaves estrangeiras e os modelos associados
ExameModel.belongsTo(AnimalModel, { foreignKey: 'fkanimal' })
ExameModel.belongsTo(VeterinarioModel, { foreignKey: 'fkveterinario' })
ExameModel.belongsTo(LaboratorioModel, { foreignKey: 'fklaboratorio' })

