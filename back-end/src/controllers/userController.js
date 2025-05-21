export const getHome = (req, res) => {
     res.send("Seja bem-vindo");
}

export const listUsers  = (req, res) => {
  const sql = `SELECT * FROM users`;

  conn.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json("Erro ao buscar dados");
    }
    res.status(200).json(results);
  });
};

export const registerUser = (req, res) => {
  const {
    name_user,
    email_user,
    cpf_user,
    gender_user,
    marital_status_user,
    birthdate_user,
    phone_number_user,
    status_user,
    authorization_image,
    authorization_signature_path,
    profile_photo,
  } = req.body;

  const validUserStatus = ["ativo", "inativo"];
  if (!validUserStatus.includes(status_user)) {
    return res.status(400).json({ message: "Invalid status" });
  }

  const sql = `INSERT INTO users (name_user,
        email_user, 
        cpf_user, 
        gender_user,
        marital_status_user, 
        birthdate_user, 
        phone_number_user, 
        status_user, 
        authorization_image, 
        authorization_signature_path, 
        profile_photo) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  conn.query(
    sql,
    [
      name_user,
      email_user,
      cpf_user,
      gender_user,
      marital_status_user,
      birthdate_user,
      phone_number_user,
      status_user,
      authorization_image,
      authorization_signature_path,
      profile_photo,
    ],
    (err) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Erro ao enviar dados");
      }
      res.status(201).json({ mensage: "Usuário cadastrado com sucesso!" });
    }
  );
};

export const updateUser = (req, res) => {
  const id_user = parseInt(req.params.id_user);
  const {
    name_user,
    email_user,
    cpf_user,
    gender_user,
    marital_status_user,
    birthdate_user,
    phone_number_user,
    status_user,
    authorization_image,
    authorization_signature_path,
    profile_photo,
  } = req.body;

  const sql = `UPDATE users SET name_user = COALESCE(?, name_user),
        email_user = COALESCE(?, email_user), 
        cpf_user = COALESCE(?, cpf_user), 
        gender_user = COALESCE(?, gender_user),
        marital_status_user = COALESCE(?, marital_status_user), 
        birthdate_user = COALESCE(?, birthdate_user), 
        phone_number_user = COALESCE(?, phone_number_user), 
        status_user = COALESCE(?, status_user ), 
        authorization_image = COALESCE(?, authorization_image), 
        authorization_signature_path = COALESCE(?, authorization_signature_path), 
        profile_photo = COALESCE(?, profile_photo)
        WHERE id_user = ?`;

  conn.query(
    sql,
    [
      name_user,
      email_user,
      cpf_user,
      gender_user,
      marital_status_user,
      birthdate_user,
      phone_number_user,
      status_user,
      authorization_image,
      authorization_signature_path,
      profile_photo,
      id_user,
    ],
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ mensage: "Erro ao atualizar usuário" });
      }

      if (results.affectedRows === 0) {
        return res.status(400).json({ mensage: "Usuário não encontrado" });
      }

      res.status(200).json({ mensage: "Usuário atualizado com sucesso!" });
    }
  );
};

export const deleteUser = (req, res) => {
  const id_user = parseInt(req.params.id_user);

  const sql = `DELETE FROM users  WHERE id_user = ?`;

  conn.query(sql, [id_user], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ mensage: "Erro ao deletar usuário" });
    }

    if (results.affectedRows === 0) {
      return res.status(400).json({ mensage: "Usuário não encontrado" });
    }

    res.status(200).json({ mensage: "Usuário deletado com sucesso!" });
  });
};
