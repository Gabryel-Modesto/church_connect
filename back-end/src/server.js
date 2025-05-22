import express from "express";
import dotenv from "dotenv";
import jsonMiddleware from "./middlewares/json.js";
import router from "./routes/routes_users/routes_users.js";
import checkDatabaseConnection from "./service/dbCheck.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

await checkDatabaseConnection();

app.use(...jsonMiddleware);
app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: http://localhost:${PORT}`);
});
