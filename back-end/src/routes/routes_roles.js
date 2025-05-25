import express from 'express'
import { deleteRoles, listAllRoles, listOneRole, registerRoles, updateRoles } from '../controllers/rolesControllers.js'

const rolesRoutes = express.Router()

rolesRoutes.get('/roles', listAllRoles)
rolesRoutes.get('/roles/:id_roles', listOneRole)
rolesRoutes.post('/roles', registerRoles)
rolesRoutes.put('/roles/:id_roles', updateRoles)
rolesRoutes.delete('/roles/:id_roles', deleteRoles)

export default rolesRoutes;