const Payement= require("../Models/Payement");
const CltModel=require("../Models/clients")
 const CreatePayement = async(req,res)=>{
     const { numberph,amount,dte}=req.body
     try {
          const pay = new Payement({numberph,amount,dte});
          const cltup = await CltModel.findOne({numberph});
          if(!cltup){
            res.json({message:"Not found"})
          }
          if(cltup.balance < amount){
            res.json({message:"le montant saisi est supérieur au balance du client"})
            return
          }
          const balan = cltup.balance - amount;
          console.log(balan)
          CltModel.findOneAndUpdate({numberph},{$set:{balance: +balan}},{new:true},(err)=>{
            if(err){
              res.json("not updated")
            }
          })
          const paid = await pay.save();
          res.json({message:"payement effectuer avec succè", data:paid })

     } catch (error) {
         console.log(error)
     }
 }
 module.exports= CreatePayement;