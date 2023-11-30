
import { Router } from "express"

import { ControllerResponsavel } from "../controllers/responsavelController" 
import { VeterinarioController } from "../controllers/veterinarioController"
import { AnimalControler } from "../controllers/animalControler"
import { EnfermidadeController } from "../controllers/enfermidadeController"
import { EnfermidadeAnimalController } from "../controllers/enfermidadeAnimalController"
import { ConsultaController } from "../controllers/consultaController"
import { LaboratorioController } from "../controllers/laboratorioController"
import { ExameController } from "../controllers/exameController"

export const router = Router()



// Rotas Tabela Responsavel
router.get('/responsaveis', new ControllerResponsavel().findAll)
router.get('/responsavel/:id', new ControllerResponsavel().findByPk)
router.post('/responsavel/:cadastro', new ControllerResponsavel().create)
router.put('/responsavel/:id', new ControllerResponsavel().update)
router.delete('/responsavel/:id', new ControllerResponsavel().deletar)


// Rotas Tabela Veterinario
router.get('/veterinarios', new VeterinarioController().findAll)
router.get('/veterinario/:id', new VeterinarioController().findBYId)
router.post('/veterinario/:cadastro', new VeterinarioController().create)
router.put('/veterinario/:id', new VeterinarioController().update)
router.delete('/veterinario/:id', new VeterinarioController().deletar)


// Rotas Tabela Animal
router.get('/animais', new AnimalControler().findAll)
router.get('/animal/:id', new AnimalControler().findByPk)
router.post('/animal/:cadastro', new AnimalControler().create)
router.put('/animal/:id', new AnimalControler().update)
router.delete('/animal/:id', new AnimalControler().deletar)


// Rotas Tabela Enfermidade
router.get('/enfermidades', new EnfermidadeController().findAll)
router.get('/enfermidade/:id', new EnfermidadeController().findByPk)
router.post('/enfermidade/:cadastro', new EnfermidadeController().create)
router.put('/enfermidade/:id', new EnfermidadeController().update)
router.delete('/enfermidade/:id', new EnfermidadeController().deletar)


// Rotas Tabela Enfermidade
router.get('/enfermidadeAnimal', new EnfermidadeAnimalController().findAll)
router.get('/enfermidadeAnimal/:id', new EnfermidadeAnimalController().findByPk)
router.post('/enfermidadeAnimal/:cadastro', new EnfermidadeAnimalController().create)
router.put('/enfermidadeAnimal/:id', new EnfermidadeAnimalController().update)
router.delete('/enfermidadeAnimal/:id', new EnfermidadeAnimalController().deletar)


// Rotas Tabela consulta:
router.get('/consultas', new ConsultaController().findAll)
router.get('/consulta/:id', new ConsultaController().findByPk)
router.post('/consulta/:cadastro', new ConsultaController().create)
router.put('/consulta/:id', new ConsultaController().update)
router.delete('/consulta/:id', new ConsultaController().deletar)


// Rotas Tabela Laboratorio:
router.get('/laboratorios', new LaboratorioController().findAll)
router.get('/laboratorio/:id', new LaboratorioController().findByPk)
router.post('/laboratorio/:cadastro', new LaboratorioController().create)
router.put('/laboratorio/:id', new LaboratorioController().update)
router.delete('/laboratorio/:id', new LaboratorioController().deletar)


// Rotas Tabela Exame:
router.get('/exames', new ExameController().findAll)
router.get('/exame/:id', new ExameController().findByPk)
router.post('/exame/:cadastro', new ExameController().create)
router.put('/exame/:id', new ExameController().update)
router.delete('/exame/:id', new ExameController().deletar)

