
import express, { Request, Response } from "express"

import { router } from "../routers/router"

import path from "path"

import dotenv from "dotenv"

dotenv.config()

export const server = express()

server.use(express.json())

server.use(router)

server.use(express.static(path.join(__dirname, '../public')))
server.use(express.urlencoded({ extended: true }))


server.use((req: Request, res: Response) => {
  res.json({ Servidor: `Servidor Rodando no endereço http://localhost: ${process.env.PORT}`})
})


server.listen(process.env.PORT)

