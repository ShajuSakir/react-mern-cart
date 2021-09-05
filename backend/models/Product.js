//here we tell mongoose how our product will look like
const mongoose = require('mongoose');

//build our schema
const productSchema =new  mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    countInStock:{
        type:Number,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    }
})

//create model, pass string product so mongodb change the collection name to product
const Product = mongoose.model('product', productSchema);

//export product model
module.exports = Product;