const express = require('express');
const cors = require('cors');
const pool = require('../db/mysqlConnect');
const jwt = require("jsonwebtoken")

const app = express();

//Midlewares básicos
app.use(cors());
app.use(express.json()); //Permitir que recebamos JSON nas requisições

function testaToken(token){
    if(token === "eGv&>V£s}zV_q]#TSx[B520WGP|!~VOpe@~Y8ex)GTok,~867E"){
        return true;
    }else{
        return false;
    }
}

app.get("/", async (req, res) => {
    res.json({status: "Ok"});
});

//GET em carros (R)
app.get("/getcars", async (req, res) => {
    try {
        const authorizationHeader = req.headers.authorization;
        const token = authorizationHeader.split(" ")[1];
        console.log("Token: ", token);

        if(testaToken(token)){
            const [rows] = await pool.execute(
                'SELECT * FROM carro;'
            );
    
            setTimeout(()=>{
                console.log("Simulando um delay de API");
                res.status(202).json(rows);
            }, 5000);
        }else{
            res.status(403).json({error: true, message: "Token inválido!"});
        }
        
    } catch (error){
        console.error("Erro ao realizar consulta: ", error);
    }
});

//GET em um carro especifico (R)
app.get("/", async (req, res) => { 
    try{
        res.status(200).json({"ok": true})
    }
})

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));