import { deleteDepartamentByID, getAllDepartaments, getDepartaments, insertDepartaments, modifyDepartaments, sanitizeDepartamentData } from "../service/departamentService.js"
import { handleError } from "../utils/handleError.js";
import { validateId } from "../utils/validateId.js";

export const listAllDepartaments = async(req, res) => {
    try {
        const departaments = await getAllDepartaments();
        res.status(200).json(departaments)
    } catch (error) {
        console.error(error)
        return handleError(res, error)
    }
};

export const listOneDepartament = async(req, res) => {
    try {
        const id_departament = parseInt(req.params.id_departament)
        const {valid, message} = validateId(req.params.id_departament)
        if(!valid) {
            return res.status(400).json({message})
        }
        
        const departament = await getDepartaments(id_departament)

        if(!departament) {
            return res.status(404).json({message: 'Departamento não encontrado'})
        }
        res.status(200).json(departament)
    } catch (error) {
        console.error(error)
        return handleError(res, error)
    }
}

export const registerDepartaments = async (req, res) => {
  try {
    const departamentData = sanitizeDepartamentData(req.body);

    if(!departamentData.name_user) {
      return res.status(400).json({message: 'Nome é obrigatorios'})
    };

    await insertDepartaments(departamentData);

    res.status(201).json({ message: "Departamento cadastrado com sucesso!" });
  } catch (error) {
    console.error(error);
    return handleError(res, error)
  }
};


export const updateDepartaments = async (req, res) => {
  try {
    const id_departament = parseInt(req.params.id_departament);
    const {valid, message} = validateId(req.params.id_departament)

    if(!valid) {
      return res.status(400).json({message});
    };

    const departamentData = sanitizeDepartamentData(req.body);

    await modifyDepartaments(id_departament, departamentData);

    res.status(200).json({ message: "Departamento atualizado com sucesso!" });
  } catch (error) {
    console.error(error);
    return handleError(res, error)
  }
};

export const deleteDepartament = async (req, res) => {
  try {
    const id_departament = parseInt(req.params.id_departament);
    const {valid, message} = validateId(req.params.id_departament)

    if(!valid) {
      return res.status(400).json({message});
    };

    const deleted = await deleteDepartamentByID(id_departament);

    if (deleted.affectedRows === 0) {
      return res.status(404).json({ message: "Departamento não encontrado" });
    }

    res.status(200).json({ message: "Departamento deletado!" });
  } catch (error) {
    console.error(error);
    return handleError(res, error)
  }
};