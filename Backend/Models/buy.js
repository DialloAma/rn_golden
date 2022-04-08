const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BuySchema= new Schema({
    prodId :{
        type: Schema.Types.ObjectId,
        ref:'products'
    },
    pname:{
         type:String,
         required:true
    },
    qty:{
      type:Number,
      required:true
    },
    price:{
        type:Number,
        required:true
    },
    amou:{
      type:Number   
    },
   /* exdat:{
        type:String,
        required:true
    },*/
    dat:{
        type:String,
        default:new Date()
    }

})
const ModelBuy = mongoose.model('buy',BuySchema);
module.exports= ModelBuy