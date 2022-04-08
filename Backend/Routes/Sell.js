const express = require('express');
const {CreateSellController,getAllSold} = require("../Controllers/Sell");
const router = express.Router();
router.post("/sell",CreateSellController);
router.get("/Sold",getAllSold)
module.exports=router