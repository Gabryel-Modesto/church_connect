import {
  validateUserStatus,
  sanitizeUserData,
  insertUser,
  modifyUser,
  getAllUsers,
  getUser,
  deleteUserById,
} from "../service/userService.js";
import { handleError } from "../utils/handleError.js";
import { validateId } from "../utils/validateId.js";


export const listAllUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return handleError(res, error)
  }
};

export const listOneUser = async (req, res) => {
  try {
    const id_user = parseInt(req.params.id_user);
    const {valid, message} = validateId(req.params.id_user)
    if(!valid) {
      return res.status(400).json({message});
    };
    
    const user = await getUser(id_user);

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    };
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return handleError(res, error)
  }
};

export const registerUser = async (req, res) => {
  try {
    const userData = sanitizeUserData(req.body);

    if (!validateUserStatus(userData.status_user)) {
      throw new Error("Status inválido: deve ser 'ativo' ou 'inativo'");
    };

    if(!userData.name_user || !userData.email_user) {
      return res.status(400).json({message: 'Nome e Email são obrigatorios'})
    };

    await insertUser(userData);

    res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
  } catch (error) {
    console.error(error);
    return handleError(res, error)
  }
};

export const updateUser = async (req, res) => {
  try {
    const id_user = parseInt(req.params.id_user);
    const {valid, message} = validateId(req.params.id_user)

    if(!valid) {
      return res.status(400).json({message});
    };

    const userData = sanitizeUserData(req.body);

    if (!validateUserStatus(userData.status_user)) {
      throw new Error("Status inválido: deve ser 'ativo' ou 'inativo'");
    }

    await modifyUser(id_user, userData);

    res.status(200).json({ message: "Usuário atualizado com sucesso!" });
  } catch (error) {
    console.error(error);
    return handleError(res, error)
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id_user = parseInt(req.params.id_user);
    const {valid, message} = validateId(req.params.id_user)

    if(!valid) {
      return res.status(400).json({message});
    };

    const deleted = await deleteUserById(id_user);

    if (deleted.affectedRows === 0) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    res.status(200).json({ message: "Usuário deletado!" });
  } catch (error) {
    console.error(error);
    return handleError(res, error)
  }
};
