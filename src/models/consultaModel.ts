
import { Model, DataTypes } from "sequelize"


import { AnimalModel } from "./animalModel"

import { VeterinarioModel } from "./veterinarioModel"


import { conexao } from "../instances/pg"

export interface ConsultaInstance extends Model{

  id: number,
  descricaoproblema: string,
  data: Date,
  hora: string,
  fkanimal: number,
  fkveterinario: number

}

export const ConsultaModel = conexao.define<ConsultaInstance>('consulta', {

  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: true,
    type: DataTypes.INTEGER
  },

  descricaoproblema: {
    type: DataTypes.STRING,
    allowNull: false
    },

    data: {
      type: DataTypes.DATE,
      allowNull: false
    },

    hora: {
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
  }
},

{
  tableName: 'consulta',
  timestamps: false
}

)

// Definindo as chaves estrangeiras e os modelos associados
ConsultaModel.belongsTo(AnimalModel, { foreignKey: 'fkanimal' })
ConsultaModel.belongsTo(VeterinarioModel, { foreignKey: 'fkveterinario' })
