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




   /* try {
        const sell = new ModelSell({buyitems,numberph,amount,paid,balan,dat});
        const fil= buyitems.map((item)=>item.pname)
       const prod = await prodModel.findOne({fil})
       console.log( "all product" +prod)
    
      console.log(fil)
       
           const clt = await CltModel.findOne({numberph})
        if(!prod ){
            res.json({message:"prodId Not found"})
        }

        if (!clt){
            res.json({message:"client Not found"}) 
        }
            const sellprod = await sell.save();
            if(sellprod){
                const rduceqty = prod.qty - buyitems.qtysold;
                const cltbalance = clt.balance + balan;
          
                prodModel.findOneAndUpdate({buyitems},
                    {$set:{qty: +rduceqty}},
                    {new:true},
                    (err)=>{
                        if(err){
                            res.json({message:"Not Updated"})
                        }
                    }
                    );
                    CltModel.findOneAndUpdate({numberph},
                        {$set:{balance: +cltbalance}},
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
    }*/
}

module.exports= CreateSellController