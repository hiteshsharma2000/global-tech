const mongoose=require('mongoose')
const ShopByRoomSchema=new mongoose.Schema({
    title:String,
    desciption:String,
    img:String
})

const ShopByRoomModel=mongoose.model('ShopByRoom',ShopByRoomSchema)

module.exports={ShopByRoomModel}