const express = require("express");
const router = express.Router();
const CreateProdController = require("../Controllers/products");
router.post('/Product', CreateProdController);
module.exports = router;