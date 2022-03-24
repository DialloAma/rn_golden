const ModelBuy = require("../Models/buy");
const prodModel = require("../Models/products")

const CreateBuyController=async(req,res)=>{
    const {prodId,pname,qty,price,datexpi,dat}=req.body;
    try {
        const buy = new ModelBuy({prodId,pname,qty,price,datexpi,dat});
        const prod = await prodModel.findOne({pname});
        if(!prod){
            res.json({message:"Not found"})
        }
            const buyprod = await buy.save();
            if(buyprod){
                const addqty = prod.qty + qty;
                prodModel.findOneAndUpdate({pname},
                    {$set:{qty: addqty,
                    price: price,
                exdat: datexpi}},
                    {new:true},
                    (err)=>{
                        if(err){
                            res.json({message:"Not find"})
                        }
                    })
                    res.json({message:"added successfuly",data:buyprod})
            }
           
        
        
    } catch (error) {
        console.log(error)
    }
}

module.exports= CreateBuyController