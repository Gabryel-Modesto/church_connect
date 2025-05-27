import express from "express";
import dotenv from "dotenv";
import jsonMiddleware from "./middlewares/json.js";
import userRoutes from "./routes/routes_users.js";
import checkDatabaseConnection from "./service/dbCheck.js";
import homeRoutes from "./routes/routes_home.js";
import churchesRoutes from "./routes/routes_churches.js";
import rolesRoutes from "./routes/routes_roles.js";
import departamentsRoutes from "./routes/routes_departaments.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT;

await checkDatabaseConnection();

app.use(...jsonMiddleware);
app.use(homeRoutes);
app.use(userRoutes);
app.use(churchesRoutes);
app.use(rolesRoutes)
app.use(departamentsRoutes)


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: http://localhost:${PORT}`);
});
