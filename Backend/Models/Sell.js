const mongoose = require("mongoose");
const Schema= mongoose.Schema;
const SellSchema = new Schema({
  buyitems:[{  
        _id:{
        type: String
    },
    pname:{
        type:String,
        required:true
    },
    qtysold:{
        type:Number,
        required:true
      },
      price:{
          type:Number,
          required:true
      },
    }],
    /* cltId:{
          type: mongoose.Schema.Types.ObjectId,
          ref:'clients',
          required:true
      },*/
      numberph: {
        type:Number, 
        require:true},
      amount:{
          type:Number,
          required:true
      },
      paid:{
          type:Number,
          required:true
      },
      balan:{
         type:Number,
         required:true
      },
      dat:{
          type:Date,
      }
})
const ModelSell = mongoose.model("Sell",SellSchema)
module.exports = ModelSell