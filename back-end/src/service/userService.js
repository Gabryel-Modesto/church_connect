import pool from "../config/dbConnect.js";
import { parseDateOrNull } from "../utils/parseDateOrNull.js";

export function validateUserStatus(status) {
  const validUserStatus = ["ativo", "inativo"];
  return validUserStatus.includes(status);
};

export function sanitizeUserData(userData) {
  return {
    ...userData,
    name_user: userData.name_user?.trim() || null,
    email_user: userData.email_user?.trim().toLowerCase(),
    cpf_user: userData.cpf_user?.replace(/\D/g, ""),
    gender_user: userData.gender_user?.trim().toLowerCase(),
    marital_status_user: userData.marital_status_user?.trim().toLowerCase(),
    birthdate_user: parseDateOrNull(userData.birthdate_user),
    marriage_date_user: parseDateOrNull(userData.marriage_date_user),
    phone_number_user: userData.phone_number_user?.replace(/\D/g, ""),
    status_user: validateUserStatus(userData.status_user?.trim().toLowerCase()) ? userData.status_user?.trim().toLowerCase() : 'inativo',
    authorization_image: userData.authorization_image?.trim() || null ,
    authorization_signature_path: userData.authorization_signature_path?.trim() || null,
    profile_photo: userData.profile_photo?.trim() || null,
  };
};

export async function getAllUsers() {
  try {
    const [rows] = await pool.query(`SELECT * FROM users`);
    return rows;
  } catch (error) {
    console.error('Erro ao buscar usuários', error)
    throw error;
  }
};

export async function getUser(id_user) {
  try {
    const [rows] = await pool.query(`SELECT * FROM users WHERE id_user = ?`, [
      id_user,
    ]);

    return rows[0] || null;
  } catch (error) {
    console.error('Erro ao buscar usuário', error)
    throw error;
  };
};

export async function insertUser(userData) {
  const sql = `INSERT INTO users (
    name_user,
    email_user, 
    cpf_user, 
    gender_user,
    marital_status_user, 
    birthdate_user, 
    marriage_date_user,
    phone_number_user, 
    status_user, 
    authorization_image, 
    authorization_signature_path, 
    profile_photo
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    userData.name_user,
    userData.email_user,
    userData.cpf_user,
    userData.gender_user,
    userData.marital_status_user,
    userData.birthdate_user,
    userData.marriage_date_user,
    userData.phone_number_user,
    userData.status_user,
    userData.authorization_image,
    userData.authorization_signature_path,
    userData.profile_photo,
  ];

  try {
    await pool.execute(sql, values);
  } catch (error) {
    console.error('Erro ao inserir usuário', error)
    throw error;    
  };

};

export async function modifyUser(id_user, userData) {

  const sql = `UPDATE users SET name_user = COALESCE(?, name_user),
    email_user = COALESCE(?, email_user), 
    cpf_user = COALESCE(?, cpf_user), 
    gender_user = COALESCE(?, gender_user),
    marital_status_user = COALESCE(?, marital_status_user), 
    birthdate_user = COALESCE(?, birthdate_user),
    marriage_date_user = COALESCE(?, marriage_date_user), 
    phone_number_user = COALESCE(?, phone_number_user), 
    status_user = COALESCE(?, status_user ), 
    authorization_image = COALESCE(?, authorization_image), 
    authorization_signature_path = COALESCE(?, authorization_signature_path), 
    profile_photo = COALESCE(?, profile_photo)
    WHERE id_user = ?`;

  const values = [
    userData.name_user,
    userData.email_user,
    userData.cpf_user,
    userData.gender_user,
    userData.marital_status_user,
    userData.birthdate_user,
    userData.marriage_date_user,
    userData.phone_number_user,
    userData.status_user,
    userData.authorization_image,
    userData.authorization_signature_path,
    userData.profile_photo,
    id_user,
  ];

  try {
    await pool.execute(sql, values);
  } catch (error) {
    console.error('Erro ao atualizar o usuário', error);
    throw error;
    
  }
};

export async function deleteUserById(id_user) {
  try {
    const [results] = await pool.query(`DELETE FROM users WHERE id_user = ?`, [id_user]);
    return results;
  } catch (error) {
    console.error('Erro ao deletar o usuário', error);
    throw error;
  }

};
