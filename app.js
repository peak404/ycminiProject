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


app.get("/campgrounds",async(req,res)=>
{
    const campgrounds = await CampGround.find({});

    res.render("campgrounds/index",{campgrounds})
})

app.get("/show/:id",async(req,res)=>
{
    const {id} = req.params;
    const ID = await CampGround.findById({id})
    res.redirect("campgrounds/show",{ID})
})

app.listen(3000,()=>{
    console.log("listeing port 3000")
}
)
