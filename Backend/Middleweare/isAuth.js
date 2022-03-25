const jwt = require("jsonwebtoken");
const isAuth=(req,res,next)=>{
    try {
        const AuthorizationHeader= req.get('Authorization')
        if(!AuthorizationHeader)
            throw new Error("UnAuthenticated")
        
        const token= AuthorizationHeader.split(' ')[1];
        const getToken= jwt.verify(token,'superkeycannotbeguess');
        if(!getToken)
            throw new Error("UnAuthorized")
        next();
    } catch (error) {
        console.log(error)
        res.json({message:error.message}) 
    }
}
module.exports=isAuth