import pool from "../config/dbConnect.js";

async function checkDatabaseConnection() {
  let connection;
  try {
    connection = await pool.getConnection();
    await connection.ping();
    console.log("Conexão ao banco estabelecida");
  } catch (error) {
    console.error("Erro ao conectar no banco");
    process.exit(1);
  } finally {
    if (connection) connection.release();
  };
};

export default checkDatabaseConnection;