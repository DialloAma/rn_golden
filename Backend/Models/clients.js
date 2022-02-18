const mongoose =require("mongoose");
const Schema= mongoose.Schema;
const clientSchema = new Schema({
    fname:{ type:String, require:true},
    numberph: { type:Number, require:true},
    adress: { type:String, require:true},
    balance: { type:Number, require:true},
});
const CltModel= mongoose.model('clients',clientSchema)
module.exports= CltModel;
