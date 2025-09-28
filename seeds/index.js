//use this to see the database


const mongoose =require('mongoose')
const CampGround = require("../models/campground");
const cities = require('./cities')


async function main() {
      await mongoose.connect("mongodb://localhost:27017/camp",{
        // useNewUrlParser:true,
        // useUnifiedTopology:true
    
    })
    console.log("mango connection open")    
  }
main().catch(err => console.log("something went wrong",err) );


const seedDB = async()=>
{
    await CampGround.deleteMany({});
    // const c = new CampGround({title:"长乐"})
    for (let i =0;i<50;i++)
    {
        const random1000 =Math.floor(Math.random()*1000); 
        const camp = new CampGround({
            location:`${cities[random1000].city},
            ${cities[random1000].state}`
        })
        await camp.save();
    }
    
}
seedDB();