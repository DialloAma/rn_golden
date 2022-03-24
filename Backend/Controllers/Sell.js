const ModelSell = require("../Models/Sell");
const prodModel = require("../Models/products")
const CltModel=require("../Models/clients")
const CreateSellController=async(req,res)=>{
    const {buyitems,cltId,amount,paid,balance,dat}=req.body;
    try {
        const sell = new ModelSell({buyitems,cltId,amount,paid,balance,dat});
       const prod = await prodModel.findOne(buyitems.prodId)
         //  const clt = await CltModel.findOne({cltId})
        if(!prod ){
            res.json({message:"Not found"})
        }
            const sellprod = await sell.save();
            if(sellprod){
                const rduceqty = prod.qty - buyitems.qty;
               // const cltbalance = clt.balance + balance;
                prodModel.findOneAndUpdate(buyitems.prodId,
                    {$set:{qty: rduceqty}},
                    {new:true},
                    (err)=>{
                        if(err){
                            res.json({message:"Not Updated"})
                        }
                    });
                    CltModel.findOneAndUpdate({cltId},
                        {$set:{balance:cltbalance}},
                        {new:true},
                        (err)=>{
                            if(err){
                                res.json({message:"Not Updated"})
                            }
                        })
                    res.json({message:"purchased successfuly",data:sellprod})
            }
           
        
        
    } catch (error) {
        console.log(error)
    }
}

module.exports= CreateSellController