const express =require("express");
const router = express.Router();
const CreateCltController= require("../Controllers/clients")

router.post('/Client',CreateCltController);
module.exports= router;