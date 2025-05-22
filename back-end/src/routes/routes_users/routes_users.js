import express from "express";
import { deleteUser, Home, listAllUsers , registerUser, updateUser, listOneUser } from "../../controllers/userController.js";

const router = express.Router();

router.get("/", Home);

router.get("/users/", listAllUsers );

router.get('/users/:id_user', listOneUser)

router.post("/users/insertusers/", registerUser);

router.put("/users/usersupdate/:id_user", updateUser);

router.delete("/users/deleteusers/:id_user", deleteUser);

export default router;
