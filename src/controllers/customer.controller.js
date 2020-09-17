const db = require("../database/db");

// Obtener todos los clientes creados
exports.getCustomersAll = ((req, res) => {
   const sql = "SELECT * FROM customers";

   db.query(sql, (error, results) => {
        if(error) {
            console.error(error);
        }

        return res.json({
            status: 200,
            results,
            message: "Customers lists retrieved successfully"
        });
   });
});

// Crear nuevos clientes
exports.createCustomers = ((req, res) => {
    const newCustomer = {
        name: req.body.name,
        last_name: req.body.last_name,
        description: req.body.description,
        phone: req.body.description,
        email: req.body.email,
        direction: req.body.direction,
        state: req.body.state,
        city: req.body.city
    };

    const sql = "INSERT INTO customers SET ?";

    db.query(sql, newCustomer, (error, result) => {
        if(error) {
            console.error(error);
        }

       return res.json({
            status: 200,
            message: "New customer added successfully"
        });
    });

});

// Obtener un solo cliente por id
exports.getById = ((req, res) => {
    const id = req.params.id;

    const sql = `SELECT * FROM customers WHERE id = ${id}`;

    db.query(sql, (error, results) => {
        if(error) {
            console.error(error);
        }

        return res.json({
            results,
            status: 200,
            message: 'One customer for id'
        });
    });
});

// Eliminar un cliente por id
exports.deleteById = ((req, res) => {
    const id = req.params.id;

    const sql = `DELETE FROM customers WHERE id = ${id}`;

    db.query(sql, (error, result) => {
        if(error) {
            console.error(error);
        }

        return res.json({
            status: 200,
            message: 'Deleted customer successfully'
        });
    });
});

// Actualizar un cliente por id
exports.updateById = ((req, res) => {
    const id = req.params.id;

    const updateCustomers = {
        name: req.body.name,
        last_name: req.body.last_name,
        description: req.body.description,
        phone: req.body.phone,
        email: req.body.email,
        direction: req.body.direction,
        state: req.body.state,
        city: req.body.city
    };

    const sql = `UPDATE customers SET ? WHERE id = ${id}`;

    db.query(sql, updateCustomers, (error, result) => {
        if(error) {
            console.error(error);
        }

        return res.json({
            result,
            status: 200,
            message: 'Updated customer successfully'
        });
    });
});