import { Router } from "express";
import {
  listarParticipantes,
  criarParticipante,
  listarPorEvento,
  atualizarParticipante,
  deletarParticipante
} from "../controllers/participantesController.js";

const router = Router();

router.get("/", listarParticipantes);
router.get("/evento/:eventoId", listarPorEvento);
router.post("/", criarParticipante);
router.put("/:id", atualizarParticipante);
router.delete("/:id", deletarParticipante);

export default router;
