import pool from "../config/dbConnect.js";

export function sanitizeRolesData(rolesData) {
    return {
        ...rolesData,
        name_role: rolesData.name_role?.trim() || null,
    }
}

export async function getAllRoles() {
    try {
        const [rows] = await pool.query(`SELECT * FROM roles`);
        return rows;
    } catch (error) {
        throw error
    }
}

export async function getRoles(id_roles) {
    try {
        const [rows] = await pool.query(`SELECT * FROM roles WHERE id_roles = ?`, [id_roles]);
        return rows[0] || null;
    } catch (error) {
        throw error;
    }
}

export async function insertRoles(rolesData) {
    const sql = `INSERT INTO roles (name_role) VALUES (?)`

    const values = [
        rolesData.name_role
    ]

    try {
        await pool.execute(sql, values)
    } catch (error) {
        console.error('Erro ao inserir cargo', error)
        throw error;
    }

}

export async function modifyRoles(id_roles, rolesData) {
    const sql = `UPDATE roles SET name_role = COALESCE(?, name_role) WHERE id_roles = ?`

    const values = [
        rolesData.name_role,
        id_roles
    ]

    try {
        await pool.execute(sql, values)
    } catch (error) {
        console.error('Erro ao atualizar para cargo', error)
        throw error
    }
}

export async function deleteRolesById(id_roles) {
    try {
        const [results] = await pool.query(`DELETE FROM roles WHERE id_roles = ?`, [id_roles]);
        return results;
    } catch (error) {
        console.error('Erro ao deletar o cargo', error)
        throw error
    }
}