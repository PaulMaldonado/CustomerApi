const mysql = require("mysql");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'customer_api',
});

// Verificando si se ha hecho exitosamente la conexión a la BD
db.connect((error) => {
    if(error) {
        console.error(error);
    }

    console.log("Connected is successfully");
});

module.exports = db;