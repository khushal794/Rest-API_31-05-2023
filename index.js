const express =require("express");
const app=express();
const port=3000;
require('./connection');
const router=require('./router');
const cors=require("cors");

app.use(cors());
app.use(router);
app.use(express.json);
app.get("/",(req,res)=>{
res.send("hello world");
})

app.listen(port,()=>{
    console.log("App is running fine")
})