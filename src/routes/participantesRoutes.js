import { Router } from "express";
import {
  listarParticipantes,
  criarParticipante,
  listarPorEvento
} from "../controllers/participantesController.js";

const router = Router();

router.get("/", listarParticipantes);
router.get("/evento/:eventoId", listarPorEvento);
router.post("/", criarParticipante);

export default router;
