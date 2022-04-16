const mongoose=require("mongoose");
const Schema = mongoose.Schema;
const PaidSchema = new Schema({
    numberph:{
        type :Number,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    dte:{
        type : Date
    }
})
const payement = mongoose.model('Payement',PaidSchema);
module.exports= payement;