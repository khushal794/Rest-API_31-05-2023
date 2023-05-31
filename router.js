const express = require("express");
const router = new express.Router();

const connection = require("./connection");

router.get("/user/home", (req, res) => {
  res.send("inside router");
});

router.get("user/allusers", (req, res) => {
  connection.query("select * from emp", (err, result) => {
    if (err) {
      res.status(400).json("No Data Found,Internal Server Error!!");
    } else {
      res.status(200).json(result);
    }
  });

  router.get("/finduser/:id",(req,res)=>{
    const {id}=req.params;
    console.log(id);
    connection.query("select * from emp where id=?",id,(err,result)=>{
        if(err){
            res.status(422).json("eroor");
        }
        else{
            res.status(201).json(result);
        }
    })
  })
});

module.exports=router;