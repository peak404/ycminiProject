const express = require('express')
const path = require("path")
const mongoose =require('mongoose')
const CampGround = require("./models/campground");



async function main() {
      await mongoose.connect("mongodb://localhost:27017/camp",{
        // useNewUrlParser:true,
        // useUnifiedTopology:true
    
    })
    console.log("mango connection open")    
  }
main().catch(err => console.log("something went wrong",err) );


const app = express();


app.set("view engine","ejs");
app.set("views",path.join(__dirname,'views'))









app.get("/",(rep,res)=>
{
   
    res.render('home')
})
app.get("/makeCampGround",async (rep,res)=>
{
   const camp = new CampGround({title:'yard',description:"bayside area"});
   await camp.save();
   res.send(camp)
})

app.listen(3000,()=>{
    console.log("listeing port 3000")
}
)