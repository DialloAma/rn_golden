const ModelBuy = require("../Models/buy");
const prodModel = require("../Models/products")

const CreateBuyController=async(req,res)=>{
    
    try {
        const {prodId,pname,qty,price,dat}=req.body;
        const buy = new ModelBuy({prodId,pname,qty,price,dat});
        const prod = await prodModel.findOne({pname});
        console.log(prod)
        if(!prod){
            res.json({message:"Not found"})
        }
            const buyprod = await buy.save();
            if(buyprod){
                const addqty = prod.qty + qty;
                prodModel.findOneAndUpdate({pname},
                    {$set:{qty: +addqty,price}},
                  
                    {new:true},
                    (err)=>{
                        if(err){
                            res.json({err:"Not updated"})
                        }
                    }
                    )
                   /* prodModel.findOneAndUpdate({pname},
                        
                        {$set:{ price}},
                       
                        {new:true},
                        (err)=>{
                            if(err){
                                res.json({err:"Not updated"})
                            }
                        }
                        )
                        prodModel.findOneAndUpdate({pname},
                           {$set:{exdat:datexpi}},
                            {new:true},
                            (err)=>{
                                if(err){
                                    res.json({err:"Not updated"})
                                }
                            }
                            ) */ 
                    res.json({message:"added successfuly",data:buyprod})
            }
           
        
        
    } catch (error) {
        console.log(error)
    }
}

module.exports= CreateBuyController