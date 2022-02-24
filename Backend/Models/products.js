const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
   pname:{
       type:String,
       required:true
   },
   qty:{
    type: Number,
    required:true
   },
   price :{
      type:Number,
      required:true
   },
   exdat:{
       type: String,
       default:Date.now
   }
})
 const prodModel = mongoose.model('products', productSchema);
 module.exports= prodModel;