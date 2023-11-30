
import { Model, DataTypes } from "sequelize"

import { conexao } from "../instances/pg"

import { ModelResponsavel } from "./responsavelModel"

import { VeterinarioModel } from "./veterinarioModel"


export interface AnimalInstance extends Model{
  id: number,
  sexo: string,
  especie: string,
  fkresponsavel: number,
  fkveterinario: number
}

export const AnimalModel = conexao.define<AnimalInstance>('animal', {

  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER
  },

  sexo: {
    type: DataTypes.STRING,
    allowNull: false
  },

  especie: {
    type: DataTypes.STRING,
    allowNull: false
  },

  fkresponsavel: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  fkveterinario: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},

{
  tableName: 'animal',
  timestamps: false
}

)

AnimalModel.belongsTo(ModelResponsavel, {foreignKey: 'fkresponsavel'})
AnimalModel.belongsTo(VeterinarioModel, {foreignKey: 'fkveterinario'})
