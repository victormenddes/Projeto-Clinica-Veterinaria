
import { Model, DataTypes } from "sequelize"

import { AnimalModel } from "./animalModel"

import { EnfermidadeModel } from "./enfermidadeModel"

import { ModelResponsavel } from "./responsavelModel"

import { VeterinarioModel } from "./veterinarioModel"


import { conexao } from "../instances/pg"

export interface EnfermidadeAnimalInstance extends Model{

  id: number,
  fkanimal: number,
  fkinfermidade: number
}

export const EnfermidadeAnimalModel = conexao.define<EnfermidadeAnimalInstance>('animal_enfermidade', {

  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: true,
    type: DataTypes.INTEGER
  },

  fkanimal: {
    type:DataTypes.INTEGER,
    allowNull: false
  },

  fkinfermidade: {
    type:DataTypes.INTEGER,
    allowNull: false
  }
},

{
  tableName: 'animal_enfermidade',
  timestamps: false
}

)

// Definindo as chaves estrangeiras e os modelos associados
EnfermidadeAnimalModel.belongsTo(AnimalModel, { foreignKey: 'fkanimal' })
EnfermidadeAnimalModel.belongsTo(EnfermidadeModel, { foreignKey: 'fkinfermidade' })
EnfermidadeAnimalModel.belongsTo(ModelResponsavel, { foreignKey: 'id' })
EnfermidadeAnimalModel.belongsTo(VeterinarioModel, { foreignKey: 'id' })
