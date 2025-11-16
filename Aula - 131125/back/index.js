const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Chave secreta do Token
const JWT_SECRET = 'ChaveXpto*123@';

// "Banco de dados" fake
const USERS = [
    { id: 1, login: 'alex', password: '123' },
    { id: 2, login: 'helton', password: '456' }
];

// Health check
app.get("/", (req, res) => {
    res.status(200).json({ ok: true });
});

// Rota de Login
app.post("/login", (req, res) => {
    const { username, password } = req.body || {};

    // Procurar por login e senha (USERNAME = LOGIN no front)
    const user = USERS.find(
        u => u.login === username && u.password === password
    );

    if (!user) {
        return res.status(403).json({ error: "usuário ou senha incorretos" });
    }

    // Gerar Token
    const token = jwt.sign(
        { id: user.id, login: user.login },
        JWT_SECRET,
        { expiresIn: "1h" }
    );

    res.status(200).json({ token });
});

// Iniciar servidor ouvindo em TODA a rede
app.listen(5000, '0.0.0.0', () => {
    console.log("Servidor rodando na porta 5000");
    console.log("Acesse via: http://10.136.33.8:5000/");
});
