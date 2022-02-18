const prodModel = require("../Models/products");
const CreateProdController=(req,res)=>{
    const {pname,qty,price,exdate}=req.body;
    const prods= new prodModel({pname,qty,price,exdate});
    prods.save().then((result)=>{
      res.json({message:'create succefuly', data:result})
    }).catch((err)=>console.log(err));

}
module.exports=CreateProdController;