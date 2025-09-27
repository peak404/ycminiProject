const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const CampGroundSchema = new Schema({
    title:String,
    price:String,
    description:String,
    location:String

    
})


const CampGround =mongoose.model('CampGround',CampGroundSchema);
module.exports=CampGround;