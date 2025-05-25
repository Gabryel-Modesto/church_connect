import pool from "../config/dbConnect.js";

export function sanitizeChurchData(churchData) {
  return {
    ...churchData,
    name_church: churchData.name_church?.trim().toLowerCase(),
    address_church: churchData.address_church?.trim().toLowerCase(),
    email_church: churchData.email_church?.trim().toLowerCase(),
    cnpj_church: churchData.cnpj_church?.replace(/\D/g, ""),
  };
};

export async function getAllChurches() {
  try {
    const [rows] = await pool.query(`SELECT * FROM churches`);
    return rows;
  } catch (error) {
    throw error;
  }
};

export async function getChurch(id_church) {
  if (!id_church || isNaN(Number(id_church))) {
    throw new Error("ID inválido");
  }

  try {
    const [rows] = await pool.query(
      `SELECT * FROM churches WHERE id_church = ?`,
      [id_church]
    );
    return rows[0] || null;
  } catch (error) {
    throw error;
  }
};

export async function insertChurch(churchData) {
  const sql = `INSERT INTO churches (
      name_church,
      address_church,
      email_church,
      cnpj_church,
    ) VALUES (?, ?, ?, ?)`;

  const values = [
    churchData.name_church,
    churchData.address_church,
    churchData.email_church,
    churchData.cnpj_church,
  ];

  try {
    await pool.execute(sql, values);
  } catch (error) {
    console.error("Erro ao inserir igreja", error);
    throw error;
  }
};

export async function modifyChurch(id_church, churchData) {
  const sql = `UPDATE churches SET name_church = COALESCE(?, name_church),
    address_church = COALESCE(?, address_church),
    email_church = COALESCE(?, email_church),
    cnpj_church = COALESCE(?, cnpj_church)
    WHERE id_church = ?`;

  const values = [
    churchData.name_church,
    churchData.address_church,
    churchData.email_church,
    churchData.cnpj_church,
    id_church,
  ];

  try {
    await pool.execute(sql, values);
  } catch (error) {
    console.error("Erro ao atualizar igreja", error);
    throw error;
  };
};

export async function deleteChurchById(id_church) {
  if (!id_church || isNaN(Number(id_church))) {
    throw new Error("ID inválido");
  }

  try {
    const [results] = await pool.query(
      `DELETE FROM churches WHERE id_church = ?`,
      [id_church]
    );
    return results;
  } catch (error) {
    console.error("Erro ao deletar igreja", error);
    throw error;
  };
};
