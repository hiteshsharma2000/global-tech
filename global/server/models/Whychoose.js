const mongoose=require('mongoose')
const WhychooseSchema=new mongoose.Schema({
    title:String,
    desciption:String,
    img:String
})

const Whychoosemodel=mongoose.model('whychoose',WhychooseSchema)

module.exports={Whychoosemodel}