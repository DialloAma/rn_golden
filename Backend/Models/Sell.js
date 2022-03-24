const mongoose = require("mongoose");
const Schema= mongoose.Schema;
const SellSchema = new Schema({
  buyitems:[{  
        prodId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'products',
        required:true
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
    }],
     cltId:{
          type: mongoose.Schema.Types.ObjectId,
          ref:'clients',
          required:true
      },
      amount:{
          type:Number,
          required:true
      },
      paid:{
          type:Number,
          required:true
      },
      balance:{
         type:Number,
         required:true
      },
      dat:{
          type:Date,
      }
})
const ModelSell = mongoose.model("Sell",SellSchema)
module.exports = ModelSell