import {
  validateUserStatus,
  sanitizeUserData,
  insertUser,
  uploadUser,
  getAllUsers,
  getUser,
  deleteUserById
} from "../service/userService.js";


export const Home = (req, res) => {
  res.send("Seja bem-vindo");
};

export const listAllUsers = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Erro ao buscar usuários'});
    };
};

export const listOneUser = async (req, res) => {
   try {
        const id_user = parseInt(req.params.id_user);

        if(isNaN(id_user)) {
            return res.status(400).json({message: 'ID inválido'});
        };

        const user = await getUser(id_user);

        if(!user) {
            return res.status(404).json({message: 'Usuário não encontrado'});
        }
        res.status(200).json(user)
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Erro ao buscar usuário'});
    };
};

export const registerUser = async (req, res) => {
  try {
    const userData = sanitizeUserData(req.body);

    if (!validateUserStatus(userData.status_user)) {
      return res.status(400).json({message: 'Valor Inválido'});
    };

    await insertUser(userData);

    res.status(201).json({message: 'Usuário cadastrado com sucesso!'});
  } catch (error) {
    console.error(error);
    return res.status(500).json({message: 'Erro interno no servidor'});
  };
};

export const updateUser =  async (req, res) => {
  try {
    const id_user = parseInt(req.params.id_user);
    const userData = sanitizeUserData(req.body);
    userData.id_user = id_user;

    if (!validateUserStatus(userData.status_user)) {
      return res.status(400).json({ message: 'Valor Inválido' });
    };

    await uploadUser(userData);

    res.status(200).json({message: 'Usuário atualizado com sucesso!'})
  } catch (error) {
    console.error(error)
    return res.status(500).json({message: 'Erro interno no servidor'});
  };
};

export const deleteUser = async (req, res) => {
  try {
    const id_user = parseInt(req.params.id_user);
    if(isNaN(id_user)) {
        return res.status(400).json({message: 'ID inválido'});
    };

    const results = await deleteUserById(id_user);

    if(results.affectedRows === 0) {
        return res.status(404).json({message: 'Usuário não encontrado'});
    }
    
    res.status(200).json({message: 'Usuário deletado!'})
  } catch (error) {
    console.error(error);
    res.status(500).json({message: 'Erro ao deletar usuário'});
  };
};
