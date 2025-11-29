import { Router } from "express";
import {
  listarEventos,
  criarEvento,
  atualizarEvento,
  deletarEvento,
  obterEvento
} from "../controllers/EventosController.js";

const router = Router();

router.get("/", listarEventos);
router.get("/:id", obterEvento);
router.post("/", criarEvento);
router.put("/:id", atualizarEvento);
router.delete("/:id", deletarEvento);

export default router;
