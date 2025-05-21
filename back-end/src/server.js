import express from 'express';
import { connectToDatabase } from './db.js';
import dotenv from 'dotenv'
import jsonMiddleware from './middlewares/json.js';
import router from './routes/routes_users/routes_users.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

connectToDatabase();

app.use(...jsonMiddleware);
app.use(router);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: http://localhost:${PORT}`);
});
