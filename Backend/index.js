const express = require("express");
const server = express();
const handleReq=(requestObject,responseObject)=>{console.log('hello world');
const url = requestObject.url;
responseObject.setHeader("content-type","text/html");
if(url==='/'){
    responseObject.write("<h1>hello monde</h1>");
}
responseObject.end();
}
server.use(handleReq);

server.listen(2000,"127.0.0.1", ()=>console.log("My server is ready") )