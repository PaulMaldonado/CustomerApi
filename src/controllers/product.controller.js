const db = require("../database/db");

// Función para obtener todos los productos
exports.getProductsAll = ((req, res) => {
    const sql = "SELECT * FROM products";

    db.query(sql, (error, results) => {
        if(error) {
            console.error(error);
        }

        return res.json({
            results,
            status: 200,
            message: 'Customers lists retrieved successfully'
        });
    });
});

// Función para crear nuevos productos
exports.createProducts = ((req, res) => {
    const newProducts = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity
    };

    const sql = "INSERT INTO products SET ?";

    db.query(sql, newProducts, (error, results) => {
        if(error) {
            console.error(error);
        }

        return res.json({
            results,
            status: 200,
            message: 'Created product successfully'
        });
    });
});

// Función para obtener un producto por id
exports.getByIdProducts = ((req, res) => {
    const id = req.params.id;

    const sql = `SELECT * FROM products WHERE id = ${id}`;

    db.query(sql, (error, result) => {
        if(error) {
            console.error(error);
        }

        return res.json({
            result,
            status: 200,
            message: 'One product for id'
        });
    });

});