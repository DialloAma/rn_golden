const express =require("express");
const router = express.Router();
const {body}   = require("express-validator")
const isAuth = require("../Middleweare/isAuth")
const {CreateCltController,listClients,updateControllerClt}= require("../Controllers/clients");
const CltModel = require("../Models/clients");


router.post('/Clients',[body('fname').trim().not().isEmpty().withMessage('Merci de saisir le nom du client'),
body('numberph').trim().not().isEmpty().withMessage('Merci de saisir le Numero du téléphone du client')
.custom((value,{req})=>{
    return CltModel.findOne({'numberph':value}).then(doc=>{
        if(doc)
        return Promise.reject('Ce Numéro de téléphone existe déja!')
    })

}),
body('adress').trim().not().isEmpty().withMessage('Merci de saisir adresse du client')],CreateCltController);
router.get('/Clients',listClients);
router.put('/Clients',updateControllerClt);

module.exports= router;