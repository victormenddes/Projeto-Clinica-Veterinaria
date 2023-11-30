
import { Sequelize } from "sequelize";

import dotenv from "dotenv"

dotenv.config()

export const conexao = new Sequelize(
    process.env.PG_DATABSE as string,
    process.env.PG_USER as string,
    process.env.PG_PASSWORD as string,
    {
      dialect: 'postgres',
      port: parseInt(process.env.PG_PORT as string)
    }
) 

