const express = require("express");
const router = express.Router();
const {CreateProdController,listControllerProd} = require("../Controllers/products");
router.post('/Product', CreateProdController);
router.get('/Product/:id?',listControllerProd)
module.exports = router;