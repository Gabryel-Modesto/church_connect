import express from 'express';
import { listAllUsers, listOneUser, registerUser, updateUser, deleteUser } from '../controllers/userController.js';
import { checkUserFields  } from '../middlewares/checkUserFields.js';

const userRoutes = express.Router();

userRoutes.get('/users', listAllUsers );
userRoutes.get('/users/:id_user', listOneUser)
userRoutes.post('/users', checkUserFields  ,registerUser);
userRoutes.put('/users/:id_user',checkUserFields , updateUser);
userRoutes.delete('/users/:id_user', deleteUser);

export default userRoutes;
