const express = require('express');
const CreateSellController = require("../Controllers/Sell");
const router = express.Router();
router.post("/sell",CreateSellController);
module.exports=router