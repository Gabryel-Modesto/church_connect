import {
  deleteRolesById,
  getAllRoles,
  getRoles,
  insertRoles,
  modifyRoles,
  sanitizeRolesData,
} from "../service/roleService.js";
import { handleError } from "../utils/handleError.js";
import { validateId } from "../utils/validateId.js";

export const listAllRoles = async (req, res) => {
  try {
    const roles = await getAllRoles();
    res.status(200).json(roles);
  } catch (error) {
    console.error(error);
    return handleError(res, error);
  }
};

export const listOneRole = async (req, res) => {
  try {
    const id_roles = parseInt(req.params.id_roles);
    const { valid, message } = validateId(req.params.id_roles);
    if (!valid) {
      return res.status(400).json({ message });
    }

    const roles = await getRoles(id_roles);

    if (!roles) {
      return res.status(404).json({ message: "Cargo não encontrado" });
    }
    res.status(200).json(roles);
  } catch (error) {
    console.error(error);
    return handleError(res, error);
  }
};

export const registerRoles = async (req, res) => {
  try {
    const rolesData = sanitizeRolesData(req.body);

    if (!rolesData.name_role) {
      return res.status(400).json({ message: "Nome é obrigatório" });
    }

    await insertRoles(rolesData);

    res.status(201).json({ message: "Cargo cadastrado com sucesso" });
  } catch (error) {
    console.error(error);
    return handleError(res, error);
  }
};

export const updateRoles = async (req, res) => {
  try {
    const id_roles = parseInt(req.params.id_roles);
    const rolesData = sanitizeRolesData(req.body)
    const { valid, message } = validateId(req.params.id_roles);
    
    if (!valid) {
        return res.status(400).json({ message });
    }
    

    await modifyRoles(id_roles, rolesData);
    res.status(200).json({ message: "Cargo atualizado com sucesso" });
  } catch (error) {
    console.error(error);
    return handleError(res, error);
  }
};

export const deleteRoles = async (req, res) => {
  try {
    const id_roles = parseInt(req.params.id_roles);
    const { valid, message } = validateId(req.params.id_roles);

    if (!valid) {
      return res.status(400).json({ message });
    }

    const deleted = await deleteRolesById(id_roles);

    if (deleted.affectedRows === 0) {
      return res.status(404).json({ message: "Cargo não encontrado" });
    }
    res.status(200).json({ message: "Cargo deletado" });
  } catch (error) {
    console.error(error);
    return handleError(res, error);
  }
};
