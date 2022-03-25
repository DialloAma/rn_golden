const express = require("express");
const ModelUsers = require("../Models/users")
const {body} = require("express-validator")
const router = express.Router();
const signupcontroller = require("../Controllers/signup")
router.put("/SignUp",[
    body('fullname').trim().not().isEmpty().withMessage('fullname required'),
    body('numberph').trim().not().isEmpty().withMessage('user number required'),
    body('email').isEmail().withMessage('invalid message')
    .custom((value,{req})=>{
        return ModelUsers.findOne({email:value}).then((userdoc)=>{
            if(userdoc){
                return Promise.reject("Email already existed");
            }
            
        });
    
    }),
    body('password').trim().isLength({min:6})

],signupcontroller)


module.exports= router