import express from "express";
import eventosRoutes from "./routes/eventosRoutes.js";
import participantesRoutes from "./routes/participantesRoutes.js";

const app = express();
app.use(express.json());

app.use("/eventos", eventosRoutes);
app.use("/participantes", participantesRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
