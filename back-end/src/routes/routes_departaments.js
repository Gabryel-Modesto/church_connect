import express from 'express'
import { deleteDepartament, listAllDepartaments, listOneDepartament, registerDepartaments, updateDepartaments } from '../controllers/departamentController.js';

const departamentsRoutes = express.Router();

departamentsRoutes.get('/departaments', listAllDepartaments)
departamentsRoutes.get('/departaments/:id_departament', listOneDepartament)
departamentsRoutes.post('/departaments', registerDepartaments)
departamentsRoutes.put('/departaments/:id_departament', updateDepartaments)
departamentsRoutes.delete('/departaments/:id_departament', deleteDepartament);

export default departamentsRoutes;