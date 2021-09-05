//to bring in the .env  settings here
//require("dotenv").config();

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
//console.log('DB .env physical path', path.resolve(__dirname, '../.env'), process.env.MONGO_URI);

//pull express server
const express = require("express");
//bring connectDB into server.js
const connectDB = require("./config/db");
//for routing
const productRoutes = require('./routes/productRoutes.js');



connectDB();

//initiate express function in app variable
const app = express();

//create routes, any requests /api/products will have access to route productRoutes
app.use('/api/products',productRoutes);

//need json data from and to our react client
app.use(express.json())

const PORT = process.env.PORT || 5000;
//listen on some port variable
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));