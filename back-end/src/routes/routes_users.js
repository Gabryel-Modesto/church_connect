import express from 'express';
import { listAllUsers, listOneUser, registerUser, updateUser, deleteUser } from '../controllers/userController.js';
import { validateMiddlewaresUser } from '../middlewares/validateMiddlewaresUser.js';


const userRoutes = express.Router();

userRoutes.get('/users', listAllUsers );
userRoutes.get('/users/:id_user', listOneUser)
userRoutes.post('/users', validateMiddlewaresUser ,registerUser);
userRoutes.put('/users/:id_user',validateMiddlewaresUser,updateUser);
userRoutes.delete('/users/:id_user', deleteUser);

export default userRoutes;
