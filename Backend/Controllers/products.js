const prodModel = require("../Models/products");
const CreateProdController= async (req,res)=>{
    const {pname,qty,price,exdat}=req.body;
    try {
      const prods= new prodModel({pname,qty,price,exdat});
      const product= await prods.save()
      if(product){
        res.json({message:'create succefuly', data:product})
      }
      
    } catch (error) {
      console.log(error)
    }
    
  

}
const listControllerProd = async(req,res)=>{
  try {
   const {id}=req.params;
    if (id){
      const listProd = await prodModel.find({_id:id});
      res.json({data:listProd})
    }else{
     const listProd = await prodModel.find();
    res.json({data:listProd})
    }
   /* const listProd = await prodModel.find();
    res.json({data:listProd})*/
  
  } catch (error) {
    console.log(error);
  }
}
/*const updateControllerProd= async (req,res)=>{
  const {id,pname,qty,price,exdate}=req.body;
  try {
    const prod= await prodModel.findById(id);
    if(prod){
      prod.pname=
    }
    
  } catch (error) {
    
  }
}*/
module.exports={CreateProdController,listControllerProd};