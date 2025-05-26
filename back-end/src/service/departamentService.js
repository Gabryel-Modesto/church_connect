import pool from "../config/dbConnect.js";

export function sanitizeDepartamentData(departamentData) {
    return {
        ...departamentData,
        name_departament: departamentData.name_departament?.trim() || null,
        description_departament: departamentData.description_departament?.trim().toLowerCase() || null
    }
}

export async function getAllDepartaments() {
    try {
        const [rows] = await pool.query(`SELECT * FROM departaments`)
        return rows;
    } catch (error) {
        console.error('Erro ao buscar departamentos', error)
        throw error
    }
};

export async function  getDepartaments(id_departament) {
    try {
        const [rows] = await pool.query(`SELECT * FROM departaments WHERE id_departament = ?`, [id_departament])
        return rows[0] || null;
    } catch (error) {
        console.error('Erro ao buscar departamento', error)
        throw error
    }
};

export async function  insertDepartaments(departamentData) {
    const sql = `INSERT INTO departaments (
    name_departament,
    description_departament
    ) VALUES (? , ?)`

    const values = [
        departamentData.name_departament,
        departamentData.description_departament
    ];

    try {
        await pool.query(sql, values)
    } catch (error) {
        console.error('Erro ao inserir usuário', error)
        throw error
    }

}

export async function modifyDepartaments(id_departament, departamentData) {
    const sql = `UPDATE departaments SET name_departament = COALESCE(?, name_departament),
    description_departament = COALESCE(?, description_departament)
    WHERE id_departament = ?`;

    const values = [
        departamentData.name_departament,
        departamentData.description_departament,
        id_departament
    ]

    try {
        await pool.query(sql, values)
    } catch (error) {
        console.error('Erro ao atualizar departamento', error)
        throw error
    }
}

export async function deleteDepartamentByID(id_departament) {
    try {
        const [results] = await pool.query(`DELETE FROM departaments WHERE id_departament = ?`, [id_departament]);
        return results
    } catch (error) {
        console.error('Erro ao deletar departamento'. error)
        throw error
    }
}