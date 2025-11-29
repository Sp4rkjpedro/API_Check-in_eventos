import { db } from "../config/db.js";

// LISTAR TODOS
export const listarParticipantes = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM participantes");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

// LISTAR POR EVENTO
export const listarPorEvento = async (req, res) => {
  const { eventoId } = req.params;
  try {
    const [rows] = await db.query(
      "SELECT * FROM participantes WHERE evento_id = ?",
      [eventoId]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

// CRIAR PARTICIPANTE (check-in)
export const criarParticipante = async (req, res) => {
  const { nome, evento_id } = req.body;

  try {
    const [result] = await db.query(
      "INSERT INTO participantes (nome, evento_id) VALUES (?, ?)",
      [nome, evento_id]
    );
    res.status(201).json({
      id: result.insertId,
      nome,
      evento_id,
      horario_checkin: new Date()
    });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};
