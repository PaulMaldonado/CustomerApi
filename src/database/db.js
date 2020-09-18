const mysql = require("mysql");

const db = mysql.createConnection({
    host: 'test',
    user: 'test',
    password: 'test',
    database: 'test',
});

// Verificando si se ha hecho exitosamente la conexión a la BD
db.connect((error) => {
    if(error) {
        console.error(error);
    }

    console.log("Connected is successfully");
});

module.exports = db;