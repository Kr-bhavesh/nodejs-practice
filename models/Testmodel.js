const mongoose = require('mongoose');
const test_schema = mongoose.Schema({
    "name":{
        type:String,
        required:true
    }
}   
)
const Test = mongoose.model('Test',test_schema);
module.exports = Test;