const ModelUsers = require("../Models/users")
const {validationResult} =require('express-validator')
const signupcontroller =(req,res)=>{
    const erors = validationResult(req);
    if(!erors.isEmpty()){
        return res.json({message:erors.array()[0].msg})
    }
  const {fullname,numberph,email,password}= req.body
  const users = new ModelUsers({fullname,numberph,email,password})
  users.save().then((user)=>{
      res.json({message:"sign up successful",data:user})
  }).catch((err)=>console.log(err))
}

module.exports= signupcontroller