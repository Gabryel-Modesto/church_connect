import express from "express";
import { deleteUser, getHome, listUsers , registerUser, updateUser } from "../../controllers/userController.js";

const router = express.Router();

router.get("/", getHome);

router.get("/users/", listUsers );

router.post("/users/insertusers/", registerUser);

router.put("/users/usersupdate/:id_user", updateUser);

router.delete("/users/deleteusers/:id_user", deleteUser);

export default router;
