const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const paypal = require('paypal-rest-sdk');
const mongoose =require("mongoose");
const CltRouter= require("./Routes/client");
const ProdRouter = require("./Routes/products")
const BuyRouter = require("./Routes/buy")
const SellRouter = require("./Routes/Sell")
const usersRouter = require("./Routes/users")
server.use(bodyParser.json());

server.use(usersRouter)
server.use(CltRouter);
server.use(ProdRouter);
server.use(BuyRouter);
server.use(SellRouter)

/*paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'AU8L62Fop-mqG4kaARBMQgqEn09Hyf0UnLa3Xh8pcFEeg-Mn9MAwW5_nUX3_mh-oI1HxnF19wZ3R4-zt',
    'client_secret': 'EPAWvGYnDeSgk4zAz1di0V8LseMyK9sqGf_nSMH5nNp52XEvVQH6qb6N0LOdFoL8IbrAkW3oPgZ3WSOr'
  });
  server.get('/',(req,res)=>{
  res.sendFile(__dirname + "/success.html")
  }) 
  var amount=null
    server.get('/paypal/:amount',(req,res)=>{
      amount = req.params.amount
      var create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:2000/succes",
            "cancel_url": "http://localhost:2000/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "item",
                    "sku": "item",
                    "price": 1,
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": 1
            },
            "description": "This is the payment description."
        }]
    };

    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            console.log("Create Payment Response");
            console.log(payment);
            res.redirect(payment.links[1].href)
           // res.sendFile(__dirname + "/success.html")
        }
    });

  })*/

//connect my app to mongodb
mongoose.connect("mongodb+srv://goldenUser:y0iMzZMDtygc26NX@cluster0.vkk55.mongodb.net/Golden?retryWrites=true&w=majority",
{useNewUrlParser:true,useUnifiedTopology:true})
mongoose.connection.on("connected",()=>console.log("connected to mongodb"))
mongoose.connection.on("error",(err)=>console.log(err))
server.listen(2000, ()=>console.log("My server is ready") );
