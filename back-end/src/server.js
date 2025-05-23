import express from "express";
import dotenv from "dotenv";
import jsonMiddleware from "./middlewares/json.js";
import userRoutes from "./routes/routes_users.js";
import checkDatabaseConnection from "./service/dbCheck.js";
import homeRoutes from "./routes/routes_home.js";
// import churchesRoutes from "./routes/routes_churches.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

await checkDatabaseConnection();

app.use(...jsonMiddleware);
app.use(homeRoutes);
app.use(userRoutes);
// app.use(churchesRoutes);


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: http://localhost:${PORT}`);
});
