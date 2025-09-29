//use this to see the database


const mongoose =require('mongoose')
const CampGround = require("../models/campground");
const {places,descriptors} = require('./seedHelpers')
const cities = require('./cities')


async function main() {
      await mongoose.connect("mongodb://localhost:27017/camp",{
        // useNewUrlParser:true,
        // useUnifiedTopology:true
    
    })
    console.log("mango connection open")    
  }
main().catch(err => console.log("something went wrong",err) );


// const sample1 =array=>array[Math.floor(Math.random()*array.length)]
const sample =function(array)
{
    if(!Array.isArray(array) || array.length=== 0)
    {
        return "None"
    }
    return array[Math.floor(Math.random()*array.length)]

}

const seedDB = async()=>
{
    await CampGround.deleteMany({});
    // const c = new CampGround({title:"长乐"})
    for (let i =0;i<50;i++)
    {
        const random1000 =Math.floor(Math.random()*cities.length); 
        const camp = new CampGround({
            location:`${cities[random1000].city}, ${cities[random1000].state}`,
            title:`${sample(descriptors)} ${sample(places)}`
        })
        await camp.save();
    }
    
}
seedDB();