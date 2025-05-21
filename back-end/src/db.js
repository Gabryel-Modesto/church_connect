import dotenv from "dotenv";
import mysql from "mysql2";
dotenv.config();

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

function connectToDatabase() {
  try {
    conn.connect((err) => {
      if (err) {
        console.error("Erro ao conectar ao banco de dados", err);
        return;
      }
      console.log("Conexão com o banco de dados estabelecida com sucesso!");
    });
  } catch (error) {
    console.log("Erro inesperado durante a conexão", error);
  }
}

export { conn, connectToDatabase };
