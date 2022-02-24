const CltModel = require("../Models/clients");

const CreateCltController= async (req,res)=>{
    const {fname,numberph,adress,balance}= req.body;
    try {
        const clts = new CltModel({ fname,numberph,adress,balance});
        const client = await clts.save();
         
        if (client){
            res.json({message:"create succeful", data:client});   
        }
        
    } catch (error) {
        console.log(error.message());
    }
    

}
const listClients = async(req,res)=>{
  try {
      const listclt = await CltModel.find();
      res.json({data:listclt})
  } catch (error) {
      console.log(error)
  }
}
const updateControllerClt = async(req,res)=>{
    const {_id,fname,numberph,adress,balance}= req.body;
    try {
        const clt = await CltModel.findById(_id);
        if(clt){
            clt.fname=fname;
            clt.numberph=numberph;
            clt.adress=adress;
            clt.save();
            res.json({message: "updated succeful",clt})
           // return;
        }
        res.json({message: "not found"})
    } catch (error) {
       console.log(error) 
    }
}

module.exports= {CreateCltController,listClients,updateControllerClt};