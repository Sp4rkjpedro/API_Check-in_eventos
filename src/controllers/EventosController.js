import { db } from "../config/db.js";

// LISTAR TODOS
export const listarEventos = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM eventos");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

// OBTER POR ID
export const obterEvento = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query("SELECT * FROM eventos WHERE id = ?", [id]);
    if (rows.length === 0) return res.status(404).json({ erro: "Evento não encontrado" });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

// CRIAR EVENTO
export const criarEvento = async (req, res) => {
  const { nome, local, data } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO eventos (nome, local, data) VALUES (?, ?, ?)",
      [nome, local, data]
    );
    res.status(201).json({ id: result.insertId, nome, local, data });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

// ATUALIZAR EVENTO
export const atualizarEvento = async (req, res) => {
  const { id } = req.params;
  const { nome, local, data } = req.body;

  try {
    const [result] = await db.query(
      "UPDATE eventos SET nome=?, local=?, data=? WHERE id=?",
      [nome, local, data, id]
    );
    if (result.affectedRows === 0) return res.status(404).json({ erro: "Evento não encontrado" });
    res.json({ mensagem: "Evento atualizado" });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

// DELETAR EVENTO
export const deletarEvento = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await db.query("DELETE FROM eventos WHERE id=?", [id]);
    if (result.affectedRows === 0) return res.status(404).json({ erro: "Evento não encontrado" });
    res.json({ mensagem: "Evento removido" });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};
