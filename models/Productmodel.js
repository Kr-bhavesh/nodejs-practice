const mongoose = require('mongoose')
const product_schema = mongoose.Schema(
    {
        name:{
            type: String,
            required:true
        },
        price:{
            type:Number,
            required:true
        }
        
    }
)
const Product = mongoose.model('Product_info',product_schema);
module.exports=Product;