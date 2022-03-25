const ModelUsers = require("../Models/users")
const bcrypt =require("bcryptjs")
const {validationResult} =require('express-validator')
const signupcontroller =(req,res)=>{
    const erors = validationResult(req);
    if(!erors.isEmpty()){
        console.log(erors)
        return res.json({message:erors.array()[0].msg})
    }
  const {fullname,numberph,email,password}= req.body
   bcrypt.hash(password,7).then((hashedpassword)=>{
    const users = new ModelUsers({fullname,numberph,email,password:hashedpassword})
    users.save().then((user)=>{
        res.json({message:"sign up successful",data:{fullname:user.fullname,email:user.email}})
    }).catch((err)=>console.log(err))

   }).catch((err)=>console.log(err))
 
}
const signincontroller= async(req,res)=>{
try {
    const erors = validationResult(req);
    if(!erors.isEmpty()){
        console.log(erors)
        return res.json({message:erors.array()[0].msg})
    }
    const {email,password}=req.body
    //find user
    const user= await ModelUsers.findOne({email});
    if(!user){
        console.log("not")
        res.json({message:"user not found"}) 
    }
    //compare password
    const isAuth = await bcrypt.compare(password,user.password)
    if(!isAuth){
       
        return res.json({message:"email and user is incorrect "}) 
    } 
    return res.json({message:"user signed in"})
    
    
} catch (error) {
    return res.json({message:"failed to sign in , Please try again "})
}

}

module.exports= {signupcontroller,signincontroller}