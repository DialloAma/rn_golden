const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullname:{
        type:String,
        required:true
    },
    numberph:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        required:true
    }
})
const ModelUsers = mongoose.model('Users',UserSchema)
module.exports=ModelUsers