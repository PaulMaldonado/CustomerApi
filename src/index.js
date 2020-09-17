const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const customerRoutes = require("./routes/customers.router");

const app = express();


// midlaware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(morgan('dev'));

// routes
app.use(customerRoutes);

// Server
app.listen(app.get('port'));
console.log(`Server running on port: http://localhost:${app.get('port')}`);