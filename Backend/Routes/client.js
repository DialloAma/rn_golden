const express =require("express");
const router = express.Router();
const {CreateCltController,listClients,updateControllerClt}= require("../Controllers/clients")


router.post('/Clients',CreateCltController);
router.get('/Clients',listClients);
router.put('/Clients',updateControllerClt);

module.exports= router;