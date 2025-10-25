const express = require('express');
const cors = require('cors');
const pool = require('../db/mysqlConnect');

const app = express();

app.use(cors());
app.use(express.json());

const AUTH_TOKEN = "Fyb_vmG9-TQP65mgOEHVru34-Oh2GYdwU3YgFci1tQY"; 

// Middleware global para autenticação
function autenticarToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader)
    return res.status(401).json({ error: true, message: "Token não informado!" });

  const token = authHeader.split(' ')[1];
  if (token !== AUTH_TOKEN)
    return res.status(403).json({ error: true, message: "Token inválido!" });

  next();
}

app.get("/", (req, res) => {
  res.json({ status: "Ok" });
});

// GET (sem autenticação, opcional)
app.get("/getcars", async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM carro');
    res.status(200).json(rows);
  } catch (error) {
    console.error("Erro ao realizar consulta:", error);
    res.status(500).json({ error: true, message: "Erro ao buscar carros." });
  }
});

// GET por ID (também público)
app.get("/getcars/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.execute('SELECT * FROM carro WHERE id = ?', [id]);

    if (rows.length === 0)
      return res.status(404).json({ error: true, message: "Carro não encontrado!" });

    res.status(200).json({ error: false, car: rows[0] });
  } catch (error) {
    console.error("Erro ao buscar carro:", error);
    res.status(500).json({ error: true, message: "Erro ao buscar carro." });
  }
});

// POST - precisa de token
app.post("/insertcar", autenticarToken, async (req, res) => {
  try {
    const { pmarca, pmodelo } = req.body;
    if (!pmarca || !pmodelo) {
      return res.status(400).json({ error: true, message: "Marca e modelo são obrigatórios!" });
    }

    const [result] = await pool.execute(
      'INSERT INTO carro (marca, modelo) VALUES (?, ?)',
      [pmarca, pmodelo]
    );

    if (result.affectedRows > 0)
      res.status(201).json({ error: false, message: "Carro inserido com sucesso!" });
    else
      res.status(400).json({ error: true, message: "Não foi possível inserir o carro." });

  } catch (error) {
    console.error("Erro ao inserir:", error);
    res.status(500).json({ error: true, message: "Erro ao inserir o carro." });
  }
});

// PUT - precisa de token
app.put("/updatecar/:id", autenticarToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { pmarca, pmodelo } = req.body;

    if (!pmarca || !pmodelo)
      return res.status(400).json({ error: true, message: "Informe marca e modelo." });

    const [result] = await pool.execute(
      'UPDATE carro SET marca = ?, modelo = ? WHERE id = ?',
      [pmarca, pmodelo, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ error: true, message: "Carro não encontrado." });

    const [rows] = await pool.execute('SELECT * FROM carro WHERE id = ?', [id]);
    res.status(200).json({ error: false, message: "Carro atualizado!", carro: rows[0] });

  } catch (error) {
    console.error("Erro ao atualizar:", error);
    res.status(500).json({ error: true, message: "Erro ao atualizar o carro." });
  }
});

// DELETE - precisa de token
app.delete("/deletecar/:id", autenticarToken, async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.execute('DELETE FROM carro WHERE id = ?', [id]);

    if (result.affectedRows === 0)
      return res.status(404).json({ error: true, message: "Carro não encontrado." });

    res.status(200).json({ error: false, message: "Carro removido com sucesso!" });
  } catch (error) {
    console.error("Erro ao remover:", error);
    res.status(500).json({ error: true, message: "Erro ao remover o carro." });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
