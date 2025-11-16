const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: "localhost",
    port: 3307,
    user: "root",
    password: "",
    database: "aulanode",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

async function testConnection() {
    const [rows] = await pool.query('SELECT NOW() AS now');
    console.log("reposta do banco: ", rows[0].now);
    return rows[0].now;
}

testConnection();

module.exports = pool;