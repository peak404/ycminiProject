const express = require('express')
const mongoose =require('mongoose')
const path = require("path")



const app = express();


app.set("view engine","ejs");
app.set("views",path.join(__dirname,'views'))









app.get("/",(rep,res)=>
{
   
    res.render('home')
})

app.listen(3000,()=>{
    console.log("listeing port 3000")
}
)