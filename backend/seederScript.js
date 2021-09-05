//connect to our DB
require('dotenv').config();

//import those products
const productData = require('./data/products');
//import connectDB
const connectDB = require('./config/db');
//we need product model
const Product = require('./models/Product');

//to connect to our mongodb instance
connectDB();

//import data function, async function because we are working with the DB
const importData = async () =>{
    try{
        //this function will delete everything in the DB and insert the items
        await Product.deleteMany({});

        await Product.insertMany(productData);

        console.log('Data import Success');

        process.exit();
    }
    catch(error){
        console.error('Error with data import');
        process.exit(1);
    }
}

//to run this function immediatly when seederScript.js called
importData();