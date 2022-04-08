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


//connect my app to mongodb
mongoose.connect("mongodb+srv://goldenUser:y0iMzZMDtygc26NX@cluster0.vkk55.mongodb.net/Golden?retryWrites=true&w=majority",
{useNewUrlParser:true,useUnifiedTopology:true})
mongoose.connection.on("connected",()=>console.log("connected to mongodb"))
mongoose.connection.on("error",(err)=>console.log(err))
server.listen(2000, ()=>console.log("My server is ready") );
