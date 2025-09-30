const express = require('express')
const path = require("path")
const mongoose =require('mongoose')
const CampGround = require("./models/campground");
const methodOverride = require('method-override')

const app = express();
app.set("view engine","ejs");
app.set("views",path.join(__dirname,'views'))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))



async function main() {
      await mongoose.connect("mongodb://localhost:27017/camp",{
        // useNewUrlParser:true,
        // useUnifiedTopology:true
    
    })
    console.log("mango connection open")    
  }
main().catch(err => console.log("something went wrong",err) );



app.get("/",(rep,res)=>
{
   
    res.render('home')
})


app.get("/campgrounds",async(req,res)=>
{
    const campgrounds = await CampGround.find({});

    res.render("campgrounds/index",{campgrounds})
})

app.get('/campgrounds/new',(req,res)=>{
    res.render('campgrounds/new')
})

app.get("/campgrounds/:id",async(req,res)=>
{
    
    
    const campground = await CampGround.findById(req.params.id)
    res.render("campgrounds/show",{campground})
   
})
app.post("/campgrounds",async(req,res)=>  //add
{
    const newCampground = new CampGround(req.body.campground)
    await newCampground.save()
    res.redirect(`/campgrounds/${newCampground._id}`)
    
})

app.get("/campgrounds/:id/edit", async(req,res)=> //edit page
{
    const campground = await CampGround.findById(req.params.id);
    res.render("campgrounds/edit",{campground})

})
app.put("/campgrounds/:id",async(req,res)=>      //edit 
{
   
    const {id} = req.params; 
    const campground =await CampGround.findByIdAndUpdate(id,{...req.body.campground})
    res.redirect(`/campgrounds/${campground._id}`)
})

app.delete("/campgrounds/:id",async(req,res)=>   //delete
{
    const {id} =req.params;
    await CampGround.findByIdAndDelete(id);
    res.redirect("/campgrounds")
})



app.listen(3000,()=>{
    console.log("listeing port 3000")
}
)
