const CltModel = require("../Models/clients");

const CreateCltController=(req,res)=>{
    const {fname,numberph,adress,balance}= req.body;
    const clts = new CltModel({fname,numberph,adress,balance});
    clts.save().then((result)=>{
        res.json({message:"create succeful", data:result});
    })
    

}

module.exports= CreateCltController;