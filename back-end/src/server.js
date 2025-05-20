import express from 'express';
import conn from './db.js';
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const PORT = process.env.PORT

conn.connect((err) => {
    if(err) {
        console.error('Erro ao conectar',err)
    }
    console.log('Deu certo')
})


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: http://localhost:${PORT}`)
});
