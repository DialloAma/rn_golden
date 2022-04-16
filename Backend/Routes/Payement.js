const CreatePayement=require("../Controllers/Payement");
const express= require("express");
const router = express.Router();
router.post('/Payement', CreatePayement);
module.exports= router