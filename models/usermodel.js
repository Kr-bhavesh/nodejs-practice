const mongoose = require('mongoose')
const user_schema = mongoose.Schema({
    user_name:{
       type:String,
       unique:true,
       required:true
    },
    password:{
        type:String,
        required:true
    }
}
)
const user_model = mongoose.model('User',user_schema)
module.exports=user_model;