const express = require('express');
const cors = require('cors');
const pool = require('../db/mysqlConnect');

const app = express();

// Midlewares básicos

app.use(cors());
app.use(express.json()); // Permitir que recebamos JSON nas requisições

app.get("/", async (req, res) => {
    res.json({status: "Ok"});
});

// Get em carros

app.get("/getcars", async (req, res) => {
    try{
        const [rows] = await pool.execute('SELECT * FROM carro;');
        res.status(202).json(rows);
    } catch (error){
        console.error("Erro ao realizar a consulta", error);
    }    
})

app.post("/insertcar", async (req, res) =>{
    try{
        const { pmarca, pmodelo } = req.body;
        if(!pmarca || pmodelo == null){
            return res.status(400).json({error: true, message: "Marca ou modelo não foi informado"});
        }

        const [result] = await pool.execute('INSERT INTO carro(marca, modelo) VALUES(?, ?)', [pmarca, pmodelo]);

        console.log(result);

        if(result.affectedRows > 0){
            res.status(201).json({error: false, message: "Carro inserido"});
        }else{
            res.status(400).json({error: true, message: "Carro não inserido"});
        }

    }catch(error){
        console.error("Erro ao inserir", error)
    }
})


const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

