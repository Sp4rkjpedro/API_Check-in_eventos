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

// ATUALIZAR PARTICIPANTE
export const atualizarParticipante = async (req, res) => {
  const { id } = req.params;
  const { nome, evento_id } = req.body;

  try {
    const [result] = await db.query(
      "UPDATE participantes SET nome = ?, evento_id = ? WHERE id = ?",
      [nome, evento_id, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ erro: "Participante não encontrado." });
    }

    res.json({ mensagem: "Participante atualizado com sucesso." });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

// DELETAR PARTICIPANTE
export const deletarParticipante = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await db.query(
      "DELETE FROM participantes WHERE id = ?",
      [id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ erro: "Participante não encontrado." });
    }

    res.json({ mensagem: "Participante deletado com sucesso." });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};
