const express = require('express');
const CreateBuyController = require("../Controllers/buy");
const router = express.Router();
router.post("/buy",CreateBuyController);
module.exports=router