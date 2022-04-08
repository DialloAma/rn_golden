const ModelSell = require("../Models/Sell");
const prodModel = require("../Models/products")
const CltModel=require("../Models/clients")
const CreateSellController=async(req,res)=>{
    const {buyitems,numberph,amount,paid,balan,dat}=req.body;
   try {
    const sell = new ModelSell({buyitems,numberph,amount,paid,balan,dat});
    
    
        const iditems = buyitems.map((product)=> {return product._id})
        const prods = await prodModel.find({_id:iditems});
        prods.forEach((prod,i)=>{
            if(prod.qty <= 0 || buyitems[i].qtysold > prod.qty ){
                res.json({message:"impossible to make this request"})
                return
            }
            prodModel.updateOne({_id:prod._id},{qty: prod.qty - buyitems[i].qtysold},
            (err)=>{
                if(err){
                    res.json({message:"Not Updated"})
                }
            })
        })
        const clt = await CltModel.findOne({numberph})
        const cltbalance = clt.balance + balan;
        CltModel.findOneAndUpdate({numberph},
            {balance: +cltbalance},
            {new:true},
            (err)=>{
                if(err){
                    res.json({message:"Not Updated"})
                }
            })
            const sold = await sell.save();
        res.json({message:"purchased successfuly",data:sold})

    
    
   } catch (error) {
    
   }
}
const getAllSold= async(req,res)=>{
    const AllSold = await ModelSell.find();
    res.json({data:AllSold})

}

module.exports= {CreateSellController,getAllSold}