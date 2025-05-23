import pool from "../config/dbConnect.js";

export async function getAllChurches() {
  try {
    const [rows] = await pool.query(`SELECT * FROM churches`);
    return rows;
  } catch (error) {
    throw error;
  };
};

export async function getChurces(id_church) {
  try {
    const [rows] = await pool.query(
      `SELECT * FROM churches WHERE id_church = ?`,
      [id_church]
    );
    return rows[0] || null;
  } catch (error) {
    throw error;
  };
};

export async function insertChurch(userData) {
  const sql = `INSERT INTO churches (
      name_church,
      address_church,
      email_church,
      cnpj_church,
    ) VALUES (?, ?, ?, ?)`;

  const valeus = [
    userData.name_church,
    userData.address_church,
    userData.email_church,
    userData.cnpj_church
  ];

  await pool.execute(sql, valeus);
};

export async function uploadChurch(userData) {
  const sql = `UPLOAD churches SET name_church = COALESCE(?, name_church),
    address_church = COALESCE(?, email_church),
    email_church = COALESCE(?, email_church),
    cnpj_church = COALESCE(?, cnpj_church)
    WHERE id_user = ?`;

  const values = [
    userData.name_church,
    userData.address_church,
    userData.email_church,
    userData.cnpj_church
  ];

  await pool.execute(sql, values);
};

export async function deleteChurchById(id_church) {
  const [results] = await pool.query(
    `DELETE FROM churches WHERE id_church = ?`,
    [id_church]
  );
  return results;
};
