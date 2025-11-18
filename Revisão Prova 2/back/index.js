const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

// SIMULAÇÃO DO BANCO DE DADOS
let CARROS = [
    { id: 1, nome: 'Voyage', cor: 'Prata', ano: 2018 },
    { id: 2, nome: 'Celta', cor: 'Vermelho', ano: 2005 },
    { id: 3, nome: 'Golf', cor: 'Preto', ano: 2020 },
];
let nextId = CARROS.length + 1;

const USERS = [
    { id: 1, login: 'alex', password: '123' },
    { id: 2, login: 'helton', password: '456' }
];

// LOGIN

app.post("/login", (req, res) => {
    const { username, password } = req.body || {};
    const user = USERS.find(u => u.login === username && u.password === password);

    if (!user) return res.status(403).json({ error: "Usuário ou senha incorretos" });

    res.status(200).json({ message: "Login realizado com sucesso!" });
});

// CRUD - CREATE (C) ➝ Criar item

app.post("/cars", (req, res) => {
    const { nome, cor, ano } = req.body;
    const novoCarro = { id: nextId++, nome, cor, ano };
    CARROS.push(novoCarro);

    res.status(201).json({ 
        message: "Carro criado com sucesso!",
        data: novoCarro 
    });
});

// CRUD - READ (R) ➝ Ler/buscar itens

app.get("/getcars", (req, res) => {
    res.status(200).json(CARROS);
});

// CRUD - UPDATE (U) ➝ Atualizar item

app.put("/cars/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, cor, ano } = req.body;

    const index = CARROS.findIndex(c => c.id === id);

    if (index === -1)
        return res.status(404).json({ message: "Carro não encontrado" });

    CARROS[index] = { ...CARROS[index], nome, cor, ano };

    res.status(200).json({ message: `Carro ${id} atualizado com sucesso!` });
});


// CRUD - DELETE (D) ➝ Deletar item

app.delete("/cars/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const initialLength = CARROS.length;

    CARROS = CARROS.filter(c => c.id !== id);

    if (CARROS.length === initialLength)
        return res.status(404).json({ message: "Carro não encontrado" });

    res.status(200).json({ message: `Carro ${id} deletado com sucesso!` });
});

// SERVIDOR

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}. Login: alex/123`);
});
